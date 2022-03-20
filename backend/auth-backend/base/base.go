package base

import (
	"authentication/controllers"
	"authentication/models"
	"authentication/utils"
	"fmt"
	"log"
	"net/http"
	"regexp"
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
	"github.com/sirupsen/logrus"
)

func GetMyData(ctx *fiber.Ctx) error {

	var sessionid models.Session

	err := ctx.BodyParser(&sessionid)
	if sessionid.Uuid == "" {

		return ctx.
			Status(http.StatusBadRequest).
			JSON(utils.NewJError(utils.ErrEmailAlreadyExists))

	}
	if err != nil {
		return ctx.
			Status(http.StatusBadRequest).
			JSON(utils.NewJError(err))
	}

	userID, err := controllers.RedisGetKey(sessionid.Uuid)

	if userID == "" {
		return ctx.
			Status(http.StatusUnauthorized).
			JSON(utils.NewJError(utils.ErrNoSession))
	}

	if userID != "" {

		var userInfo models.UserAllDataFate
		userInfo, err := controllers.GetFullDocFate(userID)
		//fmt.Println(userInfo)
		if err != nil {
			return ctx.
				Status(http.StatusBadGateway).
				JSON(utils.NewJError(utils.ErrNoSession))
		}

		return ctx.
			Status(http.StatusAccepted).
			JSON(fiber.Map{"userdata": userInfo})

	}

	return err

}

func UpdateData(ctx *fiber.Ctx) error {

	var updatedata models.UpdateUserFate

	err := ctx.BodyParser(&updatedata)

	fmt.Println(updatedata)
	if err != nil {
		return ctx.
			Status(http.StatusBadRequest).
			JSON(utils.NewJError(err))

	}

	normailizedusernamex := utils.NormalizeEmail(updatedata.Name)

	re, err := regexp.Compile(`[^\w]`)
	if err != nil {
		log.Fatal(err)
	}
	normailizedusername := re.ReplaceAllString(normailizedusernamex, "")
	fmt.Println(normailizedusername)

	lenght := len(normailizedusername)
	if lenght < 0 {
		return ctx.
			Status(http.StatusBadRequest).
			JSON(fiber.Map{"error": "username-empty"})
	}

	if updatedata.Name != "" && lenght < 18 {

		id, err := controllers.RedisGetKey(updatedata.Uid)

		if err != nil {

			return ctx.
				Status(http.StatusBadRequest).
				JSON(utils.NewJError(err))
		}

		exist, err := controllers.UGetByKey("username", normailizedusername)
		if err != nil {
			logrus.Error(err)
		}

		requestinguser, err := controllers.UGetByID(id)
		if err != nil {
			logrus.Error(err)
		}

		if exist.Username != "" {

			if exist.Username != requestinguser.Username {
				fmt.Println("EXIST:", exist.Username, "REQ:", requestinguser.Username)
				return ctx.
					Status(http.StatusBadRequest).
					JSON(fiber.Map{"error": "usernnametaken"})
			}

			if exist.Username == requestinguser.Username {

				fmt.Println("Username not changed")

				err = controllers.AddNewKey(id, "name", normailizedusername)
				if err != nil {
					return ctx.
						Status(http.StatusBadRequest).
						JSON(utils.NewJError(err))
				}
				err = controllers.AddNewKey(id, "gender", updatedata.Gender)
				if err != nil {
					return ctx.
						Status(http.StatusBadRequest).
						JSON(utils.NewJError(err))
				}

				err = controllers.AddNewKey(id, "place", updatedata.Place)

				if err != nil {
					return ctx.
						Status(http.StatusBadRequest).
						JSON(utils.NewJError(err))
				}

				err = controllers.AddNewKey(id, "dob", updatedata.Dob)
				if err != nil {
					return ctx.
						Status(http.StatusBadRequest).
						JSON(utils.NewJError(err))
				}

				err = controllers.AddNewKey(id, "time", updatedata.Time)

				if err != nil {
					return ctx.
						Status(http.StatusBadRequest).
						JSON(utils.NewJError(err))
				}

				return ctx.
					Status(http.StatusAccepted).
					JSON(fiber.Map{"response": "data updated"})

			}

		}

		err = controllers.AddNewKey(id, "username", normailizedusername)
		if err != nil {
			return ctx.
				Status(http.StatusBadRequest).
				JSON(utils.NewJError(err))
		}
		err = controllers.AddNewKey(id, "gender", updatedata.Gender)
		if err != nil {
			return ctx.
				Status(http.StatusBadRequest).
				JSON(utils.NewJError(err))
		}

		err = controllers.AddNewKey(id, "place", updatedata.Place)

		if err != nil {
			return ctx.
				Status(http.StatusBadRequest).
				JSON(utils.NewJError(err))
		}

		err = controllers.AddNewKey(id, "dob", updatedata.Dob)
		if err != nil {
			return ctx.
				Status(http.StatusBadRequest).
				JSON(utils.NewJError(err))
		}

		err = controllers.AddNewKey(id, "time", updatedata.Time)

		if err != nil {
			return ctx.
				Status(http.StatusBadRequest).
				JSON(utils.NewJError(err))
		}

		return ctx.
			Status(http.StatusAccepted).
			JSON(fiber.Map{"response": "data updated"})
	}

	return err

}

