// packages
const readlineSync = require("readline-sync");
const chalk = require('chalk');


let score = 0;

// highscore array
const highScore = [
  {
    name: "Aman",
    score: 10
  },
  {
    name: "Stark",
    score: 8
  },
  {
    name: "Rogers",
    score: 4
  }
];

// questions array
const questions = [
  {
    question: `Who's my favourite superhero?
    (a) Ironman
    (b) Batman
    (c) Hulk
    `,
    answer: "a"
  },
  {
    question: `What's my favourite cinematic universe?
    (a) DC
    (b) Marvel
    (c) StarWars
    `,
    answer: "b"
  },
  {
    question: `What's my favourite comedy show?
     (a) FRIENDS 
     (b) Key and Peele
     (c) The Office
    `,
    answer: "c"
  },
  {
    question: `Who's my birthday twin?
     (a) RDJ
     (b) Chris Hemsworth
     (c) Josh Brolin
    `,
    answer: "a"
  },
  {
    question: `Where was I born?
     (a) Bhopal
     (b) Indore
     (c) Rewa
    `,
    answer: "c"
  }
];

const player = readlineSync.question("What's your name? ");
console.log(`\nWelcome to the quiz ${player}!`);

// play function
function play(question, answer) {
  let userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("Nice! That's correct.");
    score = score + 2;
  } else {
    console.log("oops! That's a wrong answer.");
  }

  console.log("Your current score is: ", score);
  console.log("\n========\n")
}

// loop for play function
for (let i = 0; i < questions.length; i++) {
  currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("Your total score is: ", score);
console.log("\n========\n");

console.log("Below are the highscores of other players. If you've beaten it, send me the screenshot.\n")

// loop for displaying highscores
for (let i = 0; i < highScore.length; i++) {
  currentHighScore = highScore[i];
  console.log(currentHighScore.name, currentHighScore.score);
}

console.log("\n========\n");
console.log("\nThank you for taking this quiz! :)");