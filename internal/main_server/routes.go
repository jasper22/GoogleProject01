package server

import (
	"github.com/gin-contrib/static"
	gin "github.com/gin-gonic/gin"
	"github.com/jasper22/google-project-01/internal/main_server/auth"
	"github.com/jasper22/google-project-01/internal/main_server/controllers"
)

//
// SetupRouter is a function that will return gin Engine with routes
func SetupRouter(pathToAngular string) *gin.Engine {
	router := gin.Default()

	// Serve all Angular context
	router.Use(static.Serve("/", static.LocalFile(pathToAngular, true)))

	globalAPI := router.Group("/api/v1")
	{
		globalAPI.Use(auth.Middleware())

		controllers.DashboardController(globalAPI)
	}

	// Any other route
	router.NoRoute(func(c *gin.Context) {
		c.Redirect(301, "/")
	})

	return router
}
