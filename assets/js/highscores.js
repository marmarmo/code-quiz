// pulling up stored higscores list
var highScores = document.querySelector("#highscoresList");
// query selector for clear scores
var clear = document.querySelector("#clear");
// query selector for go back
var goBack = document.querySelector("#goBack");



// retrieves all scores from local storage
var allScores


// event listener to clear score
clear.addEventListener("click", reset); {
	localStorage.clear();
	location.reload();
};

// event listener click go back button
goBack.addEventListener("click", function () {
	window.location.replace("./index.html")
});
