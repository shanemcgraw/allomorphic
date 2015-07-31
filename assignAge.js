//This is a function to determine the appropriateness of the movie ratings givent, from 0-100.
//We can't have ourselves giving out R-rated stories to a child of 5, can we?

function ageApp(rate1,rate2,rate3){
	
//baseline score = 0
	var ageScore = 0;
	var ratingsObj = arguments;
	
	var ratingArray = [];
	
	for(var key in ratingsObj){
	    ratingArray.push(ratingsObj[key]);
	}
	

	ratingArray.forEach(function(rating){
	    if(rating === "R"){
				ageScore += 100;
			}
			else if(rating === "PG-13"){
				ageScore +=50;
			}
			else if(rating === "PG"){
				ageScore +=10;
			}
	    
	});

	return ageScore > 100 ? 100 : ageScore;	
}
