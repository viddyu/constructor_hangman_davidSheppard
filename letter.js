const Letter = function(character) {
    this.character = character;
    this.guessed = false;
    this.toString = () => {
        if (this.guessed) {
            return this.character;
        }
        else {
            return `_`;
        }
    };
    this.updateGuessed = character => {
        if (character === this.character && !this.guessed) {
            this.guessed = true;
            return true;
        }
        return false;
    };
}

module.exports = Letter;