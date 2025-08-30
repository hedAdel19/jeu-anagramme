class UI {
  updateScore(score) {
    const scoreEl = document.getElementById("score");
    scoreEl.textContent = `Score : ${score}`;
    scoreEl.classList.add("pulse");
    setTimeout(() => scoreEl.classList.remove("pulse"), 400);
  }

  updateLevel(level) {
    const levelEl = document.getElementById("niveau");
    levelEl.textContent = `Niveau : ${level}`;
    levelEl.classList.add("fade-in");
    setTimeout(() => levelEl.classList.remove("fade-in"), 600);
  }

  updateTimer(seconds) {
    document.getElementById("temps").textContent = `Temps : ${seconds}s`;
  }

  displayAnagram(anagram) {
    const anagramEl = document.getElementById("anagramme");
    anagramEl.textContent = anagram;
    anagramEl.classList.add("glow");
    document.getElementById("reponse").value = "";
  }

  showSuccess(word) {
    const result = document.getElementById("resultat");
    result.textContent = `✅ Bravo ! Le mot était : ${word}`;
    result.style.color = "limegreen";
    result.classList.add("fade-in");
    setTimeout(() => result.classList.remove("fade-in"), 600);
  }

  showError(message) {
    const result = document.getElementById("resultat");
    result.textContent = `❌ ${message}`;
    result.style.color = "crimson";
    result.classList.add("shake");
    setTimeout(() => result.classList.remove("shake"), 400);
  }

  showDefinition(definition) {
    const defEl = document.getElementById("definition");
    defEl.textContent = `📖 ${definition}`;
    defEl.classList.add("fade-in");
    setTimeout(() => defEl.classList.remove("fade-in"), 600);
  }

  resetInterface() {
    document.getElementById("resultat").textContent = "";
    document.getElementById("definition").textContent = "";
    document.getElementById("reponse").value = "";
  }
}
