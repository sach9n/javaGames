const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById("result");
const possibleChoice = document.querySelectorAll("button");
let userChoice
let computerChoice
let result
possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click' , e =>{
    userChoice = e.target.id;
    userChoiceDisplay.textContent = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
   const randomNumber = Math.floor(Math.random() * possibleChoice.length) +1 // you  can use 3 as three posibilitiess
   console.log();

   if(randomNumber === 1){
    computerChoice = "Rock"
   }
   if(randomNumber === 2){
    computerChoice = "Scissors"
   }
   if(randomNumber === 3){
    computerChoice = "Paper"
   }

   computerChoiceDisplay.innerHTML = computerChoice;
   
 }

 function getResult() {
    if(computerChoice === userChoice) {
        result = "It's a draw"
    }
    if(computerChoice === 'Rock' && userChoice === 'Paper') {
        result = "You Won!"
    }
    if(computerChoice === 'Rock' && userChoice === 'Scissors') {
        result = "You lost!"
    }
    if(computerChoice === 'Paper' &&  userChoice === 'Rock') {
        result = "You Won!"
    }
    if(computerChoice === 'Paper' && userChoice === 'Scissors') {
        result ="You lost!"
    }
    if(computerChoice === 'Scissors' && userChoice === 'Rock') {
        result = "You Won!"
    }
    if(computerChoice === 'Scissors' && userChoice === 'Paper'){
         result = "You lost!"
    }

    resultDisplay.innerHTML = result;


 }