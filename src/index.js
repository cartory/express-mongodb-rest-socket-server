require('dotenv').config()

const app = require('./app')

const http = require('http')
const socket = require('socket.io')
const mongoose = require('mongoose')

const server = http.createServer(app)
// const io = new socket.Server(server)

const delayInMilliseconds = 500

server.listen(process.env.PORT, () => {
    console.log(`Server running on \x1b[33mhttp://${process.env.HOST}:${process.env.PORT}\x1b[0m`)
	console.log(new Date())
})