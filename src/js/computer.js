class computerObj {
	constructor(ipaddr,position,imgSrc) {
	this.ipaddr = ipaddr;
	/*
	 * position = {x:x坐标值,y:y坐标值};
	 */
	this.position=position;

	this.computerImg=new Image();
	this.computerImg.src=imgSrc;

	}

	amIHit(x,y) {
		if(this.position.x <= x && x <= this.position.x + 200 && this.position.y <= y && y <= this.position.y + 200)
			return true;
		return false;
	}

	drawComputer (){
		ctx1.drawImage(this.computerImg,this.position.x,this.position.y);
	}
	
	changeNum (canvas,ctx,dataProvider, type, text){
		if(globalTimers[type]) clearInterval(globalTimers[type]);
		let data=dataProvider.getData(this.ipaddr,type);
		let num=data.num;
		let target=data['target'];
		globalTimers[type]=setInterval(function(){
			ctx.clearRect(-canvas.width, -canvas.height, canvas.width * 2, canvas.height * 2);
			var curVal = num;
			if (type == "chart1") {
				var speed = (target - curVal) / 10;
				speed = (speed > 0)? Math.ceil(speed):Math.floor(speed);
				num = curVal + speed;
				drawPieChart(ctx, radius, num, text, type);
				
			}else{
				var speed = (target - curVal) / 10 ;
				speed = (speed > 0)? Math.ceil(speed):Math.floor(speed);
				num = curVal + speed;
				drawPieChart(ctx, radius, num, text, type);
			}
			
		},30);
	}
}
class DataProvider {
	constructor() {
		this._data;
	}
	getData(ipaddr,type){
		return (this._data)[ipaddr][type];
	}
	setData(data){
		this._data = data;
	}
}
