const express = require('express');
const app = express();

const http = require('http');
const expressServer = http.createServer(app);


app.get('/', function(req, res){
    res.sendFile(__dirname+"/index.html");
})


const {Server} = require('socket.io');
const io = new Server(expressServer);

// io.on('connection', function(socket){
//     console.log('New user is connected');

    

    // setInterval(function(){
    //     let d = new Date();
    //     let t = d.getTime();
    //     // socket.send(t);
    //     socket.emit("MyEvent", t);
    // },10)

    // from client to server
    // socket.on('message', function(msg){
    //     console.log(msg);
    // })

    // from client to server (custom event create)
    // socket.on('MyNewEvent', function(msg){
    //     console.log(msg);
    // })

//     io.sockets.emit('MyBroadcast', 'Helle Everyone');
// })

let buyNsp = io.of("/buy");
buyNsp.on('connection', function(socket){
    buyNsp.emit('MyEvnt', 'hi buy nsp');
})

let sellNsp = io.of("/sell");
sellNsp.on('connection', function(socket){
    sellNsp.emit('MyEvnt', 'hi sell nsp');
})



expressServer.listen(3001, function(){
    console.log('server is running');
})