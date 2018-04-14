const inquirer = require("inquirer");
const Word = require("./word.js");
const words = ["batman", "deadpool", "joker", "deathstroke", "superman", "thor", "loki", "beast", "cyclops"];

function playGame() {
    const word = new Word(words[Math.floor(Math.random() * words.length)]);
    let nGuesses = 5;
    
    function promptUser() {
        inquirer.prompt([{
            type: "input",
            message: "Guess a letter",
            name:"letter"
        }]).then(response => {
            const isCorrect = word.userGuess(response.letter.toLowerCase());
            console.log(`\n${word.toString()}\n`);
            if (isCorrect) {
                if (word.toString().indexOf("_") === -1) {
                    console.log("Winner!\n");
                    return playAgain();
                }
                console.log("Correct!\n");
            }
            else {
                nGuesses--;
                if (nGuesses > 1) {
                    console.log(`Incorrect! ${nGuesses} guesses remaining.\n`);
                }
                else if (nGuesses === 1) {
                    console.log(`Incorrect! 1 guess remaining.\n`);
                }
                else {
                    console.log()
                    console.log(`${word.string.split(``).join(` `)}\n\nGame Over!\n`);
                    return playAgain();
                }
            }
            promptUser();
        });
    }

    console.log(`\n${word.toString()}\n`);
    promptUser();
}

function playAgain() {
    inquirer.prompt([{
        type: `confirm`,
        message: `Play again?`,
        name: `playAgain`,
        default: false
    }]).then(response => {
        if (response.playAgain) {
            playGame();
        }
        return;
    });
}

playGame();