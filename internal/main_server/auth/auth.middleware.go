// Package auth is authentication with JWT token middleware
package auth

import (
	"net/http"
	"strings"

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

		// Everything is ok
		c.Next()
	}
}
