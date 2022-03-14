package base

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"strings"

	"cdn.discist.com/controllers"
	"cdn.discist.com/models"
	utix "cdn.discist.com/utilx"
	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
)

func UploadProfilePicture(ctx *fiber.Ctx) error {

	var u models.UpdateUser

	err := ctx.BodyParser(&u)

	fmt.Println(u, "hit it c")

	suuid := u.Uuid
	suuid = strings.Trim(suuid, "\"")

	if err != nil {

		return ctx.Status(http.StatusAccepted).
			JSON(utix.NewJError(err))
	}

	file, err := ctx.FormFile("attachment")

	if err != nil {
		return ctx.
			Status(http.StatusUnprocessableEntity).
			JSON(utix.NewJError(err))

	} else {

		id, err := controllers.RedisGetKey(suuid)

		if err != nil {
			return ctx.
				Status(http.StatusUnprocessableEntity).
				JSON(utix.NewJError(err))

		}
		uuidWithHyphen := uuid.New()
		randuuid := strings.Replace(uuidWithHyphen.String(), "-", "", -10)

		filedir := "silo"
		filename := fmt.Sprintf("%s-%s-%s.jpeg", "propic", randuuid, file.Filename)

		checkdir := fmt.Sprintf("./%s/%s", filedir, id)

		if _, err := os.Stat(checkdir); err != nil {
			if os.IsNotExist(err) {

				fmt.Println("not there creating new dir ....")
				fmt.Println(id)
				err := os.Mkdir(checkdir, 0755)
				if err != nil {
					log.Fatal(err)
				}

				//no exist
			}
		}

		finalstring := fmt.Sprintf("./%s/%s/%s", filedir, id, filename)

		ctx.SaveFile(file, finalstring)

		//pro := "http://localhost:8083/silo/cunt/sad.jpeg"

		profilephotourl := fmt.Sprintf("https://cdn.discist.com/%s/%s/%s", filedir, id, filename)
		fmt.Println(profilephotourl)

		err = controllers.AddNewKey(id, "profilephotourl", profilephotourl)
		if err != nil {
			return ctx.Status(http.StatusBadRequest).
				JSON(utix.NewJError(err))
		}

		ctx.
			Status(http.StatusAccepted).
			JSON(fiber.Map{"msg": "success", "profilephotourl": profilephotourl})

	}

	//fmt.Println(suuid)

	return err

}

func Test(ctx *fiber.Ctx) error {
	// var b models.UpdateUser

	// err := ctx.BodyParser(&b)
	// if err != nil {
	// 	log.Fatal(err)
	// }

	return ctx.Status(http.StatusAccepted).
		JSON(fiber.Map{"status": "cdn is up babe"})

}

func UploadPostImage(ctx *fiber.Ctx) error {

	var u models.UpdateUser

	err := ctx.BodyParser(&u)

	fmt.Println(u, "post image")

	suuid := u.Uuid
	suuid = strings.Trim(suuid, "\"")

	if err != nil {

		return ctx.Status(http.StatusAccepted).
			JSON(utix.NewJError(err))
	}

	file, err := ctx.FormFile("attachment")

	if err != nil {
		return ctx.
			Status(http.StatusUnprocessableEntity).
			JSON(utix.NewJError(err))

	} else {

		id, err := controllers.RedisGetKey(suuid)

		if err != nil {
			return ctx.
				Status(http.StatusUnprocessableEntity).
				JSON(utix.NewJError(err))

		}
		uuidWithHyphen := uuid.New()
		randuuid := strings.Replace(uuidWithHyphen.String(), "-", "", -10)

		filedir := "silo"
		filename := fmt.Sprintf("%s-%s-%s.jpeg", "post", randuuid, file.Filename)

		checkdir := fmt.Sprintf("./%s/%s", filedir, id)

		if _, err := os.Stat(checkdir); err != nil {
			if os.IsNotExist(err) {

				fmt.Println("not there creating new dir ....")
				fmt.Println(id)
				err := os.Mkdir(checkdir, 0755)
				if err != nil {
					log.Fatal(err)
				}

				//no exist
			}
		}

		finalstring := fmt.Sprintf("./%s/%s/%s", filedir, id, filename)

		ctx.SaveFile(file, finalstring)

		//pro := "http://localhost:8083/silo/cunt/sad.jpeg"

		profilephotourl := fmt.Sprintf("https://cdn.discist.com/%s/%s/%s", filedir, id, filename)
		fmt.Println(profilephotourl)

		ctx.
			Status(http.StatusAccepted).
			JSON(fiber.Map{"msg": "success", "postimageurl": profilephotourl})

	}

	//fmt.Println(suuid)

	return err

}
