const mongoose = require("mongoose")

const findAll = async () => {
	const collections = await mongoose.connection.db.listCollections().toArray()

	return collections
}

const findOne = async (name) => {
	return mongoose.connection.db.collection(name).find().toArray()
}

module.exports = { findAll, findOne }
