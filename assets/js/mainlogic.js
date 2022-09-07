// start button variables
var startScreen = document.querySelector("#starting-screen");
var startButton = document.querySelector(".button");
var timerElement = document.querySelector("#quizTimer");

// questions variables
var questionsContainer = document.getElementById("questions-screen");
var checkAnswer = document.getElementById("answer-check");
// var question = quizQuestions[index].question;
var answerChoiceDiv = document.querySelector(".answer-choices");
var questionTextDiv = document.querySelector(".question-text");
// submit score buttons
var initials = document.querySelector("#initials");
var submitScoreBtn = document.querySelector('#submitBtn');
var currentScoreDiv = document.querySelector(".currentScore");
const form = document.getElementById("initialsForm");
var initialsText = document.querySelector(".initialsText")


var timerCount = 60;
var index = 0;
var userScore = 0;
var scoreText;
var questionsIndexCounter = 0;

var quizQuestions = [
  {
    question: "What is NOT a JavaScript Data Type?",
    choices: ["String", "Object", "inIt", "Boolean"],
    answer: "inIt",
  },
  {
    question: "If x = 25 and y = 50, which is true?",
    choices: ["x = y", "x < y", "x > y ", "x++"],
    answer: "x < y",
  },
  {
    question: "An if / else statement is closed within:",
    choices: ["Curly brackets", "Square brackets", "Quotes", "Parentheses"],
    answer: "Parentheses",
  },
  {
    question: "The console.log is used for:",
    choices: ["Event Listeners", "debugging", "For Loops", "Datasets"],
    answer: "debugging",
  },
  {
    question: "What is an example of an eventListener triggering event?",
    choices: ["Array", "Button", "Dataset", "click"],
    answer: "click",
  },
  {
    question: "What are the types of popup boxes available in JavaScript?",
    choices: ["Alert", "Confirm", "Prompt", "All of the above"],
    answer: "All of the above",
  },
];

// click start button and starts game
startButton.addEventListener("click", startGame);

// start game function
function startGame() {
  startTimer();
}

function startTimer() {
  var timerInterval = setInterval(function () {
    if (timerCount >= 0) {
      timerElement.textContent = timerCount + " seconds left";
      timerCount--;
    } else {
      clearInterval(timerInterval);
    }
  }, 1000);

  getNextQuestion();
}


function getNextQuestion() {
	// add case where if were at the end it terminates
	if (questionsIndexCounter === 6) {
		questionsContainer.classList.add("hidden");
		return
	};
	// take current screen (start or a questions and hide it also display next screen)
	// if its the starting sceen thats visable we want it to take section class starting-screen and hide it 
	if (startScreen.classList.includes !== "hidden") {
		startScreen.classList.add("hidden");
	}
	
	// clear out any old question choices
	questionsIndexCounter.textContent = "";
	
	// get current question object from array
	var currentQuestion = quizQuestions[questionsIndexCounter];
	
	// update title with current question
	var questionH3 = document.createElement("h3");
	questionH3.textContent = currentQuestion.question;
	questionTextDiv.innerHTML = "";
	questionTextDiv.appendChild(questionH3);
	
	// empties content of answer choice div
	answerChoiceDiv.innerHTML = "";
	// looping over answer choices and turning each one into a button
	for (var i = 0; i < currentQuestion.choices.length; i++) {
		
		// create new button for each choice
		var choice = currentQuestion.choices[i];
		var choiceBtn = document.createElement('button');
		choiceBtn.setAttribute('class', 'choice');
		choiceBtn.setAttribute('value', choice);
		
		choiceBtn.textContent = choice;
		
		// display on the page
		answerChoiceDiv.appendChild(choiceBtn);
	}
	currentScore ();
	handleUserAnswer(currentQuestion);
	questionsIndexCounter++;
};



function handleUserAnswer(currentQuestion) {
	
	var choiceBtns = document.querySelectorAll(".choice");
	for (var i = 0; i < choiceBtns.length; i++) {
		choiceBtns[i].addEventListener("click", function (event) {
			// event listeners on our choicebtn elements - on click event listeners
			// if the textContent of user sected choicebtn is the same as the answer value currentQuestion.answer
			
			// if the text inside the button that was clicked is the right answer
			console.log(event.target.textContent);
			if (event.target.textContent === currentQuestion.answer) {
				// add to users score
				userScore += 10;
				console.log(userScore);
				currentScore();
				alert("Correct");
				
				// hide currentQuestions text/remove child
				questionTextDiv.removeChild(questionTextDiv.firstChild);
				while (questionTextDiv.hasChildNodes()) {
					questionTextDiv.removeChild(questionTextDiv.firstChild);
					// display next question (could call above function if seperate it off
				}
				// display next question
				if ((currentQuestion = quizQuestions[quizQuestions.length - 1])) {
				}
				// display scoreboard
			} else {
				timerCount -= 10;
				alert("Wrong");
			} 
			getNextQuestion();
		});
	}
}



function currentScore () {
	console.log(userScore);
	currentScoreDiv.textContent = "Score: " + userScore;
	localStorage.setItem
	("userScore", userScore);
}



// very last thing what happens when timer runs out?



function gameOver() {
	// game over will ppend last page
	questionTextDiv.innerHTML = "";
	answerChoiceDiv.innerHTML = "";
	timerElement.innerHTML = "";
	
};

function saveUserScores (event) {
	event.preventDefault();
	var inputValue = initialsText.value
	console.log(inputValue, userScore)
	// stores userscore to local storage hen submitting initials
	// localStorage.setItem("userScore", JSON. stringify(userScore));
	
};

form.addEventListener("submit", saveUserScores);








