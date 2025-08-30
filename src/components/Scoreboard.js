class Scoreboard {
  constructor() {
    this.scores = [];
  }

  loadScores(initialScores) {
    this.scores = initialScores;
  }

  saveScore(name, score) {
    this.scores.push({ name, score });
    this.scores.sort((a, b) => b.score - a.score);
    this.scores = this.scores.slice(0, 10); // Top 10
  }

  display() {
    const ul = document.getElementById("listeScores");
    ul.innerHTML = "";

    this.scores.forEach((entry, index) => {
      const li = document.createElement("li");
      li.textContent = `${index + 1}. ${entry.name} — ${entry.score} pts`;
      ul.appendChild(li);
    });
  }
}
