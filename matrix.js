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

function makeImage(imgLink, classID){
	return '<img src='+imgLink+' alt="Poster not found" onError="this.onerror=null; this.src=\'mainecoon.jpg\';" />';
}

function removeEl(elId){
	get(elID).parentNode.removeChild(get(elID));
}


//document.getElementById('foobar').parentNode
    //.removeChild(document.getElementById('foobar'));


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
	//And here we have the table coming out of the shadows (if it's the first movie loading in the list, that is)
	get("filmTable").style.visibility = "visible";


	var cancelElements = classer("cancel");
	console.log(cancelElements);
	for(var x=0;x<cancelElements.length;x++){
		cancelElements[x].id="cancelMovie"+(x+1).toString();
	}


	//Changing the poster size in the film response to a smaller size
	var posterLink = filmResponse.Poster;
	if(posterLink !== undefined){
		var posterParsed = posterLink.split("SX300.jpg");
		filmResponse["Poster"] = posterParsed[0] + "SX200.jpg";
	}
	//Making sure the film came through
	if(filmResponse.Title !== undefined){

		domMan("tr", tNode(filmResponse.Title), get('filmTitle'));
		domMan("tr", tNode(filmResponse.Year), get('filmYear'));
		domMan("tr", tNode(""), get('filmPoster'), function(){
			
			//this callback function updates what would normally be a simple text node into an image of the film poster
			var number = get("filmPoster").childNodes.length - 1;

			get("filmPoster").childNodes[number].innerHTML = makeImage(filmResponse.Poster);

		});
/*
		domMan("tr", tNode(""), get('cancel'), function(){
			//this same callback function adds an image for the cancel 
			var number = get("cancel").childNodes.length - 1;
			var idNumber = (movieCounter - 1).toString();
			get("cancel").childNodes[number].innerHTML = makeImage('cancel.png','mainecoon.jpg','cancel');
		});
*/


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
/*
//this function goes all "Agent Smith" on the film that the user identified to eliminate. I'm speaking, of course, of the first Matrix- not its unfortunate and bumbling sequels.
function removeFilm(filmRow){
	//making sure that we don't accidentally update the button to "Generate" before there are 3 movies in the table
	movieCounter--;

	var el = get("filmTable");

	//based on the DOM elements in the filmTable section, every other childNode contains the information that we need to delete. This for loop takes care of it! 

	for(var i=0;i<7;i+=2){
		var parent = el.childNodes[3].childNodes[1].childNodes[2].childNodes[i];
		var child = el.childNodes[3].childNodes[1].childNodes[2].childNodes[i].childNodes[filmRow-1];
		parent.removeChild(child);
	}

}

function detectCancel(e){
	var target = e.target;
	console.log(target.id);
	var filmToDelete = parseInt(target.id.split("cancelMovie").join(""));
	removeFilm(filmToDelete);
}
*/


function postMovie(e){

	//Get the 'target'; the element that the user clicks on
	var target = e.target;
	
	
	if(elButton.id === "generator"){
		//Call getStory
	}
	
	else if(target.type === "button"){

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