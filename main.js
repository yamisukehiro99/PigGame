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
const currentSpanLeft = document.querySelector('.current-span-left')
const currentSpanRight = document.querySelector('.current-span-right')
let playerOne = 0;
let playerTwo = 0;
let turn = 0;
leftSpan.textContent = 0;
rightSpan.textContent = 0;
let rightCurrent = 0, leftCurrent = 0;
// left.style.backgroundColor = "rgba(255, 255, 255, 0.55)";

roll.addEventListener('click', function() {
  let randomNum = Math.ceil(Math.random() * 6);
  if(randomNum == 1 && turn % 2 == 0) {
    dice.textContent = randomNum;
    playerOne = 0;
    currentSpanLeft.textContent = playerOne;
    turn++;
    left.style.backgroundColor = "rgba(255, 255, 255, 0.2)"
    right.style.backgroundColor = "rgba(255, 255, 255, 0.5)"
  }
  else if(randomNum == 1 && turn % 2 != 0) {
    dice.textContent = randomNum;
    playerTwo = 0;
    currentSpanRight.textContent = playerTwo;
    turn++;
    left.style.backgroundColor = "rgba(255, 255, 255, 0.5)"
    right.style.backgroundColor = "rgba(255, 255, 255, 0.2)"
  }
  else if(turn % 2 == 0) {
    
    dice.textContent = randomNum;
    playerOne += randomNum;
    currentSpanLeft.textContent = playerOne;
    left.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  }
  else {
    dice.textContent = randomNum;
    playerTwo += randomNum;
    currentSpanRight.textContent = playerTwo;
    right.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  }
})
hold.addEventListener('click', function() {
  if(turn % 2 == 0) {
    left.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    right.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    leftCurrent += playerOne;
    leftSpan.textContent = leftCurrent;
    currentSpanLeft.textContent = 0;
    turn++;
  }
  else {
    left.style.backgroundColor = "rgba(255, 255, 255, 0.5)"
    right.style.backgroundColor = "rgba(255, 255, 255, 0.2)"
    rightCurrent += playerTwo;
    rightSpan.textContent = rightCurrent
    currentSpanRight.textContent = 0;
    turn++;
  }
})