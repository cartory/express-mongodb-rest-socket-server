const mongoose = require("mongoose")

const findAll = () => {
	const collections = mongoose.connection.db.listCollections()

	return collections.toArray()
}

const findOne = (name) => {
	const collection = mongoose.connection.db.collection(name).find()

	return collection.toArray()
}

module.exports = { findAll, findOne }
