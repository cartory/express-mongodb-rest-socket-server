require("dotenv").config()

const app = require("./app")
const mongo = require('./mongo/mongo.socket')

const http = require("http")
const socket = require("socket.io")

const server = http.createServer(app)

const io = new socket.Server(server)

io.on('connection', socket => {
	console.log('new conection');
	mongo.addSocket(socket)
})

server.listen(process.env.PORT, () => {
	console.log(`Server running on \x1b[33mhttp://${process.env.HOST}:${process.env.PORT}\x1b[0m`)
	console.log(new Date())
})
