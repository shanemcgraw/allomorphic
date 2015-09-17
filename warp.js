

var warpDrive = function(engage){

	//To get ourselves a nice clean closure, we return a function with an added "destination" param, aka the URL of the request (since they'll be changing every movie)
	//Everything else is a basic XHR request
	return function(destination){

		//A helpful search gif that will display a rotating wheel, to suggest hard search work by our page!
		get("feedback").innerHTML = "<img src=\"loading.gif\">";
		

		var omdb = new XMLHttpRequest();

		omdb.onload = function(){
			if(omdb.readyState === 4){
				if(omdb.status === 200){
					var data = JSON.parse(omdb.responseText);
					if(data.Response === "True"){
						get("feedback").innerHTML = "";
						engage(data);
						filmData.push(data);
					}	
					else{
						console.log("NOHPE!");
						get("feedback").innerHTML = "";
						domMan("p", tNode("Hmm. We weren't able to find that film in the database... is there another that you like?"), get("feedback"), function(){
						});
					}
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
	console.log(movieCounter);
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