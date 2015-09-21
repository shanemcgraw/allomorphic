var omdb = new XMLHttpRequest();

omdb.onload = function(){
	if(omdb.readyState === 4){
		if(omdb.status === 200){
			engage();
		}
	}
}