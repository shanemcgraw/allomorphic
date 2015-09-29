//This is a function to determine the appropriateness of the movie ratings given,
// from 0-100.

//We can't have ourselves giving out super-dark stories to a child of 5, can we?

function ageApp(movieList){
	
	//baseline score = 0
	var ageScore = 0;
	movieList.forEach(function(movie){
	    if(movie.Rated === "R"){
				ageScore += 100;
			}
			else if(movie.Rated === "PG-13"){
				ageScore +=50;
			}
			else if(movie.Rated === "PG"){
				ageScore +=34;
			}
	});

	//this will return a binary that basicallys says "YES, dark stories should be 
	//recommended" - or "NO, dark stories should NOT be recommended"
	return ageScore > 100 ? true : false;	
}
