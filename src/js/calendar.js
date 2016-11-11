var Calendar = function (divId){
	this.divId = divId;
	//set days of week
	this.Days = ["Sun","Mon","Tue","Wen","Thu","Fri","Sat"];
	//set month
	this.Month = ["January","February","March","April","May","June",
		          "July","August","September","October","November","December"];

	var date = new Date();
	this.currYear = date.getFullYear();
	this.currMon = date.getMonth();
	this.currDate = date.getDate(); 

};
Calendar.prototype.prevMonth = function(){
	if(this.currMon == 0){
		this.currMon = 11;
		this.currYear -= 1;
	}else{
		this.currMon -=1;
	};
	this.showCalendar();
};
Calendar.prototype.nextMonth = function(){
	if(this.currMon == 11){
		this.currMon = 0;
		this.currYear +=1;
	}else{
		this.currMon += 1;
	};
	this.showCalendar();
};
Calendar.prototype.showCalendar = function(){
	this.showMonth(this.currYear, this.currMon);
};
Calendar.prototype.showMonth = function(year, mon){
	var d = new Date()
	,firstDayofMonth = new Date(year, mon, 1).getDay()
	,lastDateofMonth = new Date(year, mon+1, 0).getDate()
	,lastDateofLastMonth = mon == 0? new Date(year-1,11, 0).getDate() : new Date(year, mon, 0).getDate();

	var html = "<table>";

	//write selected month and year
	html += "<thead><tr>";
	html += "<td col7>" + this.Month[mon] + " " + year + "</td>";
	html += "</tr></thead>";

	//write the header of calendar
	html += "<tr class='days'>" ;
	for(let i = 0; i < this.Days.length; i++){
		html += "<td>" + this.Days[i] + "</td>";
	};
	html += "</tr>";

	var c = 1;
	do{
		var dayOfWeek = new Date(year, mon, c).getDay();

		//write last month date
		if(dayOfWeek == 0){
			html += "<tr>";
		}else if( c == 1){
			html +="<tr>";
			let j = lastDateofLastMonth - firstDayofMonth + 1;
			for( let k = 0 ; k < firstDayofMonth; k++ ){
				html += "<td class='not-current'>" + j + "</td>";
				j++;
			}
		}

		//write this month date
		var check = new Date();
		if(check.getFullYear() == this.currYear && check.getMonth() == this.currMon && 
		   c == this.currDate){
			html += "<td class='today'>" + c + "</td>";
		}else{
			html += "<td class='normal'>" + c + "</td>";
		}
		if ( dayOfWeek == 6) {
			html += "</tr>";
		}

		//if last day is not Sat, write next month date
		else if( c == lastDateofMonth ){
			let j = 1;
			for(dayOfWeek; dayOfWeek < 6; dayOfWeek++){
				html += "<td class='not-current'>" + j + "</td>";
				j++;
			};
		}
	c++;
	}while(c <= lastDateofMonth);

	html += "</table>";

	document.getElementById(this.divId).innerHTML = html;
};
// On Load of the window
function startCalendar() {

	// Start calendar
	var cal = new Calendar("divCal");			
	cal.showCalendar();

	// Bind next and previous button clicks
	document.getElementById('btnNext').onclick = function() {
		cal.nextMonth();
	};
	document.getElementById('btnPrev').onclick = function() {
		cal.prevMonth();
	};
}
