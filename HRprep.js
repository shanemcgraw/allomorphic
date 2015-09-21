var obj = {};
var arr = [];

function each(list, cb){
	if(Array.isArray(list)){
		for(var i=0;i<list.length;i++){
			cb(list[i]);
		}
	}
	else if(typeof list === "object"){
		var keys = Object.keys(list);
		for(var j=0;j<keys.length;j++){
			cb(list[keys[j]]);
		}
	}
	else{
		return "Please input array or object";
	}
}

function filter(list, test){
	if(Array.isArray(list)){

		var successArr = [];

		function testEm(element){
			if(test(element)){
				successArr.push(element);
			}
		}

		each(list,testEm);

		return successArr;
	}

	else if(typeof list === "object"){
		var successOb = {};

		function getKeyFromValue(object){
			
		}

		function testEm(value){
			if(test(value)){

			}
		}


	}
	else{
		return "Please input array or object";
	}
}



//Starting again...

function each(list, cb){
	if(Array.isArray(list)){
		for(var i=0;i<list.length;i++){
			cb(list);
		}
	}
	else if(typeof list === "object"){
		var keys = Object.keys(list);
		for(var i=0;i<keys.length;i++){
			cb(list[[keys][i]]);
		}
	}
	else{
		console.log("Please enter an object or an array");
	}
}


function filter(list, test){
	
	var successArr = [];
	var successOb = {};

	if(Array.isArray(list)){
		
		function testEmArrEd(element){
			if(test(element)){
				successArr.push(element);
			}
		}
		each(list, testEmArrEd);
		return successArr;
	}
	else if(typeof list === "object"){
		function testEmObEd(key){
			if(test(list[key])){
				successOb[key] = list[key];
			}
		}
		each(list, testEmObEd);
		return successOb;
	}
}

