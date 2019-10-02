package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

/* DashboardController
 * GIN controller for all API to /dashboard
 */
func DashboardController(r *gin.RouterGroup) {
	api := r.Group("/dashboard")
	{
		api.GET("/", getAllMovies)
		api.GET("/:id", getMovieByID)
	}
}

func getAllMovies(c *gin.Context) {

	c.JSON(http.StatusOK, "All good")
}

func getMovieByID(c *gin.Context) {
	movieID := c.Param("id")
	c.JSON(http.StatusOK, movieID)
}
