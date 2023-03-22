var requestCharAll = "https://rickandmortyapi.com/api/character/[703,388,321,7,26,47,81,162,192,279,282,306,196,726,562,543,507,717,244,696]";
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
function startQuiz(){
    
}

