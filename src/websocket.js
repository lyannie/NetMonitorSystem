function webSocket (){
		var arrayAB = [],arrayAC = [],arrayAD = [];	
		var socket = io('http://localhost:8088');
		socket.on('date', function(){
			$(document).on("click", ".normal", function() {
				$("a").unbind().click(function() {
					socket.emit(this.id);
					console.log(this.id);		
				});
			});
		});
		socket.on('speed', function (data) {
			if (arrayAB.length >20) {
				arrayAB.shift();
				arrayAC.shift();
				arrayAD.shift();
				arrayAB.push(data[0]);
				arrayAC.push(data[1]);
				arrayAD.push(data[2]);

			}else{
				arrayAB.push(data[0]);
				arrayAC.push(data[1]);
				arrayAD.push(data[2]);
			}
			
			var dataG = {		
				labels:["1","5","10","15","20","25","30","35","40","45",
				"50","55","60","65","70","75","80","85","90","95","100","单位（s）"
				],
				     
				datasets: [{
					label: "A->B 时延变化（ms）",
					fill:false,
				              borderWidth: 1.5,
				              lineTension: 0.1,
				              backgroundColor: "rgba(75,192,192,0.5)",
				              borderColor: "rgba(75,192,192,1)",
				              borderCapStyle: 'butt',
				              borderDash: [],
				              borderDashOffset: 0.0,
				              borderJoinStyle: 'miter',
				              pointBorderColor: "rgba(75,192,192,1)",
				              pointBackgroundColor: "#fff",
				              pointBorderWidth: 1,
				              pointHoverRadius: 3,
				              pointHoverBackgroundColor: "rgba(75,192,192,1)",
				              pointHoverBorderWidth: 2,
				              pointRadius: 2,
				              pointHitRadius: 10,
					data: arrayAB,
				              spanGaps: false,			 
				},{    
					fill:false,
					label:"A->C 时延变化（ms）",
					lineTension: 0.1,
					backgroundColor:  'rgba(255,99,132,0.5)',
					borderWidth:1.5,
					borderColor: 'rgba(255,99,132,1)',
					pointBorderColor:  'rgba(255,99,132,1)',
					pointBackgroundColor:"#fff",
					pointHoverBackgroundColor:'rgba(255,99,132,1)',
					pointRadius:2,
					pointHoverRadius: 3,
					pointBorderWidth: 1,
					pointHoverBorderWidth: 2,
					pointRadius: 2,
				             	pointHitRadius: 10,
					data: arrayAC,	
					spanGaps: false,		
				},{    
					fill:false,
				 	label:"A->D 时延变化（ms）",
				 	lineTension: 0.1,
					backgroundColor: 'rgba(255, 206, 86, 0.5)',
					borderWidth:1.5,
					borderColor: 'rgba(255, 206, 86, 1)',
					pointBorderColor: 'rgba(255, 206, 86, 1)',
					pointBackgroundColor: "#fff",
					pointHoverBackgroundColor:'rgba(255, 206, 86, 1)',
					pointRadius:2,
					pointHoverRadius: 3,
					pointBorderWidth: 1,
					pointHoverBorderWidth: 2,
					data: arrayAD,	
				}]
			};
			
			var theChartCanvas=document.getElementById('theChart');
			var myChart=new Chart(theChartCanvas,{
				type: 'line',
				responsive: 'true',
				data: dataG,
				options: {
					animation:false,		
					scales: {
						yAxes: [{
							ticks: {
								max: 400,
								min: 0,
								stepSize: 10, 
							}
						}]
					}
				}
			});
		});

  }