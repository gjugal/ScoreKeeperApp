var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");

var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");

var p1Score = 0;
var p2Score = 0;

var winningScore = 5;
var gameOver = false;
/*
function onButtonClicked(button){
	alert("Button Clicked!!");
}
*/

p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		p1Display.textContent = p1Score;
		if(p1Score == winningScore){
			alert("GameOver!!");
			gameOver = true;
		}
	}	
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		p2Display.textContent = p2Score;
		if(p1Score == winningScore){
				alert("GameOver!!");
				gameOver = true;
			}
	}	
});