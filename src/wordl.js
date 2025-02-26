import Dictionary from "./dictionary.js";

const dictionary = new Dictionary();
const NUM_GUESSES = 6;
let guesses_remaining = NUM_GUESSES;
let currentGuess = [];


function init() {
    dictionary.loadWordData('words-La');
    var words = dictionary.printWords();
    console.log("words: " + words);
    var secret = words[Math.floor(Math.random() * words.length)];
    console.log(secret);

    const key_input = document.getElementById(keyboardIO);

    key_input.addEventListener("keydown", updateInput);
    
}

function updateInput(e) {
    console.log(e.key);
}

function submitGuess(form) {
    
}

init();