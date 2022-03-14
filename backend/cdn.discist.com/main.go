package main

import (
	"fmt"
	"log"

	//fiber
	"cdn.discist.com/routes"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func main() {

	fmt.Println("--- AUTHENTICATION SESSIONS ENDPOINT ---")

	app := fiber.New(fiber.Config{
		BodyLimit: 10 * 1024 * 1024,
	})

	app.Use(logger.New())

	app.Static("/silo", "./silo")
	app.Use(cors.New(cors.Config{
		AllowMethods:     "POST, GET, OPTIONS, PUT, DELETE",
		AllowOrigins:     "*",
		AllowHeaders:     "Origin, Content-Type, Accept, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization",
		AllowCredentials: false,
		ExposeHeaders:    "",
	}))

	routes.Install(app)

	log.Fatal(app.Listen(":3002"))

}
