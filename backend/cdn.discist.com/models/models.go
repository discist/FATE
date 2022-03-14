package models

type UpdateUser struct {
	Uuid     string `json:"uuid" bson:"uuid,omitempty"`
	Username string `json:"username" bson:"username,"`
	Story    string `json:"story" bson:"story,"`
	Subject  string `json:"subject" bson:"subject,"`
	State    string `json:"state" bson:"state,"`
}
