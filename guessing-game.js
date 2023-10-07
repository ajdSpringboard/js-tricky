function guessingGame() {
    const secretNumber = Math.floor(Math.random() * 100);
    let guesses = 0;
    let hasWon = false;
  
    return function(guess) {
      guesses++;
  
      if (hasWon) {
        return "The game is over, you already won!";
      }
  
      if (guess < secretNumber) {
        return `${guess} is too low!`;
      } else if (guess > secretNumber) {
        return `${guess} is too high!`;
      } else {
        hasWon = true;
        return `You win! You found ${secretNumber} in ${guesses} guesses.`;
      }
    };
  }

module.exports = { guessingGame };
