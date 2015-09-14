var oMDB = {
genres:[

"Action",
["adventure","cerebral"]

"Animation",
"Family",
["colorful","fantasy"]

"Biography",
"History",
"Documentary",
["drama","famous","cerebral"]

"Crime",
["adventure","cerebral","drama"]

"Comedy",
["comedy","satire"]

"Film-Noir",
"Mystery",
["adventure","cerebral","twist","shocking","romance"]


"Music",
"Musical",
["colorful","fantasy","comedy","romance"]

"Thriller",
["adventure","cerebral","twist","shocking"]


"Sport",
["adventure","shocking","famous"]

"War",
["drama","adventure","famous"]

"Western"
["drama","adventure"]


};

genreChecker("Action",["adventure","cerebral"]);
genreChecker("Animation",["colorful","fantasy"]);
genreChecker("Family",["colorful","fantasy"]);
genreChecker("Biography",["drama","famous","cerebral"]);
genreChecker("History",["drama","famous","cerebral"]);
genreChecker("Documentary",["drama","famous","cerebral"]);
genreChecker("Crime",["adventure","cerebral","drama"]);
genreChecker("Comedy",["comedy","satire"]);
genreChecker("Film-Noir",["adventure","cerebral","twist","shocking","romance"]);
genreChecker("Mystery",["adventure","cerebral","twist","shocking","romance"]);
genreChecker("Music",["colorful","fantasy","comedy","romance"]);
genreChecker("Musical",["colorful","fantasy","comedy","romance"]);
genreChecker("Thriller",["adventure","cerebral","twist","shocking"]);
genreChecker("Sport",["adventure","shocking","famous"]);
genreChecker("War",["drama","adventure","famous"]);
genreChecker("Western",["drama","adventure"]);


//This function helps us check the specific genre passed to it, and then, if our stories don't contain that genre,
//it will change what is pushed to the genre array to fit into the story genre library. Ex. if the movie had the genre "Animation",
//(since short stories aren't animated, after all), we would send "colorful" and "fantasy" in it's place.
//It's also worth noting that since this function is called within this specific scope, it has access to the "genre" variable
//that it wouldn't have otherwise 


function genreChecker(movieGenreToChange,[storyEqivalents]){
	if(specificGenre === movieGenreToChange){
		storyEqivalents.forEach(equivalent){
			genre.push(equivalent);
		}
	}
}

