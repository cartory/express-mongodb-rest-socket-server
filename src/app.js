const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")

const mongoRoutes = require('./mongo/mongo.routes')

const app = express()

mongoose
	.connect(process.env.MONGOURI)
	.then((m) => {
		console.log("MONGO!!")
		m.connection
			.watch()
			.on("init", (init) => console.log({ init }))
			.on("change", (change) => console.log({ change }))
			.on("more", (more) => console.log({ more }))
	})
	.catch((err) => console.error(err))

app.use(cors())
	.use(express.urlencoded({ extended: true }))
	.use(express.json({ limit: process.env.BODY_SIZE }))
	// ROUTES
	.get("/", (_, res) => res.send("<h1>Welcome to API 😊</h1>"))
	.use('/mongo', mongoRoutes)

module.exports = app
