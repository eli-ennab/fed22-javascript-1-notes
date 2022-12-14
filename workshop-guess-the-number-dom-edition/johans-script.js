const cheatEl = document.querySelector('#cheat');
const formGuessEl = document.querySelector('#formGuess');
const inputGuessEl = document.querySelector('#inputGuess');
const guessesEl = document.querySelector('#guesses');
const turnoutEl = document.querySelector('#turnout');
const btnGetLuckyEl = formGuessEl.querySelector('button[type="submit"]');

// Get a random number between 1-10
const getRandomNumber = function(max = 10) {
    return Math.ceil( Math.random() * max );
}

let correctNumber;
let guesses;

const startNewGame = () => {
    // Get a random number
    correctNumber = getRandomNumber();

    // Reset number of guesses to 0
    guesses = 0;

    // I'm going to cheat!
    cheatEl.innerText = correctNumber;
}

const updateGuesses = (nbrOfGuesses) => {
    guessesEl.innerText = `${nbrOfGuesses} guesses.`;
}

// Listen for guesses
formGuessEl.addEventListener('submit', e => {
    // Stop form from being sent to server
    e.preventDefault();

    // Get guesses number from input-field (and convert it to a number)
    const guessedNumber = Number(inputGuessEl.value);

    // Increase number of guesses made
    guesses++;

    // Update DOM with guesses made
    updateGuesses(guesses);

    // Check if guess was correct
    if (guessedNumber === correctNumber) {
        turnoutEl.innerText = `${guessedNumber} is correct!`;

        // Stop user from making more guesses (as their guess was correct)
        btnGetLuckyEl.setAttribute('disabled', 'disabled');

    } else if (guessedNumber < correctNumber) { 
        turnoutEl.innerText = `${guessedNumber} is too low.`;
    } else {
        turnoutEl.innerText = `${guessedNumber} is too high.`;
    }

    // Empty previous guess
    inputGuessEl.value = '';

    // Focus on input field
    inputGuessEl.focus();
});

// Listen for reset / "New game"
formGuessEl.addEventListener('reset', () => {
    // Start a new game
    startNewGame();

    // Reset number of guesses
    updateGuesses(guesses);

    // Empty previuos result
    turnoutEl.innerHTML = '';

    // Enable submit-button again
    btnGetLuckyEl.removeAttribute('disabled');
 });

// Start a new game
startNewGame();
