const express = require('express');
const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static('public'));


io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('result', (result) => {
        console.log('result: ' + result);
        socket.broadcast.emit('broadcast', result);

    });
});

http.listen(5000, () => {
    console.log('listening on *:3000');
});