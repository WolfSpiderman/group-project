var requestCharAll = "https://rickandmortyapi.com/api/character/[703,388,321,7,26,47,81,162,192,279,282,306,196,726,562,543,507,717,244,696]";
var insultURL = "https://insult.mattbas.org/api/insult.json";
var insult = "";
//start button
var startBtn = document.querySelector("#startBtn");
//hidden game card 
var gameCard = document.querySelector("#question-card");
//hidden score card
var scoreCard = document.querySelector("#score-card");
var startCard = document.querySelector("#home-page");
//display image cards here
var charCards = document.querySelector(".charCard");
//display answer options/button
var answerBtn1 = document.querySelector("#btn1");
var answerBtn2 = document.querySelector("#btn2");
var answerBtn3 = document.querySelector("#btn3");
var answerBtn4 = document.querySelector("#btn4");

var cardImg = document.querySelector("#cardImg");
var cardName = document.querySelector("#cardName");
var cardStatus = document.querySelector("#cardStatus");
var cardType = document.querySelector("#cardType");
var cardSpecies = document.querySelector("#cardSpecies");
var cardOrigin = document.querySelector("#cardOrigin");
var cardLast = document.querySelector("#cardLast");

// var results = document.querySelector("#results");
var resultText = document.querySelector("#result-text");

var endMsg = document.querySelector("#endMsg");

//list of questions to use in questionH2

    //joshua working on these and api calls

// 1. Abradolf Lincler 2. Arthricia 3. Birdperson 4. Crocubot 5. Ice-T 6. King Flippy Nips 7. Krombopulos Micheal 8. Mr Poopybutthole
// 9. Regular Legs 10. Revolio Clockberg Jr. 11. Scary Terry 12. Shrimply Pibbles 13. Zeep Xanflorp 14. Fascist Teddy Bear Rick 
// 15. Vermigurber 16. Balthromaw 17. Glockenspiel Morty 18. Mr. Always-Wants-To-Be-Hunted 19. Planetina 20. Sticky

