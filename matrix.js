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

function makeImage(imgLink, imageId){
	return '<img '+'id= '+imageId+' src='+imgLink+' alt="Poster not found" onError="this.onerror=null; this.src=\'fallback.jpg\';" />';
}


function removeEl(elId){
	get(elID).parentNode.removeChild(get(elID));
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

	//Getting the poster link to display...
	var posterLink = filmResponse.Poster;

	//Making sure the film came through
	if(filmResponse.Title !== undefined){
		//we'll define a helpful variable to reference the move number we're working with
		var filmNumber = (movieCounter-1).toString();

		//This will add in the poster to our site. Pretty!
		domMan("figure", tNode(""), get('posterSection'), function(){
			//this callback function updates what would normally be a simple text node into an image of the film poster
			var number = get("posterSection").childNodes.length - 1;
			get("posterSection").childNodes[number].innerHTML = makeImage(filmResponse.Poster, "poster"+filmNumber);
		});

		get("poster"+filmNumber).parentNode.id = "film"+filmNumber;
		get("poster"+filmNumber).parentNode.class = "films";


		domMan("figcaption", tNode(filmResponse.Title), get("film"+filmNumber));
		//domMan("figcaption", tNode(filmResponse.Plot), get("film"+filmNumber));


		if(get("feedback").childNodes[1]){
			removeEl("noFind");
		}

	}

	else if(get("feedback").childNodes[1] === undefined){
		domMan("p", tNode("Hmm. We weren't able to find that film in the database... is there another that you like?"), get("feedback"), function(){
			get("feedback").childNodes[1].id = "noFind";
		});
	}
}


function postMovie(e){

	//Get the 'target'; the element that the user clicks on
	var target = e.target;
	
	
	if(target.id === "generator" && genStory){
		//Call getStory
		explode();
		genStory = false;
	}
	
	else if(target.id === "adder"){

		var yearInt = parseInt(elYear.value);

		if(elMovie.value !== "Movie" && elMovie.value && elYear.value !== "Year" && 2016 > yearInt && yearInt > 1890){
			movieCounter++;

			var movieTitle = elMovie.value;
			var year = elYear.value;
			
			var urlToCall = urlBuild(titleSmoother(movieTitle), year);

			//mrSulu on the bridge
			mrSulu(urlToCall);

			if(movieCounter < 4){
				elYear.value = "1941";
				elMovie.value = "The Maltese Falcon";
			}

			else if(movieCounter >= 4){
				elMovie.value = '';
				elYear.value = '';
				elButton.type;
				elButton.value = "Generate";
				elButton.id = "generator";
			}
		}

		//With the logic of Spock, we can determine if the fields filled out in the form are okay or not. Basically, this tests for acceptable data entered into the form field. If not, it will update the "feedback" tag right above the form, so the user can read it and act accordingly. Live long and prosper!
		
		else if(elYear.value === "Year" || 2016 < parseInt(elYear.value) || parseInt(elYear.value) < 1890 || typeof parseInt(elYear.value) === "number"){

			if(elMovie.value === "Movie" && elMovie.value){
				//clear the feedback paragraph
				get("feedback").innerHTML = "";
				//update with error
				domMan("p", tNode("Valid movie title and year required"), get("feedback"));
			}
			else{
				//clear the feedback paragraph
				get("feedback").innerHTML = "";
				//update with error
				domMan("p", tNode("Please enter valid year between 1890 and 2015"), get("feedback"));
			}
		}

		else{
			//clear the feedback paragraph
			get("feedback").innerHTML = "";
			//update with error
			domMan("p", tNode("Movie title required"), get("feedback"));
		}
	}
};