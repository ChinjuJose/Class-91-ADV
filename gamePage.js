var player1Score = 0;
var player2Score = 0;

var word; 

var player1Name = localStorage.getItem("player1Name");
var player2Name = localStorage.getItem("player2Name");

document.getElementById("player1Name").innerHTML = player1Name + ":";
document.getElementById("player2Name").innerHTML = player2Name + ":"; 

document.getElementById("player1Score").innerHTML = player1Score ;
document.getElementById("player2Score").innerHTML = player2Score ;

document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player1Name;
document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player2Name;

function sendWord() {
	var getWord = document.getElementById("word").value;
	word = getWord.toLowerCase();
	console.log("Word in lowerCase = " + word);

    charAt1 = word.charAt(1);
	console.log(charAt1);

	halfLength = Math.floor(word.length/2);
	charAt2 = word.charAt(halfLength);
	console.log(charAt2);

    lengthMinusOne = word.length - 1; 
    charAt3 = word.charAt(lengthMinusOne); 
	console.log(charAt3);

    removeCharAt1 = word.replace(charAt1, "_");
    removeCharAt2 = removeCharAt1.replace(charAt2, "_");
    removeCharAt3 = removeCharAt2.replace(charAt3, "_");
	console.log(removeCharAt3);

    var questionWord = "<h4 id='wordDisplay'> Q. "+removeCharAt3+"</h4>";
    var inputBox = "<br>Answer: <input type='text' id='inputBox'>";
    var checkButton = "<br><br><button class='btn btn-info' onclick='check()'> Check </button>";
    var row =  questionWord + inputBox + checkButton ; 
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}




