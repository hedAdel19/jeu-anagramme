function testMelange() {
  const engine = new GameEngine();
  engine.loadWords(["bonjour"]);
  const anagram = engine.getCurrentAnagram();
  console.log("Mot original : bonjour");
  console.log("Anagramme généré :", anagram);
  console.assert(anagram.length === "bonjour".length, "Erreur : longueur incorrecte");
  console.assert(anagram !== "bonjour", "Erreur : mot non mélangé");
}

testMelange();
