var warpDrive = function(engage){

	//To get ourselves a nice clean closure, we return a function with an added "destination" param, aka the URL of the request (since they'll be changing every movie)
	//Everything else is a basic XHR request
	return function(destination){

		//A helpful search gif that will display a rotating wheel, to suggest hard search work by our page!
		get("loading").innerHTML = "<img id=\"loading\" src=\"loading.gif\">";
		

		var omdb = new XMLHttpRequest();

		// Here we have a series of checks based on the X.H.R. It checks 1) if the 
		// request is finished and the response is ready (readyState === 4)
		// 2) if the status is "OK", meaning it's good to give us that movie data
		// and 3) if the movie data is found in the oMDB database. not much good if 
		// the response and status are ok without meaningful data to get to the user!


		omdb.onload = function(){
			if(omdb.readyState === 4){
				if(omdb.status === 200){
					var omdbData = JSON.parse(omdb.responseText);
					if(omdbData.Response === "True"){
						get("feedback").innerHTML = "";
						get("loading").innerHTML = "";
						engage(omdbData);
						data.filmData.push(omdbData);

						// If everything's okay, we want to make sure that we don't have too many 
						// movie "assets" displayed on the page. technically, we can get as many movies
						// as we want, but 3 seems to be a pretty good number. The data.movieCounter variable
						// starts at 0, but it's a bit confusing: it's both inclusive (since it gets checked)
						// after the response already comes back) and reflects (# of movies - 1). All of that
						// to say, it needs to check the page by subtracting 2 from the number of movies we 
						// want, so we check if it's greater than 1 (since 3-2 = 1).
						// (catches breath)
						// If there are 3 assets up on the page, the innerHTML of the input form fields will disappear
	

						if(data.filmData.length > 2){
							//we want to hide the movieInput section completely, erasing even the space it took up
							get("movieInput").style.display = "none";
							//we want to erase the instructions too, but to keep things from changing too much, we want to keep the same space it took up and just have it invisible
							get("instructions").style.display = "none";

							elButton.value = "Generate!";
							elButton.id = "generator";


						}
						else if(data.filmData.length <= 2){
							elYear.value = "2003";
							elMovie.value = "The Lord of the Rings: The Return of the King";
							get('option').style.display = "";
							resetFilmNumbers();

						}

						//data.movieCounter++;						
					}	
					else{
						get("feedback").innerHTML = "";
						get("loading").innerHTML = "";
						domMan("p", tNode(cantFind()), get("feedback"));
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
};

function cantFind(){
	var responses = ["Hmm. We weren't able to find that film in the database... "
	+"is there another that you like?","You have very interesting taste! Unfortun"
	+"ately, we couldn't find that one in our system. Try another!","Interesting.."
	+". we couldn't find that one in our DB. Is there another one that you fancy?",
	"Blast! We don't have that one. (I'm sure you scour Netflix for this one all"
	+" the time.) Can you try another?"];
	var pick = Math.floor(Math.random() * responses.length);
	return responses[pick];
}


//As always, Mr. Sulu takes us there with speed

function mrSulu(url){
	return warpDrive(updateFilmTable)(url);
}

//urlBuild will make our URL for Mr. Sulu ship-shape


function urlBuild(movie, year){
	var title = titleSmoother(movie);
	var domain = "http://www.omdbapi.com/?type=movie&t=";
	var end = "&plot=short&r=json";

	return domain + title + "&" + year + end;
}

//titleSmoother takes care of the multi-word titles. Ex. 'The Wrath of Khan' -> 'the+wrath+of+khan'

function titleSmoother(title){
	var arr = title.split(" ");
	return arr.join("+").toLowerCase();
}


