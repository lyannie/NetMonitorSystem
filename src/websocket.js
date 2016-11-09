
// function webSocket(){
// 	var socket = new WebSocket("ws://localhost:8008/","http");
// 	socket.open = function(){
// 		socket.send("Open and send Message.");
// 		alert("Open and send Message...");
// 	}
// 	socket.onmessage = function(event){
// 		var received_msg = event.data;
// 		alert("Received message:" + received_msg);
// 	}
// 	socket.onerror = function(){
// 		alert("error");
// 	}
// 	socket.onclose = function(ev){
// 		alert("Websocket is closed." + ev.code);
// 	}
// };

var socket = io('http://localhost/src');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });