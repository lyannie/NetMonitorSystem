var can1;
var can2;
var can3;
var ctx1;
var ctx2;
var ctx3;
var lastTime;
var deltaTime;
var computers;
var computersImg;
var dot;
var dotObj;
var num2;
var num3;
var dataProvider = new DataProvider();

document.onload = scan();

function scan(){
	init();
	lastTime = Date.now();
	deltaTime = 0;
	scanloop();
}
function init(){

	//get the canvas and draw computers which are connected
	can1 = document.getElementById("Mycanvas1"); //dot, computers, connectlines
	ctx1 = can1.getContext("2d");

	can1.addEventListener('click', onClick);

	computers = [{ipaddr:'A',position:{x : 100, y : 100}, imgSrc:'img/computer0.png'},
				 {ipaddr:'B',position:{x : 600, y : 100}, imgSrc:'img/computer1.png'},
				 {ipaddr:'C',position:{x : 100, y : 400}, imgSrc:'img/computer2.png'},
				 {ipaddr:'D',position:{x : 600, y : 400}, imgSrc:'img/computer3.png'}];
	computers = computers.map(
		eachData => new computerObj(eachData.ipaddr,eachData.position,eachData.imgSrc)
	);


	dot = new dotObj();
	dot.init();
}
function scanloop(){
	window.requestAnimFrame(scanloop);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	if(deltaTime> 40) deltaTime = 40;

	ctx1.clearRect(0, 0, 1280, 600);
	computers.forEach(eachComputer => eachComputer.drawComputer());
	drawConnection();

	dot.draw();
}

//draw the line and dot of connection
function drawConnection(){

	//draw the line
	//a to b
	ctx1.beginPath();
	ctx1.moveTo(230, 160);
	ctx1.lineTo(600, 160);
	ctx1.stroke();

	//a to c
	ctx1.beginPath();
	ctx1.moveTo(162, 230);
	ctx1.lineTo(162, 402);
	ctx1.stroke();

	//a to d
	ctx1.beginPath();
	ctx1.moveTo(230, 200);
	ctx1.lineTo(600, 402);
	ctx1.stroke();

}
function onClick(e){
	document.getElementById("rightCanvas").style.visibility = "visible";
	// document.getElementById("leftCanvas").style.float = "left"; //DEBUG

	let hitObj = null;
	computers.forEach(
		eachComputer => hitObj = eachComputer.amIHit(e.pageX,e.pageY)?eachComputer:hitObj
	);

	getDataFromBackend("data/index-data.json")
	.then(function(data){
		dataProvider.setData(data);
		let changeNumFunc = computerObj.changeNum;
		if(!hitObj) return;
		hitObj.changeNum(can2, ctx2, dataProvider, 'chart1', "当前最大速度");
		hitObj.changeNum(can3, ctx3, dataProvider, 'chart2', "当前丢包率");
	},
	function(err){
		console.log("Error:  "+err);
	});
}


//change the bar opacity
var data = document.getElementsByClassName("data");
for (let i = 0; i < data.length; i++) {
	data[i].onmouseover = function(){
		startChange(this, {opacity : 60});
	};
	data[i].onmouseout = function(){
		startChange(this, {opacity : 100});
	};
};




