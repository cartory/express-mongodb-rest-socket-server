const socket = require("socket.io")
const mongoose = require("mongoose")

/**
 * add Socket according mongo events
 * @param {socket.Server} socket
 */
const addSocket = (socket) => {
	mongoose.connection.watch().on("change", (change) => {
        console.log(change);
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
