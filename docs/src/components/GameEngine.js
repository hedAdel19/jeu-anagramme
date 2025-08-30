class GameEngine {
  constructor() {
    this.words = [];
    this.definitions = {};
    this.currentIndex = 0;
    this.level = "FACILE";
  }

  loadWords(wordList) {
    this.words = wordList;
    this.shuffleWords();
  }

  loadDefinitions(defs) {
    this.definitions = defs;
  }

  shuffleWords() {
    this.words.sort(() => Math.random() - 0.5);
  }

  getCurrentWord() {
    return this.words[this.currentIndex];
  }

  getCurrentAnagram() {
    return this.shuffleLetters(this.getCurrentWord());
  }

  shuffleLetters(word) {
    return word.split('').sort(() => Math.random() - 0.5).join('');
  }

  checkAnswer(input) {
    const correctWord = this.getCurrentWord();
    const isCorrect = input.toLowerCase() === correctWord.toLowerCase();
    return {
      correct: isCorrect,
      word: correctWord,
      definition: this.definitions[correctWord] || "Définition non disponible"
    };
  }

  nextWord() {
    this.currentIndex = (this.currentIndex + 1) % this.words.length;
  }

  reset() {
    this.currentIndex = 0;
    this.shuffleWords();
  }
}

