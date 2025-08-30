class Player {
  constructor() {
    this.name = "Joueur";
    this.score = 0;
  }

  incrementScore(points) {
    this.score += points;
  }

  resetScore() {
    this.score = 0;
  }
}

