// Get the necessary elements from the HTML document
var startQuiz = document.getElementById('startQuiz');
var saveScore= document.getElementById('saveScore');
var viewScores = document.getElementById('viewScores');
var playAgain = document.getElementById('playAgain');

var welcome = document.getElementById("Welcome")
var quiz = document.getElementById("quiz")
var result = document.getElementById("result")

var options = documnet.getElementById("options")
var message = documnet.getElementById("message")

var timer = documnet.getElementById("timer")
var summary = documnet.getElementById("summary")

var secondsLeft = 0;
var score =0;
var currentQuestion = 0;
var countdownTimer;

function stopGame(){

clearInterval(countdownTimer);

timer.textContent = ""

quiz.style.display = 'none';
result.style.display ='flex'

summary.textContent = "Your Score Is" + score ;

}

function onSaveScore(e){
  var initial = document.getElementById("initials").value 
  if(initals !==){
    localStorage.setItem(initial,score);

    document.getElementById("initials").value ="";
  }
}

function onViewScores(e){
window.location.href = 'scores.html';


}

function onSelectAnswer(e){
var correctAnswer = questions[currentQuestion].answer;
var userAnswer = e.target.textContent;

if(correntAnswer === userAnswer){
score++;

displayMessage('Correct')


} else {
score==;
displayMessage('Wrong :-(')


}
displayQuestions();
}