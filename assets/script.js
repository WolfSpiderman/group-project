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

fetch(requestCharAll)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    for (i = 0; i < data.length; i++) {
        var charInfo = [data[i].image, data[i].name, data[i].status, data[i].species, data[i].type, data[i].origin.name, data[i].location.name];
        console.log(charInfo);
        charCards.setAttribute("src", charInfo[0]);
    }
});
//list of questions to use in questionH2

    //joshua working on these and api calls

// 1. Abradolf Lincler 2. Arthricia 3. Birdperson 4. Crocubot 5. Ice-T 6. King Flippy Nips 7. Krombopulos Micheal 8. Mr Poopybutthole
// 9. Regular Legs 10. Revolio Clockberg Jr. 11. Scary Terry 12. Shrimply Pibbles 13. Zeep Xanflorp 14. Fascist Teddy Bear Rick 
// 15. Vermigurber 16. Balthromaw 17. Glockenspiel Morty 18. Mr. Always-Wants-To-Be-Hunted 19. Planetina 20. Sticky

var questionList = [
    {
        question: "Abradolf Lincler died getting what for Rick?",
        choices: ["a. The Emancipation Proclamation", "b. The Ark of The Convenent", "c. Kalaxian Crystals", "d. Portal Tree Seeds"],
        answer: "c"
    },
    {
        question: "What annual event was going on when Rick and Morty met Arthricia?",
        choices: ["a. Cat Nip Fever", "b. The Purge", "c. Catnap Savings", "d. The Witch Hunt"],
        answer: "b"
    },
    {
        question: "Where did Rick and Birdperson meet?",
        choices: ["a. Bird World", "b. Birding Man", "c. The Battle of Blood Ridge", "d. The NX-5, brought to you by Wrangler"],
        answer: "b"
    },
    {
        question: "Who does Rick describe as 'half cold, unfeeling reptile, half also cold, euqally unfeeling machine'?",
        choices: ["a. Gatorbot", "b. Robosnake", "c. Crocubot", "d. Mechamamba"],
        answer: "C"
    },
    {
        question: "Where do we last see Ice-T?",
        choices: ["a. The Grammy's", "b. Snacking on Fig Newtons", "c. In the studio with Rick", "d. Alphabetrium"],
        answer: "d"
    },
    {
        question: "King FLippy Nips is the king of which planet?",
        choices: ["a. Pluto", "b. Forbodulon Prime", "c. Venzenulon-7", "d. Saturn"],
        answer: "a"
    },
    {
        question: "What alien race is Krombopulos Micheal?",
        choices: ["a. Gazorpazorpians", "b. Gromflomite", "c. Traflorkian", "d. Krootabulan"],
        answer: "b"
    },
    {
        question: "Why did beth shoot Mr. Poopybutthole?",
        choices: ["a. He shot first", "b. She didn't have any bad memories of him", "c. She missed her intended target", "d. She was brainwashed"],
        answer: "b"
    },
    {
        question: "What is Regular Legs superpower?",
        choices: ["a. Being able to jump almost high enough to dunk", "b. Being tall enough to reach things at the store", "c. The speed of a person with normal sized legs", "d. all of the above"],
        answer: "d"
    },
    {
        question: "What is Gear-Head's real name?",
        choices: ["a. Zinc Zuckbot", "b. Bill Williamson", "c. Locomotive 'Loki' Jenkins", "d. Revolio Clockberg Jr"],
        answer: "d"
    },
    {
        question: "What turned out to be Scary Terry's weakness",
        choices: ["a. Laughing", "b. Running", "c. Crying", "d. Hiding"],
        answer: "d"
    },
    {
        question: "What is in the atmosphere on Shrimply Pibbles' home planet",
        choices: ["a. Heroin", "b. Methane-phetamines", "c. Neon", "d. Chlorine"],
        answer: "a"
    },
    {
        question: "Which layer did was Zeep Xanflorp from",
        choices: ["a. Microverse", "b. Miniverse", "c. Tinyverse", "d. Teenyverse"],
        answer: "a"
    },
    {
        question: "What type of Rick is this?",
        choices: ["a. Clone", "b. Alternate Dimension Version", "c. Decoy", "d. Robot"],
        answer: "b"
    },
    {
        question: "How many kids does Vermigurber claim to have?",
        choices: ["a. 200,000", "b. 400,000", "c. 800,000", "d. 1,000,000"],
        answer: "c"
    },
    {
        question: "Balthromaw soul-bonded with?",
        choices: ["a. Rick", "b. Morty", "c. Summer", "d. All of the above, plus 6 other dragons all at once"],
        answer: "d"
    },
    {
        question: "What type of Morty is this?",
        choices: ["a. Clone", "b. Alternate Dimension version", "c. Decoy", "d. Robot"],
        answer: "c"
    },
    {
        question: "Why does Mr. Always-Wants-To-Be-Hunted want to be hunted?",
        choices: ["a. He requires adrenaline to survive", "b. To achieve an orgasmic afterlife", "c. To eventually acquire bullet immunity", "d. Nobody knows."],
        answer: "d"
    },
    {
        question: "Who was the villain Planetina showed up to fight when she met Morty?",
        choices: ["a. Methape", "b. Pollutatron", "c. Oil Boil", "d. Diesel Weasel"],
        answer: "d"
    },
    {
        question: "Where did sticky come from",
        choices: ["a. Morty's testicles", "b. Space dicks", "c. A Deshrinking experiment gone wrong", "d. Zues"],
        answer: "a"
    },

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


