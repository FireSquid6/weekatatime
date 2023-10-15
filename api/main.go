package main

import (
	"context"
	firebase "firebase.google.com/go"
	"log"
)

func main() {
	ctx := context.Background()
	config := &firebase.Config{ProjectID: "wkatatime"}
	app, err := firebase.NewApp(ctx, config)

	if err != nil {
		panic(err)
	}

	client, err := app.Firestore(ctx)
	if err != nil {
		panic(err)
	}

	ref := client.Collection("tasks").NewDoc()
	result, err := ref.Set(ctx, map[string]interface{}{
		"title":       "A cool todo",
		"description": "I have to kill Caleb",
	})

	if err != nil {
		panic(err)
	}

	log.Printf("Result: [%v]", result)

	defer client.Close()
}
