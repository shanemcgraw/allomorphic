function get(x){
	return document.getElementById(x);
}

function tagger(tag) {
	return document.getElementsByTagName(tag);
}

function classer(classy) {
	return document.getElementsByClassName(classy);
}

function create(el) {
	return document.createElement(el);
}

function tNode(text) {
	return document.createTextNode(text);
}

function makeImage(link){
	return "<img src=\'"+link+"\' alt=\'Movie Poster\'>";
}

function domMan(elType, text, position, callback){
	var newEl = create(elType);
	var textInfo = text;
	newEl.appendChild(text);
	position.appendChild(newEl);

	if(callback){
		callback(newEl);
	}
}

function updateFilmTable(filmResponse){

	//Changing the poster size in the film response to a smaller size
	var posterLink = filmResponse.Poster;
	var posterParsed = posterLink.split("SX300.jpg");
	filmResponse["Poster"] = posterParsed[0] + "SX200.jpg";

	domMan("tr", tNode(filmResponse.Title), get('filmTitle'));
	domMan("tr", tNode(filmResponse.Year), get('filmYear'));
	domMan("tr", tNode(""), get('filmPoster'), function(){
		
		//this callback function updates what would normally be a simple text node into an image of the film poster
		var number = get("filmPoster").childNodes.length - 1;

		get("filmPoster").childNodes[number].innerHTML = makeImage(filmResponse.Poster);

	});
}

function postMovie(e){

	//Get the 'target'; the element that the user clicks on
	var target = e.target;
	

	if(elButton.id === "generator"){
		//Call getStory
	}
	
	else if(target.type === "button"){

		//Update counter so the user sees error after 3 movie inputs

		movieCounter++;
		
		var movieTitle = elMovie.value;
		var year = elYear.value;
		
		var urlToCall = urlBuild(titleSmoother(movieTitle), year);

		//mrSulu on the bridge
		mrSulu(urlToCall);
		
		if(movieCounter < 3){
			movie.value = "Movie #" + (movieCounter + 1).toString();
			year.value = "Year";

		}
		else if(movieCounter >= 3){
			elMovie.value = '';
			elYear.value = '';
			elButton.type;
			elButton.value = "Generate";
			elButton.id = "generator";
		}
	}
};