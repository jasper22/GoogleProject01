package main

import (
	"context"
	"flag"
	"fmt"
	"net/http"
	"os"
	"os/signal"
	"path/filepath"
	"syscall"
	"time"

	log "github.com/sirupsen/logrus"

	server "github.com/jasper22/google-project-01/internal/main_server"
)

var logger *log.Entry
var pathToAngular string
var serverHost string
var serverPort int

//
// This function should initialize before anything else
// Actually it setup internal logger
func init() {

	var currentFolder, _ = os.Getwd()
	localFilesFolder := filepath.Clean(currentFolder + "../../web/dist/apps/show-movies/")

	flag.StringVar(&pathToAngular, "source", localFilesFolder, "Full path to Angular compiled files folder")
	flag.StringVar(&serverHost, "host", "localhost", "Host address (default 'localhost')")
	flag.IntVar(&serverPort, "port", 8080, "Port to listen on (default 8080)")

	// Log as JSON instead of the default ASCII formatter.
	log.SetFormatter(&log.JSONFormatter{})

	logger = log.WithFields(log.Fields{
		"module": "main",
	})
}

// Main entrance function in application
func main() {

	flag.Parse()

	if pathToAngular == "" {
		flag.PrintDefaults()
		return
	}

	router := server.SetupRouter(pathToAngular)

	srv := &http.Server{
		Addr:    fmt.Sprintf("%s:%v", serverHost, serverPort),
		Handler: router,
	}

	go func() {
		// service connections
		logger.Info("JIN server started at port " + srv.Addr)

		if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			logger.Fatal("JIN server crashed with error: " + err.Error())
		}
	}()

	// Wait for interrupt signal to gracefully shutdown the server with
	// a timeout of 5 seconds.
	quit := make(chan os.Signal)

	// kill (no param) default send syscall.SIGTERM
	// kill -2 is syscall.SIGINT
	// kill -9 is syscall. SIGKILL but can"t be catch, so don't need add it
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
	<-quit

	logger.Info("Shutdown Server ...")

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	if err := srv.Shutdown(ctx); err != nil {
		logger.Fatal("Server Shutdown: " + err.Error())
	}

	// catching ctx.Done(). timeout of 5 seconds.
	select {
	case <-ctx.Done():
		logger.Error("Timeout occurred while waiting for server to shutdown")
	}

	logger.Info("Shutdown server completed at address: " + srv.Addr)
}
