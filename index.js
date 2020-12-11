var readlineSync = require('readline-sync');

// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

var questions = [
  {
    Ques: 'What is my favourite programming language?',
    Ans: 'Javascript'
  },
  {
    Ques: 'What is my age?',
    Ans: "26"
  },
  {
    Ques: 'What is my instagram handle?',
    Ans: 'the.frontend.guy'
  },
  {
    Ques: 'What bootcamp am I trying to get into?',
    Ans: 'Neogcamp'
  },
  {
    Ques: 'Where am I from?',
    Ans: 'Aurangabad'
  }
]

console.log('\n------ START QUIZ --------\n');
console.log('Quiz: How well do you know me? (5 Questions)');

var score = 0;

for(let i = 0; i<questions.length; i++){
  let currentQuestion = questions[i].Ques;
  let currentAnswer = questions[i].Ans;
  var answer = readlineSync.question((i+1) + ". "+ currentQuestion + "\n" );

  if(currentAnswer.toUpperCase() == answer.toUpperCase()){
    console.log(">> Correct Answer");
    score++;
    console.log("+1 point\n");
  }
  else{
    console.log(">> Wrong Answer\n");
  }
}

console.log("You scored "+score+" points out of 5");