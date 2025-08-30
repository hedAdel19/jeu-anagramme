// Initialisation des modules
const player = new Player();
const game = new GameEngine();
const timer = new Timer();
const ui = new UI();
const storage = new Storage();
const scoreboard = new Scoreboard();

// Chargement des données
game.loadWords(mots); // depuis mots.js
game.loadDefinitions(definitions); // depuis definitions.js
scoreboard.loadScores(storage.load()); // chargement depuis localStorage

// Initialisation de l’interface
ui.updateScore(player.score);
ui.updateLevel(game.level);
ui.updateTimer(config.dureeInitiale);
ui.displayAnagram(game.getCurrentAnagram());

// Lancement du canvas WebGL
initWebGL(document.getElementById("backgroundCanvas"));

// Événements utilisateur
document.getElementById("verifier").addEventListener("click", () => {
  const reponse = document.getElementById("reponse").value.trim();
  const result = game.checkAnswer(reponse);

  if (result.correct) {
    player.incrementScore(config.pointsParBonneReponse);
    ui.showSuccess(result.word);
    ui.showDefinition(result.definition);
    ui.updateScore(player.score);
    game.nextWord();
    ui.displayAnagram(game.getCurrentAnagram());
  } else {
    ui.showError("Mauvaise réponse !");
  }
});

// Bouton Recommencer
document.getElementById("recommencer").addEventListener("click", () => {
  game.reset();
  player.resetScore();
  ui.resetInterface();
  ui.displayAnagram(game.getCurrentAnagram());
  ui.updateScore(player.score);
  ui.updateLevel(game.level);
  ui.updateTimer(config.dureeInitiale);
  timer.stop();
  timer.start(config.dureeInitiale, (tempsRestant) => {
    ui.updateTimer(tempsRestant);
  }, () => {
    ui.showError("⏱️ Temps écoulé !");
    scoreboard.saveScore(player.name, player.score);
    storage.save(scoreboard.scores);
    scoreboard.display();
  });
});

// Démarrage du minuteur
timer.start(config.dureeInitiale, (tempsRestant) => {
  ui.updateTimer(tempsRestant);
}, () => {
  ui.showError("⏱️ Temps écoulé !");
  scoreboard.saveScore(player.name, player.score);
  storage.save(scoreboard.scores);
  scoreboard.display();
});
