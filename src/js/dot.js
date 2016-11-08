//draw the dot
var	dotObj = function(){
	this.alive = [];
	this.x = [];
	this.y = [];
	this.speed = [];
	this.point = new Image();
	this.Timer = 0;
}
dotObj.prototype.init = function(){
	for (var i = 0; i < 3 ; i++){
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		//this.speed[i] = Math.random() * 0.017 +0.003;
	}
	this.point.src = "img/dot.png";
} 
dotObj.prototype.draw = function(){
	//a to b
	this.speed[0] = 2;
	this.x[0] += this.speed[0];
	ctx1.drawImage(this.point, 570 - this.x[0], 146);
	if (this.x[0] > 330) {
		this.x[0] = 0;
	};

	//a to c
	this.speed[1] = 1;
	this.y[1] += this.speed[1];
	ctx1.drawImage(this.point, 146, 230 + this.y[1]);
	if (this.y[1] > 160) {
		this.y[1] = 0;
	};

	//a to d
	this.speed[2] = 2;
	this.x[2] += this.speed[2];
	this.y[2] += this.speed[2] * 0.55;
	ctx1.drawImage(this.point, 230 + this.x[2], 192 + this.y[2]);
	if (this.x[2] > 360 || this.y[2] > 240) {
		this.x[2] = 0;
		this.y[2] = 0;
	};
}