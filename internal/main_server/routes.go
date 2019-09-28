package main_server

import (
	"github.com/gin-contrib/static"
	gin "github.com/gin-gonic/gin"
)

/*
* Function will return gin Engine with routes
 */
func SetupRouter() *gin.Engine {
	router := gin.Default()

	router.Use(static.Serve("/", static.LocalFile("../../web/show-movies/dist/apps/show-movies/", true)))

	router.NoRoute(func(c *gin.Context) {
		c.Redirect(301, "/")
	})

	return router
}
