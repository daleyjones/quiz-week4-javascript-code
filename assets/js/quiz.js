const correctSound = new Audio('assets/css/mp3/Quiz-correct-sound-with-applause.mp3');
const wrongSound = new Audio('assets/css/mp3/Wrong-answer-sound-effect.mp3');

let startQuiz = document.getElementById('startQuiz');
let saveButton = document.getElementById('saveScore');
let viewScores = document.getElementById('viewScores');
let playAgain = document.getElementById('playAgain');

let quizIntro = document.getElementById('quiz-title');
let quiz = document.getElementById('quiz');
let result = document.getElementById('result');

let options = document.getElementById('options');
let message = document.getElementById('message');

let timer = document.getElementById('timer');
let summary = document.getElementById('summary');

let secondsLeft = 75;
let score = 0;
let currentQuestion = 0;
let countdownTimer;

function stopGame() {
  clearInterval(countdownTimer);
  timer.textContent = '';
  quiz.style.display = 'none';
  result.style.display = 'flex';
  summary.textContent = 'Your Score Is ' + score;
}

function onSaveScore(e) {
  let initials = document.getElementById('initials').value

  if (initials !== "") {
    localStorage.setItem(initials, score);
    document.getElementById("initials").value = "";
  }
}

function onViewScores(e) {
  window.location.href ="scores.html";
}

function onSelectAnswer(e) {
  let correctAnswer = questions[currentQuestion].answer;
  let userAnswer = e.target.textContent;

  if (correctAnswer === userAnswer) {
    score++;
    displayMessage('Correct');
    correctSound.play();
  } else {
    secondsLeft -= 5;
    displayMessage('Wrong :-(');
    wrongSound.play();
  }
  currentQuestion++;

  if (currentQuestion >= questions.length) {
    stopGame();

  } else {

    displayQuestion();
  };
}

function displayMessage(msg) {
  message.textContent = msg;

  setTimeout(() => {
    message.textContent = '';
  }, 1000);
}

function displayQuestion() {
  let questionArray = questions[currentQuestion];
  console.log(questionArray.question);
  document.getElementById('question-title').textContent = questionArray.question;

  options.innerHTML = '';

  for (let i = 0; i < questionArray.choices.length; i++) {
    let option = document.createElement('button');

    option.setAttribute("class","optionBtn")
    option.textContent = questionArray.choices[i];
    option.onclick = onSelectAnswer;

    options.appendChild(option);
  }
}

function onStartGame() {
  score =0;
  currentQuestion=0;

 countdownTimer = setInterval(() => {
    if (secondsLeft > 0) {
      secondsLeft--;
      timer.textContent = 'Time Left: ' + secondsLeft;
    } else {
      stopGame();
    }
  }, 1000);

  quizIntro.style.display = 'none';
  result.style.display = 'none';
  quiz.style.display = 'block';

  displayQuestion();
}

startQuiz.addEventListener('click', onStartGame);
saveButton.addEventListener('click', onSaveScore);
viewScores.addEventListener('click', onViewScores);
playAgain.addEventListener('click', onStartGame);
