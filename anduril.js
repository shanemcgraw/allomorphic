function log (display) {
	return console.log(display);
}

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
	return '<img '+'id= '+imageId+' src='+imgLink+' alt="Poster" onError="this.onerror=null; this.src=\'fallback.jpg\';" />';
}

function removeEl(elId){
	get(elID).parentNode.removeChild(get(elID));
}


//This is a function that will help us manipulate the DOM, while adding in a callback if we need some extra functionality
function domMan(elType, text, position, callback){
	var newEl = create(elType);
	var textInfo = text;
	newEl.appendChild(text);
	position.appendChild(newEl);

	if(callback !== undefined){
		callback(newEl);
	}
}



function updateFilmTable(filmResponse){

	//Getting the poster link to display...
	var posterLink = filmResponse.Poster;

	//Making sure the film came through
	if(filmResponse.Response === "True"){
		//we'll define a helpful variable to reference the move number we're working with
		var filmNumber = (data.filmData.length).toString();

		//This will add in the poster to our site. Pretty!
		domMan("figure", tNode(""), get('posterSection'), function(){
			//this callback function updates what would normally be a simple text node into an image of the film poster
			var number = get("posterSection").childNodes.length - 1;
			get("posterSection").childNodes[number].innerHTML = makeImage(filmResponse.Poster, "poster"+filmNumber);
		});

		get("poster"+filmNumber).parentNode.id = "film"+filmNumber;
		get("poster"+filmNumber).parentNode.class = "films";
	}
}


function postMovie(e){
	resetFilmNumbers();


	//Get the 'target'; the element that the user clicks on
	var target = e.target;
	
	if(target.id === "generator" && data.genStory){
		data.dark = ageApp(data.filmData);
		explode();
		get("theButton").innerHTML = ""; // = false;
	}
	
	else if(target.id === "adder"){

		var yearInt = parseInt(elYear.value);

		if(elMovie.value !== "Movie" && elMovie.value && elYear.value !== "Year" && 2016 > yearInt && yearInt > 1890){

			var movieTitle = elMovie.value;
			var year = elYear.value;

			



			var urlToCall = urlBuild(titleSmoother(movieTitle), year);

			//mrSulu on the bridge
			mrSulu(urlToCall);
			
		}

		//With the logic of Spock, we can determine if the fields filled out in the form are okay or not. 
		//Basically, this tests for acceptable data entered into the form field. If not, it will update the "feedback" tag right above the form, so the user can read it and act accordingly. Live long and prosper!
		
		else{

			if((elMovie.value === "Movie" || !elMovie.value) && (isNaN(parseInt(elYear.value)) || typeof parseInt(elYear.value) !== "number" || 2016 < parseInt(elYear.value) || parseInt(elYear.value) < 1890)){
				//clear the feedback paragraph
				get("feedback").innerHTML = "";
				//update with error
				domMan("p", tNode("Valid movie title and year required"), get("feedback"));
				get("movie").focus();

			}

			else if(isNaN(parseInt(elYear.value)) || typeof parseInt(elYear.value) !== "number" || 2016 < parseInt(elYear.value) || parseInt(elYear.value) < 1890){
				//clear the feedback paragraph
				get("feedback").innerHTML = "";
				//update with error
				domMan("p", tNode("Please enter valid year between 1890 and 2015"), get("feedback"));
				get("year").focus();
			}
		
			else{
				//clear the feedback paragraph
				get("feedback").innerHTML = "";
				//update with error
				domMan("p", tNode("Movie title required"), get("feedback"));
				get("movie").focus();
			}
		}
	}
};


// In this function, we'll take the target and display the film's contents, 
// along with highlighting the film selected (by changing the CSS class)
function getFilmInfo(e){
	var target = e.target;
	//reset those film tags!
	resetFilmNumbers();

	//resetting any element that was previously highlighted

	var highlighted = document.querySelectorAll(".highlight");
		for(var i = 0; i<highlighted.length;i++){
			highlighted[i].className = "noHighlighted";
		}

	//check to see if the user has selected a movie image 
	// (instead of the loading .gif image)

	if(e.target.nodeName === "IMG" && e.target.id !== "loading"){
		var movieNumber = parseInt(target.parentNode.id.split("film")[1]);
		e.target.className = "highlight";
		get("movieFacts").innerHTML = "<h2 id='selectedTitle'>\""+data.filmData[movieNumber]["Title"] 
		+ "\"</h2><p id='selectedYear'><em>"+data.filmData[movieNumber]["Year"]+"</em></p><p id=selectedPlot>"
		+data.filmData[movieNumber]["Plot"]+"</p><button id=\"deleteMovie\" onclick=\"cancelFilm(["+movieNumber+"])\">Remove</button>";
	}
	else if(target.id === "plot"){
		return null;
	}
	else{
		get("movieFacts").innerHTML = "";
	}
}



function deleteArrEl(position){

	var front = data.filmData.slice(0,position);
	var back = data.filmData.slice(position + 1, data.filmData.length);


	return front.concat(back);
}

// this function needs to basically undo a call to mrSulu; 
// reverting the changes back to whatever they were before 
// the call

function cancelFilm(movieNumber){

	// Checking data.genStory to see if we're still free to generate a story (the default value is true)
	if(data.genStory){
			//change the add button to "add"
			//resetFilmNumbers();
			movieNumber = movieNumber.toString();


			get("movieInput").style.display = "inline";
			//we want to erase the instructions too, but to keep things from changing
			// too much, we want to keep the same space it took up and just have it invisible
			get("instructions").style.display = "inline";

			elButton.value = "Add";
			elYear.value = "2003";
			elMovie.value = "The Lord of the Rings: The Return of the King";
			get('option').style.display = "inline";

			get("film" + movieNumber).parentNode.removeChild(get("film"+movieNumber));
			if(get("generator")){
				get("generator").id = "adder";
			}


			data.filmData = deleteArrEl(parseInt(movieNumber));

			//rename the ID's of the other elements
			//rename the ID's of their child nodes ()
			resetFilmNumbers();
	}
}

function resetFilmNumbers(){
	var figuratives = tagger("figure");
	for(var i = 0; i < figuratives.length; i++){
		figuratives[i].id = "film" + i.toString();
		figuratives[i].childNodes[0].id = "poster" + i.toString();
	}
}

