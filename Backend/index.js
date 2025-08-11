import express from 'express'
import {Server} from 'socket.io'
const app = express();
import http from 'http';

const server = http.createServer(app);

const io = new Server(server, {
    cors : {
        origin : 'http://localhost:3000'
    }
});

app.get('/helo', (req, res) => {
    res.send("hello")
})


io.on('connection',(socket) => {
    socket.on('msg', (msg) => {
        console.log(msg)
        socket.emit('msg', msg)
    })
    
})

server.listen(8000);