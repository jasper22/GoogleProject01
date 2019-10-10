// Package auth is authentication with JWT token middleware
package auth

import (
	"bytes"
	"errors"
	"net/http"
	"strings"
	"time"

	"encoding/json"

	"github.com/gin-gonic/gin"
	log "github.com/sirupsen/logrus"
)

const (
	// AUTHORIZATION_HEADER is a name of authorization record in header
	AUTHORIZATION_HEADER = "Authorization"

	// BEARER_TOKEN_NAME is a name of authorization Bearer token record
	BEARER_TOKEN_NAME = "Bearer"
)

var logger *log.Entry

//
// This function should initialize before anything else
// Actually it setup internal logger
func init() {
	// Log as JSON instead of the default ASCII formatter.
	log.SetFormatter(&log.JSONFormatter{})

	logger = log.WithFields(log.Fields{
		"module": "Authorization",
	})
}

//
// Middleware to check and validate authorization with JWT tokens
func Middleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		authorizationHeader := c.Request.Header[AUTHORIZATION_HEADER]
		if authorizationHeader == nil {
			// Not set
			logger.Error("Authorization is not set in headers at all")

			c.AbortWithStatus(http.StatusUnauthorized)
			return
		}

		allTokens := strings.Split(authorizationHeader[0], BEARER_TOKEN_NAME)
		if len(allTokens) != 2 {
			// Header set without token
			logger.Error("Could not parse authorization header")

			c.AbortWithStatus(http.StatusUnauthorized)
			return
		}

		if allTokens[0] == "" && allTokens[1] == "" {
			// Header set without token
			logger.Error("Abnormal authorization header")

			c.AbortWithStatus(http.StatusUnauthorized)
			return
		}

		jwtToken := allTokens[1]
		logger.Info("Token is:" + jwtToken)

		// Valdate with Hydra
		err := tokenValidate(jwtToken)

		if err == nil {
			logger.Info("Token successfully validated")

			// Everything is ok
			c.Next()
		} else {
			logger.Error("Could not validate token ! Not set ? ", err)

			c.AbortWithStatus(http.StatusUnauthorized)
			return
		}

	}
}

//
// Function will validate provided 'token' with Hydra
// If token is not exist or not accessible or has any other error then 'error' will be returned
// otherwise 'nil' will be returned if everything is ok
// https://www.ory.sh/docs/hydra/sdk/api#introspect-oauth2-tokens
func tokenValidate(token string) error {

	const hydraURL = "http://localhost:4444/oauth2/introspect"

	requestBody, err := buildBody(token)
	if err != nil {
		return err
	}

	request, err := buildHydraRequest(hydraURL, requestBody)
	if err != nil {
		return err
	}

	client := buildClient()

	result, err := getResult(client, request)

	if err != nil {
		return err
	}

	return validateResult(result)
}

func buildBody(token string) ([]byte, error) {

	if token == "" {
		return nil, errors.New("Token could not be null or empty")
	}

	requestbody, err := json.Marshal(map[string]string{
		"token": token,
	})

	if err != nil {
		const errMessage = "Can not serialize token value in HTTP/POST request for Hydra"
		logger.Fatal(errMessage)
		return nil, errors.New(errMessage)
	}

	return requestbody, nil
}

func buildHydraRequest(hydraURL string, requestBody []byte) (*http.Request, error) {

	request, err := http.NewRequest("POST", hydraURL, bytes.NewBuffer(requestBody))

	if err != nil {
		errMessage := "Can not create HTTP/POST request to Hydra server at: " + hydraURL
		logger.Fatal(errMessage)
		return nil, errors.New(errMessage)
	}

	request.Header.Set("Content-Type", "application/x-www-form-urlencoded")
	request.Header.Set("Accept", "application/json")

	return request, nil
}

func buildClient() http.Client {
	const timeout = time.Duration(5 * time.Second)

	return buildClientWithTimeout(timeout)
}

func buildClientWithTimeout(timeout time.Duration) http.Client {
	client := http.Client{
		Timeout: timeout,
	}

	return client
}

func getResult(client http.Client, request *http.Request) (*http.Response, error) {
	response, err := client.Do(request)

	if err != nil {
		const errMessage = "Can not make HTTP/POST request to Hydra URL"
		logger.Error(errMessage, err)
		return nil, err
	}

	return response, nil
}

func validateResult(response *http.Response) error {

	if response.StatusCode != 200 {
		logger.Error("Response code returned from Hydra is: " + response.Status)
		return errors.New("Token does not exist")
	}

	var result = map[string]string{}

	json.NewDecoder(response.Body).Decode(&result)

	if response.Body == nil {
		// No response or may be response status was send in header
		return errors.New("Bad response from Hydra")
	}

	return nil
}
