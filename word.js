const Letter = require(`./letter.js`);

const Word = function(word) {
    this.string = word;
    this.letters = [];
    word.split(``).forEach(character => this.letters.push(new Letter(character)));
    this.toString = () => {
        return this.letters.join(` `);
    }
    this.userGuess = character => {
        let correctGuess = false;
        this.letters.forEach(letter => {
            if (letter.updateGuessed(character) && !correctGuess) {
                correctGuess = true;
            }
        });
        return correctGuess;
    };
}

module.exports = Word;