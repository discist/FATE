package routes

import (
	"cdn.discist.com/base"
	"github.com/gofiber/fiber/v2"
)

func Install(app *fiber.App) {

	app.Post("/uploadprofilepicture", base.UploadProfilePicture)
	app.Post("/uploadpostimage", base.UploadPostImage)

	app.Get("s", base.Test)

}
