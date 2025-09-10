// Event listener for DOM content loaded

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked the submit button!");
               
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked the ${gameType} button!`);
               runGame(gameType);
            }
        });
    }
    runGame("addition")
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gametype) {

    // creates random numbers between 1 and 25
    let num1 = Math.ceil(Math.random() * 25);
    let num2 = Math.ceil(Math.random() * 25);
    let gameType = document.getElementById("game-type").value;
    if (gametype === "addition") {
        displayAdditionQuestion(num1, num2);
    } else (gametype === "subtract") {
        alert(`Unknown game type: ${gametype}`);
        throw `Unknown game type: ${gametype}. Aborting!`;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

}

function displaySubtractQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "-";

}

}

function displayMultiplyQuestion() {
    
}