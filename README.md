# TRICKvial MORTsuit

## Description

When we sat down to bounce around ideas for what we wanted to work on for our first experience working as a group, we all liked the thought of doing a game of some kind, as we had dabbled in individually in the past. We then, during that discussion, saw that the list of public APIs included a Rick and Morty API. All of us being fans of the show, we proceeded to discuss the concept of making a Rick and Morty character trivia. We'd done our own quizzes in the past, but that was under stricter acceptance criteria. Now we had an oppurtunity to make one using our own user story and acceptance criteria; we could have some fun with it, and add more features, learning more about creating game-styled web development through direct experience along the way. It would also be something that we would each be more than happy to show off to friends and family, especially with those who are also fans of the show, unlike the last quiz we each did where the questions had to be about coding, and nobody we showed that to was understand anything. We learned what types of things we needed to prioritze; we initially scraped the thought of using any type of timer, because it wasn't a necessity for the quiz to function. We also got some valuable experience in working on a project with others, and how much different it can be from working on a project individually, and how mucher smoother things move when everyone is using proper coding practices and communication. 

##  Installation

N/A, it's a webpage.

## Usage

The webpage can be found [here](https://wolfspiderman.github.io/t-rick-vial-mort-suit/).

When the user loads the page, they will only see the header of the page, and a button that looks suspiciously like some cheap knock off of one of Rick's probably trademarked portals. When they press the start button, they will be presented with the first question of the quiz, and its accompanying character card, and a time stamp will be reccorded in the background. All of the information and images displayed on the character cards come from the Rick and Morty API. For approximately half of the questions, some information will be intitially removed from the character card, as not to give away the answer. When the user selects their answer, they will be told whether they are correct, and if wrong, told what the correct answer is. If they are incorrect on a computer screen, they will also be mocked with a random insult from the Insult API. If the user is correct, another time stamp will be recorded and compared to the first to calculate the user's score for the question, and then added to their total score. Finally, the information that may have been removed from the character card will also be restored. When the user is ready to move on to the next question, there is a "Next" button under the result text. Once the user answers all 20 questions, they will be presented with a different message based on how well they did, and their score. When they press "Next", they will be presented with a modal prompting them to input their name. When they submit their name, their name and score will be added to their local storage and they will be presented with a high scores screen that includes the new entry and all previously saved names and scores, in order of highest score to lowest.

The following is a screenshot of the page in the middle of the quiz:

<img src="./assets/images/trickvialmortsuit.png" alt="screenshot of Rick and Morty character trivia webpage" style="display: block; margin: 0; max-width: 300px;">
    
## cited-sources
1. https://rickandmortyapi.com
2. https://insult.mattbas.org/api/
3. https://codepen.io/nicktayloruk/pen/MWaxMEN
4. https://tailwindcss.com/docs/installation/play-cdn

## Upcoming Developments

Adding bonus question(s) that are non-multiple choice, such as a drag-n-drop 'put them in the right order' type questions. Making high scores public. Changing how points are earned; earned more points for quicker answers, rather than only for correct answers.
