package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	router.Static("/", "../../web/show-movies/dist/apps/show-movies/index.html")

	router.Run(":8080")
}
