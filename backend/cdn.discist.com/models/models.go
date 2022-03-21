package models

type UpdateUser struct {
	Uuid    string `json:"uuid" bson:"uuid,omitempty"`
	Name    string `json:"username" bson:"username,"`
	Story   string `json:"story" bson:"story,"`
	Subject string `json:"subject" bson:"subject,"`
	State   string `json:"state" bson:"state,"`
}

type UpdateUserFate struct {
	Uid    string `json:"uid" bson:"uid,omitempty"`
	Name   string `json:"name" bson:"name,"`
	Gender string `json:"gender" bson:"gender,"`
	Place  string `json:"place" bson:"place,"`
	Dob    string `json:"dob" bson:"dob,"`
	Time   string `json:"time" bson:"time,"`
}
