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
		var dataSpeedAB = Math.round(Math.random() *  100) ; 		//0 - 100
		var dataSpeedAC = Math.round(Math.random() *  50) + 80;		//80 -130
		var dataSpeedAD = Math.round(Math.random() *  30) + 300;		//320-350
		var dataBagAB = Math.round(Math.random() * 10) + 20;			//20 - 30
		var dataBagAC = Math.round(Math.random() * 5) + 10;			//10 - 15 
		var dataBagAD = Math.round(Math.random() * 30) + 40;			//40 - 70
   		ioServer.in('timer').emit("monitorData", [dataSpeedAB, dataSpeedAC, dataSpeedAD, 
   						    dataBagAB, dataBagAC, dataBagAD]);
	}, 3000);
});
