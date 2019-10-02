package server

import (
	"os"
	"path/filepath"

	"github.com/gin-contrib/static"
	gin "github.com/gin-gonic/gin"
	"github.com/jasper22/google-project-01/internal/main_server/auth"
	"github.com/jasper22/google-project-01/internal/main_server/controllers"
)

var (
	currentFolder, _ = os.Getwd()
	localFilesFolder = filepath.Clean(currentFolder + "../../web/dist/apps/show-movies/")
)

//
// SetupRouter is a function that will return gin Engine with routes
func SetupRouter() *gin.Engine {
	router := gin.Default()

	// Serve all Angular context
	router.Use(static.Serve("/", static.LocalFile(localFilesFolder, true)))

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
