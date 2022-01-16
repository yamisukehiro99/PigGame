"use strict";

// Variables Declaration
const left = document.querySelector('.left');
const right = document.querySelector('.right');
let leftSpan = document.querySelector('.left-span');
let rightSpan = document.querySelector('.right-span');
const newGame = document.querySelector('.new-game');
const roll = document.querySelector('.roll');
const hold = document.querySelector('.hold');
const dice = document.querySelector('.dice');
const again = document.querySelector('.again');
const currentSpanLeft = document.querySelector('.current-span-left');
const currentSpanRight = document.querySelector('.current-span-right');
const winner = document.querySelector('.winner');
let turn = 0;
leftSpan.textContent = 0;
rightSpan.textContent = 0;
let rightCurrent = 0, leftCurrent = 0, playerOne = 0, playerTwo = 0;

roll.addEventListener('click', function() {
  dice.classList.remove('hidden')
  let randomNum = Math.ceil(Math.random() * 6);
  if(randomNum == 1 && turn % 2 == 0) {
    dice.textContent = randomNum;
    leftCurrent = 0
    currentSpanLeft.textContent = leftCurrent;
    turn++;
    left.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    right.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  }
  else if(randomNum == 1 && turn % 2 != 0) {
    dice.textContent = randomNum;
    rightCurrent = 0;
    currentSpanRight.textContent = rightCurrent;
    turn++;
    left.style.backgroundColor = "rgba(255, 255, 255, 0.5)"
    right.style.backgroundColor = "rgba(255, 255, 255, 0.2)"
  }
  else if(turn % 2 == 0) {
    dice.textContent = randomNum;
    leftCurrent += randomNum
    currentSpanLeft.textContent = leftCurrent;
    left.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    right.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
  }
  else {
    dice.textContent = randomNum;
    rightCurrent += randomNum;
    currentSpanRight.textContent = rightCurrent;
    left.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    right.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  }
})
function resetGame() {
  dice.classList.add('hidden');
  left.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
  right.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
  rightCurrent = 0;
  leftCurrent = 0;
  currentSpanRight.textContent = 0;
  currentSpanLeft.textContent = 0;
  rightSpan.textContent = 0;
  leftSpan.textContent = 0;
  playerOne = 0;
  playerTwo = 0;
  winner.classList.add('hidden');
  again.classList.add('hidden');
}
hold.addEventListener('click', function() {
  if(turn % 2 == 0) {
    playerOne += leftCurrent;
    leftSpan.textContent = playerOne;
    if(playerOne >= 100) {
      winner.textContent = `✨🎊🎉 Player One Has Reached 100 🎉🎊✨`;
      winner.classList.remove('hidden');
      again.classList.remove('hidden');
    }
    left.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    right.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    leftCurrent = 0;
    currentSpanLeft.textContent = leftCurrent;
    turn++;
  }
  else {
    playerTwo += rightCurrent;
    rightSpan.textContent = playerTwo;
    if(playerTwo >= 100) {
      winner.textContent = `✨🎊🎉 Player Two Has Reached 100 🎉🎊✨`;
      winner.classList.remove('hidden');
      again.classList.remove('hidden');
    }
    left.style.backgroundColor = "rgba(255, 255, 255, 0.5)"
    right.style.backgroundColor = "rgba(255, 255, 255, 0.2)"
    rightCurrent = 0;
    currentSpanRight.textContent = rightCurrent;
    turn++;
  }
})
again.addEventListener('click', function() {
  resetGame();
})

newGame.addEventListener('click', function() {
  resetGame();
})