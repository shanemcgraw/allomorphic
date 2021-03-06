//Behold! The object of our affections (and our data):

var data = {
    genres : [], 
    rankedGenres : {}, 
    filmData : [],
    dark: true,
    shortStory: 0,
    genStory: true,
    instructGetInfo: true,
    instructLeaveInfo: true
};

//

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


//Here's our kickstarter function (the one that gets everything going). It's got more explosion than the CGI in a Michael Bay film, or so I'm told...

function explode(){
  //Release the Kraken! AKA the "output" div tag
  get('output').style.display = '';
  get("posterInstructions").style.display = "none";

	//Here's where things get a bit complex. In the "filmData" array, we have 3 elements in each array that contain one or many genres per movie, in a String type. 
	//So, we just need to have a forEach get each string-list of genres, split it with the native method on strings to convert it to its own array, and then have another 
  //forEach push each of the specific genres to the "genres" array that we defined above. How hard could it be?
  data.filmData.forEach(function(movie){
				   movie["Genre"].split(", ").forEach(function(specificGenre){
																								findGenre(specificGenre);
																						  });
				 								});

	//	And boom goes the dynamite.

	//Cool. Now, we need to set up an object called "rankedGenres", that takes 
	// a count of the genres in the list and ranks them.

	//Since undefined + 1 == NaN, we need to create each genre as 0 before counting them up.
	//A forEach will do the trick! 
	data.genres.forEach(function(genre){
									      data.rankedGenres[genre] = 0;
									    });

	//And now we count 'em up!
	data.genres.forEach(function(genre){
									      data.rankedGenres[genre]++;
									    });

	// Sort through the stories...
	var onDeck = sortRanked(data.rankedGenres);
	// ...and make sure that there aren't any rogue genres in there
	var finalMasterGenreList = cleanUp(onDeck);

	//rank the stories based on relevance
	var storyOutput = getStory(finalMasterGenreList);

	//create a method on our data object to hold the ranked story array as a closure,
	//so we can access it after it returns
	data.getRankedList = postStory(storyOutput);

	data.getRankedList(data.shortStory);

}

//this function will take in the rankedGenres object, and output an array 
//sorting the top-ranked genres to the least

function sortRanked(object){

	//we'll put all of the key/value pairs as subarrays in a master array and then use the .sort() method to sort the master array
	var sortThese = [];

	//getting the rankedGenres keys...
	var keys = Object.keys(object);

	for(var i=0;i<keys.length;i++){
		sortThese.push([keys[i], object[keys[i]]]);
	}
	//and we sort em! since we want the precedence to be set on the larger of the two numbers
	//we'll subtract "second" from "first"
	sortThese.sort(function(first, second){
								   return second[1] - first[1];
								 });
	return sortThese;
}

//This section helps us check the specific genre passed to it, and then, if our stories don't contain that genre,
//it will change what is pushed to the genre array to fit into the story genre library. Ex. if the movie had the genre "Animation",
//(since short stories aren't animated, after all), we would send "colorful" and "fantasy" in it's place.



//Now here's a fun one! This is a function that takes in the array of genre equivalents,
//and returns a function we can use to push each genre into the "genre" array.

function genreChecker(storyEqivalents){
    return function(){
        storyEqivalents.forEach(function(equivalent){
			data.genres.push(equivalent);
		});
    }
}

//Here, we have a "replacements" object that has methods for any genre 
//we don't have in the story library
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
    "Sci-Fi" : genreChecker(["scifi"]),
	"Thriller" : genreChecker(["adventure","cerebral","twist","shocking"]),
	"Sport" : genreChecker(["adventure","shocking","famous"]),
	"War" : genreChecker(["drama","adventure","famous"]),
	"Western" : genreChecker(["drama","adventure"])
};

//Next, we have the list of genres we don't have in array form, 
//so we don't have to waste computing time doing a for-in loop or 
//something like that,looking for the specific genre in the 
//"replacements" array.

var lookoutGenres = ["Sci-Fi","Action","Animation","Family","Biography","History","Documentary","Crime","Comedy","Film-Noir","Mystery","Music","Musical","Thriller","Sport","War","Western"];

