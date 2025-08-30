class UI {
  updateScore(score) {
    document.getElementById("score").textContent = `Score : ${score}`;
  }

  updateLevel(level) {
    document.getElementById("niveau").textContent = `Niveau : ${level}`;
  }

  updateTimer(seconds) {
    document.getElementById("temps").textContent = `Temps : ${seconds}s`;
  }

  displayAnagram(anagram) {
    document.getElementById("anagramme").textContent = anagram;
    document.getElementById("reponse").value = "";
  }

  showSuccess(word) {
    const result = document.getElementById("resultat");
    result.textContent = `✅ Bravo ! Le mot était : ${word}`;
    result.style.color = "limegreen";
  }

  showError(message) {
    const result = document.getElementById("resultat");
    result.textContent = `❌ ${message}`;
    result.style.color = "crimson";
  }

  showDefinition(definition) {
    document.getElementById("definition").textContent = `📖 ${definition}`;
  }

  resetInterface() {
    document.getElementById("resultat").textContent = "";
    document.getElementById("definition").textContent = "";
    document.getElementById("reponse").value = "";
  }
}
