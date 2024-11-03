function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result;

    if (userChoice === computerChoice) {
        result = "It's a tie! You both chose " + userChoice + ".";
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            result = "You lose! Paper covers Rock.";
        } else {
            result = "You win! Rock crushes Scissors.";
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            result = "You lose! Scissors cut Paper.";
        } else {
            result = "You win! Paper covers Rock.";
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            result = "You lose! Rock crushes Scissors.";
        } else {
            result = "You win! Scissors cut Paper.";
        }
    } else {
        result = "Invalid choice! Please choose Rock, Paper, or Scissors.";
    }

    alert("Computer chose: " + computerChoice + "\n" + result);
}
