//establish new XMLHttpRequest called "omdb"
function start(){
var omdb = new XMLHttpRequest();

//simple GET request here
//we want this to be asynchronous, so we'll put in "true" for the 3rd param. 
var title = "Up";

var year = "2009";

omdb.open("GET", "http://www.omdbapi.com/?t="+title+"&y="+year+"&plot=full&r=json", true);

//when it loads, we need a callback function to handle the response we "GET"
var plotData;

omdb.onload = function(e){

	if(omdb.readyState === 4){
		if(omdb.status === 200){
			//firePhotonTorpedo();
			console.log("Hey!");

		}

		else{
			console.log(omdb.statusText);
		}

	}
};

omdb.onerror = function(error){
	console.log("We found an error: "+error);
};

//Engage, Mr. Sulu

//omdb.send(null);
}