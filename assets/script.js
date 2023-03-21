var requestCharAll = "https://rickandmortyapi.com/api/character/[703,388,321,7,26,47,81,162,192,279,282,306,196,726,562,543,507,717,548,696]";
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
function startQuiz(){
    hideCards();
    questionCard.removeAttribute("hidden");

  
    currentQuestion = 0;
    points = 0;
    displayQuestion();

  
    time = 60;
    //set function for countdown in seperate function,called here
    timerInterval = setInterval(countdown, 1000);

  
    displayTime();
}

function hideCards(){
    
}

fetch(requestCharAll)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
});