var questionList = [
    {
        question: "Abradolf Lincler sacrificed himself getting what for Rick?",
        choices: ["a. The Emancipation Proclamation", "b. The Ark of The Convenent", "c. Kalaxian Crystals", "d. Portal Tree Seeds"],
        answer: "c. Kalaxian Crystals" 
    },
    {
        question: "What annual event was going on when Rick and Morty met Arthricia?",
        choices: ["a. Cat Nip Fever", "b. The Purge", "c. Catnap Savings", "d. The Witch Hunt"],
        answer: "b. The Purge"
    },
    {
        question: "Where did Rick and Birdperson meet?",
        choices: ["a. Bird World", "b. Birding Man", "c. The Battle of Blood Ridge", "d. The NX-5, brought to you by Wrangler"],
        answer: "b. Birding Man"
    },
    {
        question: "Who does Rick describe as 'half cold, unfeeling reptile, half also cold, equally unfeeling machine'?",
        choices: ["a. Gatorbot", "b. Robosnake", "c. Crocubot", "d. Mechamamba"],
        answer: "c. Crocubot" // hide name and image
    },
    {
        question: "Where do we last see Ice-T?",
        choices: ["a. The Grammy's", "b. Snacking on Fig Newtons", "c. In the studio with Rick", "d. Alphabetrium"],
        answer: "d. Alphabetrium"
    },
    {
        question: "King FLippy Nips is the king of which planet?",
        choices: ["a. Pluto", "b. Forbodulon Prime", "c. Venzenulon-7", "d. Saturn"],
        answer: "a. Pluto" //hide both locations
    },
    {
        question: "What alien race is Krombopulos Micheal?",
        choices: ["a. Gazorpazorpians", "b. Gromflomite", "c. Traflorkian", "d. Krootabulan"],
        answer: "b. Gromflomite" //hide type 
    },
    {
        question: "Why did beth shoot Mr. Poopybutthole?",
        choices: ["a. He shot first", "b. She didn't have any bad memories of him", "c. She missed her intended target", "d. She was brainwashed"],
        answer: "b. She didn't have any bad memories of him"
    },
    {
        question: "What is Regular Legs superpower?",
        choices: ["a. Being able to jump almost high enough to dunk", "b. Being tall enough to reach things at the store", "c. The speed of a person with normal sized legs", "d. all of the above"],
        answer: "d. all of the above"
    },
    {
        question: "What is Gear-Head's real name?",
        choices: ["a. Zinc Zuckbot", "b. Bill Williamson", "c. Locomotive 'Loki' Jenkins", "d. Revolio Clockberg Jr"],
        answer: "d. Revolio Clockberg Jr" //hide name
    },
    {
        question: "What turned out to be Scary Terry's weakness",
        choices: ["a. Laughing", "b. Running", "c. Crying", "d. Hiding"],
        answer: "d. Hiding"
    },
    {
        question: "What is in the atmosphere on Shrimply Pibbles' home planet",
        choices: ["a. Heroin", "b. Methane-phetamines", "c. Neon", "d. Chlorine"],
        answer: "a. Heroin"
    },
    {
        question: "Which layer did was Zeep Xanflorp from",
        choices: ["a. Microverse", "b. Miniverse", "c. Tinyverse", "d. Teenyverse"],
        answer: "a. Microverse" // hide type and both locations
    },
    {
        question: "What type of Rick is this?",
        choices: ["a. Clone", "b. Alternate Dimension Version", "c. Decoy", "d. Robot"],
        answer: "b. Alternate Dimension Version" // hide type, species, and both locations
    },
    {
        question: "How many kids does Vermigurber claim to have?",
        choices: ["a. 200,000", "b. 400,000", "c. 800,000", "d. 1,000,000"],
        answer: "c. 800,000"
    },
    {
        question: "Balthromaw soul-bonded with?",
        choices: ["a. Rick", "b. Morty", "c. Summer", "d. All of the above, plus 6 other dragons all at once"],
        answer: "d. All of the above, plus 6 other dragons all at once"
    },
    {
        question: "What type of Morty is this?",
        choices: ["a. Clone", "b. Alternate Dimension version", "c. Decoy", "d. Robot"],
        answer: "c. Decoy" // hide type, species, and locations
    },
    {
        question: "Why does Mr. Always-Wants-To-Be-Hunted want to be hunted?",
        choices: ["a. He requires adrenaline to survive", "b. To achieve an orgasmic afterlife", "c. To eventually acquire bullet immunity", "d. Nobody knows."],
        answer: "d. Nobody knows."
    },
    {
        question: "Who was the villain Planetina showed up to fight when she met Morty?",
        choices: ["a. Methape", "b. Pollutatron", "c. Oil Boil", "d. Diesel Weasel"],
        answer: "d. Diesel Weasel"
    },
    {
        question: "Where did sticky come from",
        choices: ["a. Morty's testicles", "b. Space dicks", "c. A Deshrinking experiment gone wrong", "d. Zues"],
        answer: "a. Morty's testicles" // hide type and origin
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

  
    // to hide result div
    //  use for insult api
    function hideResultText() {
      results.style.display = "none";
    }

  
var currentQuestion = 0;
var score = document.querySelector("#score");
var points;
document.querySelector("#startBtn").addEventListener("click", startQuiz);

function init(){
    hideCards();
  startCard.removeAttribute("hidden");
}

function startQuiz(){
    hideCards();
    gameCard.removeAttribute("hidden");
    gameCard.setAttribute("display", "flex");

    console.log(questionList);
    currentQuestion = 0;
    points = 0;
    displayQuestion();
    
}

  
  //display the question and answer options for the current question
function displayQuestion() {
    let question = questionList[currentQuestion];
    let options = question.choices;
  
   //display questions here
    let questionH2 = document.querySelector(".question");
    questionH2.textContent = question.question;
  
    fetch(requestCharAll)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var charInfo = [data[currentQuestion].image, data[currentQuestion].name, data[currentQuestion].status, data[currentQuestion].type, data[currentQuestion].species, data[currentQuestion].origin.name, data[currentQuestion].location.name];
        console.log(charInfo);
        cardImg.setAttribute("src", charInfo[0]);
        if (currentQuestion[3]) {cardImg.setAttribute("hidden", true)};
        cardName.textContent = charInfo[1];
        if (currentQuestion[3] || currentQuestion[9]) {cardName.setAttribute("hidden", true)};
        cardStatus.textContent = charInfo[2];
        cardType.textContent = charInfo[3];
        if (currentQuestion[6] || currentQuestion[12] || currentQuestion[13]|| currentQuestion[16] || currentQuestion[19]) {cardType.setAttribute("hidden", true)};
        cardSpecies.textContent = charInfo[4];
        if (currentQuestion[6] || currentQuestion[13] || currentQuestion[16]) {cardSpecies.setAttribute("hidden", true)};
        cardOrigin.textContent = charInfo[5];
        if (currentQuestion[5] || currentQuestion[12] || currentQuestion[13] || currentQuestion[16]) {cardOrigin.setAttribute("hidden", true)};
        cardLast.textContent = charInfo[6];
        if (currentQuestion[5] || currentQuestion[12] || currentQuestion[13] || currentQuestion[16] || currentQuestion[19]) {cardLast.setAttribute("hidden", true)};
});

    for (let i = 1; i <= options.length; i++) {
      let option = options[(i-1)];
      let optionButton = document.querySelector("#btn" + i);
      optionButton.textContent = option;
    }
}
  
  
document.addEventListener("click", checkAnswer);
  
  //Compare text content of button pressed with that of the current question 
function optionRight(optionButton) {
    return optionButton.textContent === questionList[currentQuestion].answer;
}
  
  //if answer wrong subtract 10seconds, show wrong or right in results div
function checkAnswer(eventObject) {
    let optionButton = eventObject.target;
    results.style.display = "block";
    if (!optionButton.matches(".answerBtn")) return; 

    if (optionRight(optionButton)) {
      resultText.textContent = "Correct!";
      [].forEach.call(charCards.querySelectorAll("hidden"),function(e){
        e.removeAttribute("hidden");
      });
      points++;
    } else {
        fetch(insultURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        resultText.textContent = "Incorrect! " + data.insult + "!";
    });
      [].forEach.call(charCards.querySelectorAll("hidden"),function(e){
        e.removeAttribute("hidden");
      });
    }

  
    
    currentQuestion++;
    console.log(points + "/" + currentQuestion);
    finalScore = points + "/" + currentQuestion;
    if (currentQuestion < questionList.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
}


function endQuiz() {
    hideCards();
    scoreCard.removeAttribute("hidden");
    if (points > 17) {
        endMsg.textContent = "Wow. I'd be lying if I said I was impressed, but you still did way better than I would've predicted. Nice job, I guess!";
    } else if (points > 9) {
        endMsg.textContent = "Could've been worse, I guess. About the same level of competency I expect from Morty.";
    } else {
        endMsg.textContent = "Man, you're dumb. You might even be dumber than JERRY! What are you even doing here? Go learn some shit!"
    }
    score.textContent = finalScore;
}

init();