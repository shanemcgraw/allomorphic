
//https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers
//establish new XMLHttpRequest called "movieData"

var movieData = new XMLHttpRequest();

var title = prompt("Favorite Movie: ").split(" ").join("+");
var year = prompt("Year: ").split(" ").join("+");


//simple GET request here
//we want this to be asynchronous, so we'll put in "true" for the 3rd param. nonBlockingCode === "winning"

movieData.open("GET", "http://www.omdbapi.com/?t="+title+"&y="+year+"&plot=full&r=json", true);

//when it loads, we need a callback function to handle the response we "GET"
var plotData;
movieData.onload = function(e){
	if(movieData.readyState === 4){
		if(movieData.status === 200){
			console.log(movieData.responseText);
			var info = JSON.parse(movieData.responseText);
			var title = document.getElementById("title");
			var genre = document.getElementById("genre");
			var posterLink = info["Poster"];
			var posterParsed = posterLink.split("SX300.jpg");
			document.getElementById("dataTitle").innerHTML = info["Title"];
			document.getElementById("dataGenre").innerHTML = info["Genre"];


			
			info["Poster"] = posterParsed[0] + "SX3000.jpg";
			
			title.backgroundImage = "url("+(info["Poster"])+")";


			var plot = document.getElementById("moviePlot");
			plot.innerHTML = info["Plot"];
			title.innerHTML = info["Title"]; + ": "
			genre.innerHTML = info["Genre"];



		}
		else{
			console.log(movieData.statusText);
		}
	}
};

movieData.onerror = function(error){
	console.log(error);
};

//do it!
movieData.send(null);
console.log("Testing!");
