var warpDrive = function(engage){

	//To "get" ourselves a nice clean closure, we return a function with an added "destination" param, aka the URL of the request (since they'll be changing every movie)
	//Everything else is a basic XHR request
	return function(destination){

		var omdb = new XMLHttpRequest();

		omdb.onload = function(){
			if(omdb.readyState === 4){
				if(omdb.status === 200){
					engage(JSON.parse(omdb.responseText));
					console.log(JSON.parse(omdb.responseText));
				}
				else{
					console.log(omdb.statusText);
				}

			}
		}

		
		omdb.open("get", destination, true);
		omdb.send(null);
	}
}


//As always, Mr. Sulu takes us there

function mrSulu(url){
	return warpDrive(updateFilmTable)(url);
}

//urlBuild will make our URL for Mr. Sulu ship-shape

function urlBuild(movie, year){
	var title = titleSmoother(movie);
	var domain = "http://www.omdbapi.com/?t=";
	var end = "&plot=full&r=json";

	return domain + title + "&" + year + end;
}

//titleSmoother takes care of the multi-word titles. Ex. 'The Wrath of Khan' -> 'the+wrath+of+khan'

function titleSmoother(title){
	var arr = title.split(" ");
	return arr.join("+").toLowerCase();
}