function webSocket (){
		var arraySpeedAB = [], arraySpeedAC = [], arraySpeedAD = [];	
		var arrayBagAB = [], arrayBagAC = [], arrayBagAD = [];
		var socket = io('http://localhost:8088');
		// socket.on('date', function(){
			$(document).on("click", ".normal", function() {
				$("a").unbind().click(function() {
					socket.emit('date',captureDate);	
					console.log(captureDate);	
				});
			});
		// });
		socket.on('monitorData', function (data) {
			if (arraySpeedAB.length >20) {
				arraySpeedAB.shift();
				arraySpeedAC.shift();
				arraySpeedAD.shift();
				arrayBagAB.shift();
				arrayBagAC.shift();
				arrayBagAD.shift();
				arraySpeedAB.push(data[0]);
				arraySpeedAC.push(data[1]);
				arraySpeedAD.push(data[2]);
				arrayBagAB.push(data[3]);
				arrayBagAC.push(data[4]);
				arrayBagAD.push(data[5]);

			}else{
				arraySpeedAB.push(data[0]);
				arraySpeedAC.push(data[1]);
				arraySpeedAD.push(data[2]);
				arrayBagAB.push(data[3]);
				arrayBagAC.push(data[4]);
				arrayBagAD.push(data[5]);
			}
			
			var dataSpeed = {		
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
					data: arraySpeedAB,
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
					data: arraySpeedAC,	
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
					data: arraySpeedAD,	
				}]
			};
			var dataBag = {		
				labels:["1","5","10","15","20","25","30","35","40","45",
				"50","55","60","65","70","75","80","85","90","95","100","单位（s）"
				],
				     
				datasets: [{
					label: "A->B 丢包率变化（ms）",
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
					data: arrayBagAB,
				              spanGaps: false,			 
				},{    
					fill:false,
					label:"A->C 丢包率变化（ms）",
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
					data: arrayBagAC,	
					spanGaps: false,		
				},{    
					fill:false,
				 	label:"A->D 丢包率变化（ms）",
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
					data: arrayBagAD,	
				}]
			};

			var dataHistorySpeed = {		
				labels:["0","1","2","3","4","5","6","7","8","9","10","11",
				            "12","13","14","15","16","17","18","19","20","21","22","23","24","单位（s）"
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
					data: [234,221,222,189,188,176,214,178,111,231,234,256,
					            231,197,178,223,175,167,245,175,186,232,234,135],
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
					data: [134,121,122,119,128,76,114,78,111,131,134,156,
					            131,97,78,123,75,67,45,75,86,132,134,135],	
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
					data: [342,121,222,109,158,276,124,178,121,181,234,156,
					            231,197,278,213,125,267,145,275,86,232,364,335],	
				}]
			};
			var dataHistoryBag = {		
				labels:["0","1","2","3","4","5","6","7","8","9","10","11",
				            "12","13","14","15","16","17","18","19","20","21","22","23","24","单位（s）"
				],
				     
				datasets: [{
					label: "A->B 丢包率变化（ms）",
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
					data: [23,12,42,23,21,3,21,4,14,53,23,43,
					            43,21,32,43,12,23,26,26,34,24,23,15],
				              spanGaps: false,			 
				},{    
					fill:false,
					label:"A->C 丢包率变化（ms）",
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
					data: [43,34,53,32,54,24,25,25,24,34,53,23,
					            27,25,35,26,27,45,24,35,45,27,24,37],	
					spanGaps: false,		
				},{    
					fill:false,
				 	label:"A->D 丢包率变化（ms）",
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
					data: [32,2,23,23,1,2,32,14,13,15,18,17,
					            31,15,17,26,10,25,23,9,24,26,32,15],	
				}]
			};
			
			var speedChartCanvas=document.getElementById('theSpeedChart');
			var bagChartCanvas=document.getElementById('theBagChart');
			// var historySpeedChartCanvas=document.getElementById('historySpeedChart');
			// var historyBagChartCanvas=document.getElementById('historyBagChart');

			var mySpeedChart=new Chart(speedChartCanvas,{
				type: 'line',
				responsive: 'true',
				data: dataSpeed,
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
			var myBagChart=new Chart(bagChartCanvas,{
				type: 'line',
				responsive: 'true',
				data: dataBag,
				options: {
					animation:false,		
					scales: {
						yAxes: [{
							ticks: {
								max: 100,
								min: 0,
								stepSize: 5, 
							}
						}]
					}
				}
			});
			// var historySpeedChart=new Chart(historySpeedChartCanvas,{
			// 	type: 'line',
			// 	responsive: 'true',
			// 	data: dataHistorySpeed,
			// 	options: {
			// 		animation: false,		
			// 		scales: {
			// 			yAxes: [{
			// 				ticks: {
			// 					max: 400,
			// 					min: 0,
			// 					stepSize: 10, 
			// 				}
			// 			}]
			// 		}
			// 	}
			// });
			// var historyBagChart=new Chart(historyBagChartCanvas,{
			// 	type: 'line',
			// 	responsive: 'true',
			// 	data: dataHistoryBag,
			// 	options: {	
			// 		animation: false,
			// 		scales: {
			// 			yAxes: [{
			// 				ticks: {
			// 					max: 100,
			// 					min: 0,
			// 					stepSize: 5, 
			// 				}
			// 			}]
			// 		}
			// 	}
			// });
		});

  }