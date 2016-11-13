can2 = document.getElementById("Mycanvas2");
can3 = document.getElementById("Mycanvas3");
ctx2 = can2.getContext("2d"); 
ctx3 = can3.getContext("2d");

var radius = can2.height / 6;
ctx2.translate(radius * 4, radius * 3);
ctx3.translate(radius * 4, radius * 3);
radius = radius * 0.95;

var globalTimers={
	'chart1':null,
	'chart2':null
};
function writeText(ctx, text){
	ctx.font = "12px Microsoft Yahei";
	ctx.fillText(text, 0, 80);
}

function drawPieChart(ctx, radius, num, text, type){
	var addColors = [];
	addColors = ["#64dd17","#76ff03","#eeff41","#ff6f00","#f44336"];
	var gradient = "gradient";
	drawFace(ctx, num, type);
	writeText(ctx, text);	
}
function drawFace(ctx, num, type){
	var addColors = [];
	addColors = ["#64dd17","#76ff03","#eeff41","#ff6f00","#f44336"];
	drawGradientCircle(ctx, 0, 0, radius, -0.5 * Math.PI, 1.5 * Math.PI, addColors);

	//draw the text;
	ctx.textBaseline = "middle";
	ctx.textAlign = "center";
	ctx.font = "24px Microsoft Yahei";
	if(type == "chart1"){
		ctx.fillText(num + "KB/s", 0, 0);	//设置圆中单位
		var rate = (num / 400 * 2 - 0.5) * Math.PI;  //设置灰色弧形初始角度
	}
	else {
		ctx.fillText(num + "%", 0, 0);
		var rate = (num / 100 * 2 - 0.5) * Math.PI ;
	}
	
	ctx.beginPath();
	ctx.strokeStyle = "#999";
	ctx.lineWidth = 0.1 * radius;
	ctx.arc(0, 0, radius, rate, 1.5 * Math.PI );
	ctx.stroke();

	
}
function drawGradientCircle(ctx,xc, yc, r, sa, ea, colors){
	var partAngle = (ea - sa) / (colors.length - 1) ;
	var angle = sa;
	var gradient = null;
	var startColor = null;
	    endColor = null;

	for (let i = 0; i < colors.length; i++){
		startColor = colors[i];
		endColor = colors[i + 1];
		if((i + 1) == colors.length) break;
		//if you want the end of the part has gradient to StartColor,change it to
		//endColor = colors[(i + 1) % colors.length];

		var xStart = xc + Math.cos(angle) * r;
		var xEnd = xc + Math.cos(angle + partAngle) * r;

		var yStart = yc + Math.sin(angle) * r;
		var yEnd = yc + Math.sin(angle + partAngle) * r;

		ctx.beginPath();

		gradient = ctx.createLinearGradient(xStart, yStart, xEnd, yEnd);
		gradient.addColorStop(0, startColor);
		gradient.addColorStop(1, endColor);

		ctx.strokeStyle = gradient;
		ctx.arc(xc, yc, r, angle, angle + partAngle);
		ctx.lineWidth = 0.1 * r;
		ctx.stroke();

		angle += partAngle;
	}
}
