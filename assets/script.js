var startBtn = document.querySelector("#startBtn");

//display questions here
var questionH2 = document.querySelector(".question");

//display image cards here
var charCards = document.querySelector("#charCard");

//display answer options/button
var answerBtn1 = document.querySelector("#btn1");
var answerBtn2 = document.querySelector("#btn2");
var answerBtn3 = document.querySelector("#btn3");
var answerBtn4 = document.querySelector("#btn4");

//list of questions to use in questionH2
var questionList = [
    {
        question: "What planet is this character from?",
        choices: ["a. Earth", "b. ", "c. "],
        answer: "a"
    }
];

//game functionality
function startQuiz(){
    
}

//request for Rick and morty API (joshua has done work on this)
var requestUrl = 'https://rickandmortyapi.com/api';

