let computerNb = Math.floor(Math.random() * 20);
let userNb = 0;
let score = 10;

let totalScore = document.querySelector('.total_score');
let infoMsg = document.querySelector('.displayer');

const userBtn = document.querySelector('.user_btn');
const userInput = document.querySelector('.user');

userBtn.addEventListener('click', () => {
  userNb = userInput.value;
  if (userNb > 20) {
    infoMsg.innerHTML = '20 max please !';
    infoMsg.style.color = 'crimson';
  } else {
    whoWins(computerNb, userNb);
  }
});

function whoWins(prog, user) {
  if (user < prog) {
    updateScore(1);
  } else if (user > prog) {
    updateScore(2);
  } else {
    infoMsg.innerHTML = 'You win !';
    document.querySelector('.highest_score').innerHTML = score;
  }
  console.log('score =' + score);
}

function updateScore(int) {
  score -= 1;
  totalScore.innerHTML = score;
  infoMsg.style.color = '#EEC13A';
  if (int == 1) {
    infoMsg.innerHTML = 'Too low !';
  } else if (int == 2) {
    infoMsg.innerHTML = 'Too High !';
  }
}

function reset() {
  userNb = 0;
  score = 10;
  computerNb = Math.floor(Math.random() * 20);
  infoMsg.innerHTML = 'Start playing...';
  infoMsg.style.color = '#fff';
  totalScore.innerHTML = 10;
  userInput.value = '';
}

const restartBtn = document.querySelector('.restart');
restartBtn.addEventListener('click', () => {
  reset();
});
