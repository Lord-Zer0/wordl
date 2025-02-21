import Dictionary from "./dictionary.js";

const dictionary = new Dictionary();
const NUM_GUESSES = 6;
let guesses_remaining = NUM_GUESSES;
let currentGuess = [];


function init() {
    dictionary.loadWordData('words-La');
    secret = dictionary.db[Math.floor(Math.random() * dictionary.db.length)];
    console.log(secret);
}

init();