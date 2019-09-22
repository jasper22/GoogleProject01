package main

import (
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	router.Use(static.Serve("/", static.LocalFile("../../web/show-movies/dist/apps/show-movies/", true)))

	router.NoRoute(func(c *gin.Context) {
		c.Redirect(301, "/")
	})

	router.Run(":8080")
}