function findGenre(movieGenre){
	//here comes the indexOf...
	if(lookoutGenres.indexOf(movieGenre) !== -1){
	    replacements[movieGenre]();
	}
	else{
		//here's the case of the genre existing inside our story library. 
		//good stuff!
	  data.genres.push(movieGenre.toLowerCase());
	}
}

//Here's the sad part. Since there are countless thousands of sub-genres that 
//anyone off the street can make, we can only support the main ones. 
//Sorry "Steampunk"...

function cleanUp(finalGenreList){
	return finalGenreList.filter(function(genre){
								   return storyMasterList.indexOf(genre[0]) !== -1;
								 });
}


//These functions will help us take a list of genres, sort through the giant 
//stories list, and return the one story most relevant to the user's tastes



//this function will filter down stories that contain a specific genre
//and return the filtered array of story objects    
function filterStory(genre){
	var getGenre = function(story){
								 	 return story.genre.indexOf(genre) !== -1;
							   };
	return stories.filter(getGenre);
}

//this function will take the filtered list of stories and add a specific number of points for each story it finds
function storyScore(genre, point){
	var hits = filterStory(genre);
	return hits.forEach(function(story){
    					  story.score += point;
    					});
}


function getStory(genreList){

	//The first thing to do is change the genreList ever so slightly to get a sense of 
	//importance for each genre. Since they're all ranked by importance starting with
	//the first genre element in the array, we'll swap out the element with a new sub-
	//array that contains both the genre, and the "importance score" (which is how many 
  //times each genre showed up in our list).

	genreList.forEach(function(genreSubArray){
		              storyScore(genreSubArray[0],genreSubArray[1]);
	                });

	//Great! Now, we sort all the objects by their "score" property, and we have our top 
	//selection as the first element in the returned array. 
	var sortedStoryArray = stories.sort(function(a,b){
					
					                						  return b.score - a.score;
					                					   });
  //The last thing we do is return the sorted array, with the filtering out (or not, depending on the age score) of the
  return sortedStoryArray.filter(function(story){
                                   if(!data.dark){
                                      return (story.genre.indexOf("dark") === -1);
                                   }
                                   else{
                                      return true;
                                   }
                                 });

}

function postStory(storyArray){
	return function(index){

					//Making sure that we set the respective property in the "data"
					// object to 'false' - telling our program, "Hey, we generated
					// a story for this user!"
					 data.genStory = false;

					 //Who needs instructions!

	         get("instructions").innerHTML = "";

	         //Post the story!
	  	     get("selection").innerHTML = "<a id=\"linkToStory\" target= \"_blank\" href = \"" + storyArray[index].link + "\"><em>\""+storyArray[index].title + "\"</em></a>";
	  		 
	    		 var content = storyArray[index].plot;

	    		 domMan("p",tNode(content),get("selection"));
		   	 }
}

function butThatsAnotherStory(e){

	//This function will move down the sorted story array, giving the user
	// more suggestions based on relevancy score, until they get to the end.
	// The last 'story' is a shameless plug inviting feedback

	var target = e.target;
	if(target.id === "anotherStory"){
    //this will move through the list of stories and give the user the next-best ranked story
		if(data.shortStory < stories.length - 1){
			data.shortStory++;
			data.getRankedList(data.shortStory);
		}
    else{
      //This will prompt the user to email me to get more short stories into that library!
      var theEnd = {
          title: "The End",
          author: "",
          year: 2015,
          plot: "...And they lived happily ever after. Email Shane with questions, commments, and requests to add in your favorite short stories!",
          genre: [],
          link: "mailto:shanemcgraw7@gmail.com/"
          };
      get("selection").innerHTML = "<a id=\"linkToStory\" target= \"_blank\" href = \"" + theEnd.link + "\"><em>\""+theEnd.title + "\"</em></a>";
      var noMoreContent = theEnd.plot;
      domMan("p",tNode(noMoreContent),get("selection"));
      get("anotherStory").style.display = "none";
    }
	}
}



