package controllers

import (
	"context"
	"fmt"

	"cdn.discist.com/db"
	"github.com/go-redis/redis"
	"github.com/sirupsen/logrus"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

//db inits

var rdb = db.RedisInit()
var mongoclient = db.MongoInit()
var userCollection = mongoclient.Database("discistuserdb").Collection("users")
var ctx = context.Background()

func RedisGetKey(key string) (string, error) {

	value, err := rdb.Get(ctx, key).Result()

	if err == redis.Nil {
		fmt.Printf("%s doesnt exist \n", key)
		return "", err

	} else if err != nil {
		logrus.Info(err)
		return "", err

	}

	return value, nil

}

func AddNewKey(objid string, addkey string, addvalue string) error {
	_id, err := primitive.ObjectIDFromHex(objid)
	if err != nil {

		return err

	}
	filter := bson.D{{"_id", _id}}

	update := bson.D{{"$set", bson.D{{addkey, addvalue}}}}

	_, err = userCollection.UpdateOne(context.Background(), filter, update)
	if err != nil {
		logrus.Info(err)
	}
	fmt.Println("updated ", addkey, addvalue)

	return err

}
