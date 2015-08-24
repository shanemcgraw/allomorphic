function shortStory(textArray){
	this.title = textArray[0];
	this.author = textArray[1];
	this.dateWritten = textArray[2];
}

function createArrOfObs(textArr){
    var arrOfObs = [];
    
    textArr.forEach(
    function(x){
    var o = new shortStory(x);
    arrOfObs.push(o);
    }
    );
    return arrOfObs;
    
}


