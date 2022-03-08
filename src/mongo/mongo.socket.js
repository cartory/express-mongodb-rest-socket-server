const socket = require("socket.io")
const mongoose = require("mongoose")

const collectionService = require('./collection.service')

/**
 * add Socket according mongo events
 * @param {socket.Server} socket
 */
const addSocket = (socket) => {
    socket.on('init', () => {
        collectionService.findAll()
            .then(collections => {
                socket.broadcast.emit('first-render', collections)
            })
            .catch(err => {
                console.error(err)
                socket.emit('error', err)
            })
    })

	mongoose.connection.watch().on("change", (change) => {
        socket.broadcast.emit('render', {
            ns: change.ns,
            operationType: change.operationType,

            document: change.fullDocument,
            documentKey: change.documentKey.id,

            updateDescription: change.updateDescription,
        })
	})
}

module.exports = { addSocket }
