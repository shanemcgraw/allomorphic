var warpDrive = function(engage){

	//To "get" ourselves a nice clean closure, we return a function with an added "destination" param, aka the URL of the request (since they'll be changing every movie)
	//Everything else is a basic XHR request
	return function(destination){

		//A helpful search gif that will display a rotating wheel, to suggest hard search work by our page!
		get("feedback").innerHTML = "Searching<img src=\"../loading.gif\">";
		var yourOut;
		var yourReallyOut;
		
		//This will empathize with the frustrated user, reminding them (subconsciously, perhaps) that there's a lot of data to go through!
		delayedAlert();

		function delayedAlert() {
	  	yourOut = window.setTimeout(stillSearch, 5000);
	  	yourReallyOut = window.setTimeout(stillerSearch, 7000);
		}

		function stillSearch() {
  		get("feedback").innerHTML = "Searching rapidly<img src=\"../loading.gif\">";
		}

		function stillerSearch() {
  		get("feedback").innerHTML = "Searching even more rapidly<img src=\"../loading.gif\">";
		}


		var omdb = new XMLHttpRequest();

		omdb.onload = function(){
			if(omdb.readyState === 4){
				if(omdb.status === 200){
					window.clearTimeout(yourOut);
					window.clearTimeout(yourReallyOut);
					get("feedback").innerHTML = "";


					engage(JSON.parse(omdb.responseText));

					//console.log(omdb.responseText);

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


//As always, Mr. Sulu takes us there with speed

function mrSulu(url){
	return warpDrive(updateFilmTable)(url);
}

//urlBuild will make our URL for Mr. Sulu ship-shape

function urlBuild(movie, year){
	var title = titleSmoother(movie);
	var domain = "http://www.omdbapi.com/?type=movie&t=";
	var end = "&plot=full&r=json";

	return domain + title + "&" + year + end;
}

//titleSmoother takes care of the multi-word titles. Ex. 'The Wrath of Khan' -> 'the+wrath+of+khan'

function titleSmoother(title){
	var arr = title.split(" ");
	return arr.join("+").toLowerCase();
}