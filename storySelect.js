var genres = [], rankedGenres = {};

var storyMasterList = ['scifi',
  'adventure',
  'cerebral',
  'famous',
  'colorful',
  'dark',
  'shocking',
  'twist',
  'drama',
  'horror',
  'fantasy',
  'satire',
  'comedy',
  'romance'];


//Here's an IIFE with more explosion than the CGI in a Michael Bay film

function explode(){
	return (function getGenreList(){
		//Here's where things get a bit complex. In the "filmData" array, we have 3 elements in each array that contain one or many genres per movie, in a String type. 
		//So, we just need to have a forEach get each string-list of genres, split it with the native method on strings to convert it to its own array, and then have another forEach push each of the specific genres to the "genres" array that we defined above. How hard could it be?
		filmData.forEach(function(movie){
											movie["Genre"].split(", ").forEach(function(specificGenre){
																													findGenre(specificGenre);
																												 });
										 });
		//	#boomgoesthedynamite

		//Cool. Now, we need to set up an object called "rankedGenres", that takes 
		// a count of the genres in the list and ranks them.

		//Since undefined + 1 = NaN, we need to instate each genre as 0 before counting them up.
		//A forEach will do the trick! 
		genres.forEach(function(genre){
									 	 rankedGenres[genre] = 0;
									 });

		//And now we count 'em up!
		genres.forEach(function(genre){
									 	 rankedGenres[genre]++;
									 });

		var onDeck = sortRanked(rankedGenres);

		var finalMasterGenreList = cleanUp(onDeck);
		console.log(finalMasterGenreList);


	})();
}

function sortRanked(object){
	//this function will take in the rankedGenres object, and output an array 
	//sorting the top-ranked genres to the least

	//we'll put all of the key/value pairs as subarrays in a master array and then use the .sort() method to sort the master array
	var sortThese = [];

	//getting the rankedGenres keys...
	var keys = Object.keys(object);

	for(var i=0;i<keys.length;i++){
		sortThese.push([keys[i], object[keys[i]]]);
	}
	//and we sort em! since we want the precedence to be set on the larger of the two numbers
	//we'll subtract genre2 from genre1
	sortThese.sort(function(genre1, genre2){
								   return genre2[1] - genre1[1];
								 });
	//now we're no longer concerned about the numbers, just the order. let's go ahead and take those metrics out...
	//...and return what we have!
	return sortThese.map(function(subarray){
												 return subarray[0];
											 });

}

//This section helps us check the specific genre passed to it, and then, if our stories don't contain that genre,
//it will change what is pushed to the genre array to fit into the story genre library. Ex. if the movie had the genre "Animation",
//(since short stories aren't animated, after all), we would send "colorful" and "fantasy" in it's place.



//Now here's a fun one! This is a function that takes in the array of genre equivalents,
//and returns a function we can use to push each genre into the "genre" array.

function genreChecker(storyEqivalents){
    return function(){
        storyEqivalents.forEach(function(equivalent){
			genres.push(equivalent);
		});
    }
}

//Here, we have a "replacements" object that has methods for any genre we don't have in the story library


var replacements = {
	"Action" : genreChecker(["adventure","cerebral"]),
	"Animation" : genreChecker(["colorful","fantasy"]),
	"Family" : genreChecker(["colorful","fantasy"]),
	"Biography" : genreChecker(["drama","famous","cerebral"]),
	"History" : genreChecker(["drama","famous","cerebral"]),
	"Documentary" : genreChecker(["drama","famous","cerebral"]),
	"Crime" : genreChecker(["adventure","cerebral","drama"]),
	"Comedy" : genreChecker(["comedy","satire"]),
	"Film-Noir" : genreChecker(["adventure","cerebral","twist","shocking","romance"]),
	"Mystery" : genreChecker(["adventure","cerebral","twist","shocking","romance"]),
	"Music" : genreChecker(["colorful","fantasy","comedy","romance"]),
	"Musical" : genreChecker(["colorful","fantasy","comedy","romance"]),
	"Thriller" : genreChecker(["adventure","cerebral","twist","shocking"]),
	"Sport" : genreChecker(["adventure","shocking","famous"]),
	"War" : genreChecker(["drama","adventure","famous"]),
	"Western" : genreChecker(["drama","adventure"])
};

//Next, we have the list of genres we don't have in array form, so we don't have to waste computing time doing a for-in loop or something like that,
//looking for the specific genre in the "replacements" array.

var lookoutGenres = ["Action","Animation","Family","Biography","History","Documentary","Crime","Comedy","Film-Noir","Mystery","Music","Musical","Thriller","Sport","War","Western"];



function findGenre(movieGenre){
	//here comes the indexOf...
	if(lookoutGenres.indexOf(movieGenre) !== -1){
	    replacements[movieGenre]();
	}
	//wasn't that easier!

	else{
		//here's the case of the genre existing inside our story library. good stuff!
	    genres.push(movieGenre.toLowerCase());
	}
}

//Here's the sad part. Since there are countless thousands of sub-genres that anyone off the street can make, we can only support the main ones. Sorry "Steampunk"...


function cleanUp(finalGenreList){
	return finalGenreList.filter(function(genre){
													return storyMasterList.indexOf(genre) !== -1;
												});
}







