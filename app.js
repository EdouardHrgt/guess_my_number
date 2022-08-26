const restartBtn = document.querySelector('.restart');

restartBtn.addEventListener('click', () => {
  alert(getRandomInt(20));
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let userNb = document.querySelector('#user');
userNb.addEventListener('input', () => {
  console.log(userNb.value);
});
