package auth

import (
	"log"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

const (
	AUTHORIZATION_HEADER = "Authorization"
	BEARER_TOKEN_NAME    = "Bearer"
)

func AuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		authorizationHeader := c.Request.Header[AUTHORIZATION_HEADER]
		if authorizationHeader == nil {
			// Not set
			log.Fatal("Authorization is not set in headers at all")
			c.AbortWithStatus(http.StatusUnauthorized)
		}

		allTokens := strings.Split(authorizationHeader[0], BEARER_TOKEN_NAME)
		if len(allTokens) != 2 {
			// Header set without token
			log.Fatal("Could not parse authorization header")
			c.AbortWithStatus(http.StatusUnauthorized)
		}

		if allTokens[0] == "" && allTokens[1] == "" {
			// Header set without token
			log.Fatal("Abnormal authorization header")
			c.AbortWithStatus(http.StatusUnauthorized)
			return
		}

		jwtToken := allTokens[1]
		log.Println("Token is:" + jwtToken)

		// Valdate with Hydra

		// Everything is ok
		c.Next()
	}
}
