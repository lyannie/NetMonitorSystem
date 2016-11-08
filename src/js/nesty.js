/*
* author: Annie
* time: 2015-08
* 
* Nesty is a tiny javascript animation framework made by Annie with the accompany of Ben.
* It has only one function, but can adapt a lot of functional demands. 
*																		—— 0.0 & ^.^
* 
*/
function startChange(obj, params, fun) {
	var flag = true;
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		for(var key in params) {
			if(key == "opacity") {
				var curVal = Math.round(parseFloat(getStyle(obj, key))*100);
			} 
			else {
				var curVal = parseInt(getStyle(obj, key));
			}

			if(key == "opacity") {
				var speed = (params[key] - curVal) / 10;
				speed = (speed > 0)? Math.ceil(speed):Math.floor(speed);
			} else {
				var speed = (params[key] - curVal) / 20;
				speed = (speed > 0)? Math.ceil(speed):Math.floor(speed);
			}					

			if(curVal != params[key]) {
				flag = false;

				if(key == "opacity") {
					obj.style.filter = "alpha(opacity = "+ (curVal + speed) +")";
					obj.style.opacity = (curVal + speed)/100;
				} 
				else {
					obj.style[key] = curVal + speed + "px";
				}
			}
		}		

		if(flag) {
			clearInterval(obj.timer);					
			if(fun) {
				fun(obj);
			}
		}

	}, 30);
}

function getStyle(obj, attr) {
	if(window.getComputedStyle) {
		return window.getComputedStyle(obj, null).getPropertyValue(attr);
	}
}