func UploadProfilePicture(ctx *fiber.Ctx) error {

	var u models.UpdateUser
	err := ctx.BodyParser(&u)

	suuid := u.Uuid
	suuid = strings.Trim(suuid, "\"")

	if err != nil {

		return ctx.Status(http.StatusBadRequest).
			JSON(utils.NewJError(err))

	}

	file, err := ctx.FormFile("attachment")

	if err != nil {
		return ctx.
			Status(http.StatusUnprocessableEntity).
			JSON(utils.NewJError(err))

	} else {

		id, err := controllers.RedisGetKey(suuid)

		if err != nil {
			return ctx.
				Status(http.StatusUnprocessableEntity).
				JSON(utils.NewJError(err))

		}
		uuidWithHyphen := uuid.New()
		uuid := strings.Replace(uuidWithHyphen.String(), "-", "", -10)
		fmt.Println(uuid)

		filedir := "icons"
		filename := fmt.Sprintf("%s-%s", "cunt", "cunt")

		finalstring := fmt.Sprintf("./%s/%s.jpeg", filedir, filename)

		ctx.SaveFile(file, finalstring)
		fmt.Println(file.Size)
		profilephotourl := fmt.Sprintf("http:/%s-%s.jpeg", "cunt", "uuid")
		//fmt.Println(profilephotourl)

		err = controllers.AddNewKey(id, "profilephotourl", profilephotourl)
		utils.CheckErorr(err)

		ctx.
			Status(http.StatusAccepted).
			JSON(fiber.Map{"msg": "success", "profilephotourl": profilephotourl})

	}

	// id := "23"
	// add := 23

	// profilepiclink := fmt.Sprintf("%s%s%duserprofilepicture.jpeg", id, "upno", add)

	return err

}

func GetAllUser(ctx *fiber.Ctx) error {

	var alldoc []models.UserAllDataPublic

	alldoc, err := controllers.GetAll()
	if err != nil {
		logrus.Error(err)
	}

	//logrus.Info(alldoc)
	//fmt.Println(alldoc)

	return ctx.Status(http.StatusAccepted).
		JSON(fiber.Map{"alluserdata": alldoc})

}

func AddPhotoUrl(ctx *fiber.Ctx) error {

	var incomminglink models.FateUserImage
	err := ctx.BodyParser(&incomminglink)
	utils.CheckErorr(err)

	mongoid, err := controllers.RedisGetKey(incomminglink.Uid)
	utils.CheckErorr(err)

	get, err := controllers.FateGetByID(mongoid)
	utils.CheckErorr(err)

	var photoslist []string
	photoslist = get.Post

	photoslist = append(photoslist, incomminglink.Photourl)

	fmt.Println(len(photoslist), "array lenght")

	id, err := controllers.RedisGetKey(incomminglink.Uid)

	if err != nil {
		return ctx.
			Status(http.StatusUnprocessableEntity).
			JSON(utils.NewJError(err))

	}

	err = controllers.AddNewArray(id, "posts", photoslist)
	utils.CheckErorr(err)

	return err

}
