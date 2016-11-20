getDataFromBackend("../data/history-data.json")
	.then(function(data){
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
					data: data.dataSpeedAB,
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
					data: data.dataSpeedAC,	
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
					data: data.dataSpeedAD,	
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
					 data: data.dataBagAB,
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
					data: data.dataBagAC,	
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
					data: data.dataBagAD,	
				}]
			};

		var historySpeedChartCanvas=document.getElementById('historySpeedChart');
		var historyBagChartCanvas=document.getElementById('historyBagChart');

		var historySpeedChart = new Chart(historySpeedChartCanvas,{
				type: 'line',
				responsive: 'true',
				data: dataHistorySpeed,
				options: {
					animation: false,		
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
			var historyBagChart=new Chart(historyBagChartCanvas,{
				type: 'line',
				responsive: 'true',
				data: dataHistoryBag,
				options: {	
					animation: false,
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
		
	},function(err){
		console.log(`error : ${err}`);
	}
);


