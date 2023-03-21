var requestCharAll = "https://rickandmortyapi.com/api/character/[703,388,321,7,26,47,81,162,192,279,282,306,196,726,562,543,507,717,548,696]";
//start button
var startBtn = document.querySelector("#startBtn");
//hidden game card 
var gameCard = document.querySelector("#question-card");
//hidden score card
var scoreCard = document.querySelector("#score-card");

//display image cards here
var charCards = document.querySelector("#charCard");
//display answer options/button
var answerBtn1 = document.querySelector("#btn1");
var answerBtn2 = document.querySelector("#btn2");
var answerBtn3 = document.querySelector("#btn3");
var answerBtn4 = document.querySelector("#btn4");

//list of questions to use in questionH2
    //joshua working on these and api calls
var questionList = [
    {
        question: "What planet is this character from?",
        choices: ["a. Earth", "b. ", "c. "],
        answer: "a"
    }

    {
        question: "What planet is this character from?",
        choices: ["a. Earth", "b. ", "c. "],
        answer: "a"
    }

    {
        question: "What planet is this character from?",
        choices: ["a. Earth", "b. ", "c. "],
        answer: "a"
    }

    {
        question: "What planet is this character from?",
        choices: ["a. Earth", "b. ", "c. "],
        answer: "a"
    }

    {
        question: "What planet is this character from?",
        choices: ["a. Earth", "b. ", "c. "],
        answer: "a"
    }

    {
        question: "What planet is this character from?",
        choices: ["a. Earth", "b. ", "c. "],
        answer: "a"
    }

    {
        question: "What planet is this character from?",
        choices: ["a. Earth", "b. ", "c. "],
        answer: "a"
    }

];

//game functionality

//Acceptance Criteria: 

       // GIVEN I'm taking the ultimate Rick and Morty quiz
       // WHEN I load the webpage
       // THEN the game's welcome/cover page appears
       // WHEN I press start
       // THEN the game page appears with the first question 
       // WHEN one question is answered
       // THEN another question appears 
       // WHEN a player gets a question wrong or right
       // THEN the scores are incremented and decremented
       // WHEN the game is over
       // THEN the scoreboard page appears
       // WHEN on scoreboard page
       // THEN player can view their score

//to hide all cards
function hideCards() {
    startCard.setAttribute("hidden", true);
    gameCard.setAttribute("hidden", true);
    scoreCard.setAttribute("hidden", true);
}
  
  //function below can be used for META MVP
  //for linking data from MEME API 
  //to display joke to hassle users for wrong answers
  //no corresponding div in index file atm

    //var results = document.querySelector("#results");
    //var resultText = document.querySelector("#result-text");
  
    //to hide result div
    //function hideResultText() {
      //results.style.display = "none";
    //}
  
  
var timerInterval;
var time;
var currentQuestion;
var score = document.querySelector("#score");
var points;
document.querySelector("#startBtn").addEventListener("click", startQuiz);

function startQuiz(){
    hideCards();
    gameCard.removeAttribute("hidden");

  
    currentQuestion = 0;
    points = 0;
    displayQuestion();

    //5 min to finish game (?)
    time = 300;
    //set function for countdown in seperate function,called here
    timerInterval = setInterval(countdown, 1000);

  
    displayTime();
}

function countdown() {
    time--;
    displayTime();
    if (time < 1) {
      endQuiz();
    }
}
  
  //display time on page if you want for META MVP
//var timeDisplay = document.querySelector("#time");
//function displayTime() {
  //  timeDisplay.textContent = time;
//}
  
  //display the question and answer options for the current question
function displayQuestion() {
    let question = questionList[currentQuestion];
    let options = question.options;
  
   //display questions here
    let questionH2 = document.querySelector(".question");
    questionH2.textContent = question.question;
  
    for (let i = 0; i < options.length; i++) {
      let option = options[i];
      let optionButton = document.querySelector("#btn" + i);
      optionButton.textContent = option;
    }
}
  
  
document.querySelector("#btn").addEventListener("click", checkAnswer);
  
  //Compare text content of button pressed with that of the current question 
function optionRight(optionButton) {
    return optionButton.textContent === questionList[currentQuestion].answer;
}
  
  //if answer wrong subtract 10seconds, show wrong or right in results div
function checkAnswer(eventObject) {
    let optionButton = eventObject.target;
    results.style.display = "block";
    if (optionRight(optionButton)) {
      //resultText.textContent = "Correct!";
      setTimeout(hideResultText, 1000);
      points++;
    } else {
      //resultText.textContent = "Incorrect!";
      setTimeout(hideResultText, 1000);
      if (time >= 10) {
        time = time - 10;
        displayTime();
      } else {
        time = 0;
       // displayTime();
        endQuiz();
      }
    }
  
    
    currentQuestion++;
    
  
    if (currentQuestion < questionList.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
}

function endQuiz() {
    clearInterval(timerInterval);
    hideCards();
    scoreCard.removeAttribute("hidden");
    score.textContent = score;
}


fetch(requestCharAll)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
});