const { Router } = require("express")

const collection = require("./collection.controller")

const router = Router()

router
	//
	.get("/", collection.findAll)
	.get("/:name", collection.findOne)

module.exports = router
