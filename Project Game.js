document.addEventListener('DOMContentLoaded', function() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');
    const messageElement = document.getElementById('message');
    let attempts = 0;

    guessButton.addEventListener('click', function() {
        const guess = parseInt(guessInput.value);
        attempts++;

        if (isNaN(guess) || guess < 1 || guess > 100) {
            messageElement.textContent = 'Please enter a valid number between 1 and 100.';
        } else if (guess === secretNumber) {
            messageElement.textContent = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`;
            guessInput.disabled = true;
            guessButton.disabled = true;
        } else if (guess < secretNumber) {
            messageElement.textContent = 'Too low! Try again.';
        } else {
            messageElement.textContent = 'Too high! Try again.';
        }

        guessInput.value = '';
    });
});
