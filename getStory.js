//These functions will help us take a list of genres, sort through the giant stories list, and return the one story most relevant to the user's tastes

//this function will filter down stories that contain a specific genre
//and return the filtered array of story objects
/*
    
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

//["comedy", "satire", "drama", "romance", "colorful", "fantasy", "adventure"]


function getStory(genreList){

	//The first thing to do is change the genreList ever so slightly to get a sense of 
	//importance for each genre. Since they're all ranked by importance starting with
	//the first genre element in the array, we'll swap out the element with a new sub-
	//array that contains both the genre, and the importanceScore (which is just the 
	//length of the array minus the current index)
	var newList = genreList.map(function(genre, index){
																return [genre, genreList.length - index];
															});

	//Cool. Now we need to call our storyScore on each of the stories...
	newList.forEach(function(genreSubArray){
		storyScore(genreSubArray[0],genreSubArray[1]);
	});
	//Great! Finally, we sort all the objects by their "score" property, and we have our top 
	//selection as the first element in the returned array. 

	return stories.sort(function(a,b){
												return a.score - b.score;
											});
}

*/