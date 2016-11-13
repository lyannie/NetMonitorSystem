const express=require('express');
const http = require('http');
const io = require('socket.io');
const fs = require('fs');

const app=express();
app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
        next();
  });
app.use(express.static(__dirname));

const httpServer=http.Server(app);
const ioServer=io(httpServer);
httpServer.listen(8088);

ioServer.on('connection', function (socket) {
	socket.join('timer');
	setInterval(function() { 
		var dataAB = Math.round(Math.random() *  100) ; 		//0 - 100
		var dataAC = Math.round(Math.random() *  50) + 80;		//80 -130
		var dataAD = Math.round(Math.random() *  30) + 300;		//320-350
   		ioServer.in('timer').emit("speed", [dataAB, dataAC, dataAD]);
	}, 3000);
	socket.on('date',function(date){
		console.log(date);
	});
});
