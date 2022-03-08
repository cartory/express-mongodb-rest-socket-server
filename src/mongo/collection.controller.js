const collectionService = require("./collection.service")

const findAll = async (_, res) => {
	try {
		const collections = await collectionService.findAll()

		return res.status(200).json(collections)
	} catch (err) {
		console.error(err)
	}

	return res.status(500).json([])
}

const findOne = async ({ params }, res) => {
	const { name } = params

	try {
		const collection = await collectionService.findOne(name)

		return res.status(200).json(collection)
	} catch (err) {
		console.error(err)
	}

	return res.status(500).json([])
}

module.exports = { findAll, findOne }
