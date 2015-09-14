//Here's a fun one! This is a function that takes in the array of genre equivalents,
//and returns a function we can use to push each genre into the "genre" array.

function genreChecker(storyEqivalents){
    return function(){
        storyEqivalents.forEach(function(equivalent){
			genre.push(equivalent);
		});
    }
}

//Here, we have a "replacements" object that has methods for any genre we don't have in the story library


var replacements = {
	"Action" : genreChecker(["adventure","cerebral"]),
	"Sci-Fi" : genreChecker(["scifi"]),
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
	    genre.push(movieGenre);
	}
}
