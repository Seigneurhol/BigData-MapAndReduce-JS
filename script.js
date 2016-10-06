var mapArray = [];
var mapArrayShuffleAndSort = [];

function map() {
    var text = $('.text').text();
    var x = 0;
    var str = [];
    var tab = [];
    var j = 0;
    var check = false;
    var letters = /^[A-Za-z]+$/; //Regex to only obtain letters

    //Iterate all the text array
    for (var i = 0; i < text.length; i++) {
    	//Check if this is a letter to only keep letters
    	if (text[i].match(letters) || text[i] == "'") {
    		str = str + text[i]; //Add each letters to a string to have the full word 
    	}
    	//When we have a word it add it to the mapArray
    	else {
    		//Check str length to avoid adding an empty string
    		if (str.length != 0) {

    			str = str.toLowerCase(); //Set the string in lower case to compare string

    			//Check if the string is already in the mapArray
    			for (var j = 0; j < mapArray.length; j++) {
    				if (mapArray[j][0] == str) {
    					mapArray[j][1].push(1); //Add 1 to the number array
    					check = true; //To avoid set the word twice in the mapArray
    				}
    			}

    			//If the string doesn't exist add the word in the mapArray
    			if (check == false) {
    				tab.push(str); //Add the word
    				tab.push([1]); //Add the array of 1
    				mapArray.push(tab); //Add them to the array
    				
    			}

    			str = []; //Reinitialize these two array and variable
    			tab = [];
    			check = false;
    		}
    	}
    }
}

function shuffleAndSort() {
	mapArray.sort();
}

function reduce () {
	for (var i = 0; i < mapArray.length; i++) {
		mapArray[i][1] = mapArray[i][1].length;
	}
}

function main() {
	map();
	$('.map').append("MAP : <br>");
	for (var i = 0; i < mapArray.length; i++) {
		$('.map').append("(" + mapArray[i][0] + ",[" + mapArray[i][1] + "]" + ") <br>");
	}
	shuffleAndSort();
	$('.shuffleandsort').append("SHUFFLE AND SORT : <br>");
	for (var i = 0; i < mapArray.length; i++) {
		$('.shuffleandsort').append("(" + mapArray[i][0] + ",[" + mapArray[i][1] + "]" + ") <br>");
	}
	reduce();
	$('.reduce').append("RESULT AFTER REDUCE : <br>");
	for (var i = 0; i < mapArray.length; i++) {
		$('.reduce').append(mapArray[i][0] + " " + mapArray[i][1] + "<br>");
	}
}