var request;
function getDataFromBackend (url){
	return new Promise(function(resolve,reject){
		request = new XMLHttpRequest();

		request.open("GET",url,true);
		request.responseType = 'text';
		request.send();
		request.onload = function(){
			if(request.readyState == 4 && request.status == 200){
				let data = JSON.parse(request.responseText);
				resolve(data);


			} else
				reject(new Error("false" + request.status));

		};
	});
}	

