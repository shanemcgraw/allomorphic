var rank = {
    one: 5,
    two: 5,
    three: 3,
    four:1
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
	//we'll subtract "second" from "first"
	sortThese.sort(function(first, second){
								   return second[1] - first[1];
								 });
	//now we're no longer concerned about the numbers, just the order. Let's go ahead and take those metrics out...
	//...and return what we have!
	var length = sortThese.length;
	
	return sortThese.map(function(subarray, index){
	    if(index < length - 1 && sortThese[index][1] === sortThese[index + 1][1]){
	        console.log("SAME DETECTED: ["+sortThese[index] +"] and ["+ sortThese[index+1]+"]");
	        sortThese[index].push("same");
	        sortThese[index + 1].push("same");
	        
	    }
												 return subarray;
											 });
	
	
	

}

sortRanked(rank);
