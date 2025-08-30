class Lang {
  constructor(lang = "fr") {
    this.lang = lang;
    this.translations = {};
  }

  async load() {
    try {
      const response = await fetch(`/src/i18n/${this.lang}.json`);
      if (!response.ok) throw new Error("Fichier de langue introuvable");
      this.translations = await response.json();
    } catch (error) {
      console.error("Erreur de chargement des traductions :", error);
      this.translations = {};
    }
  }

  t(key) {
    return this.translations[key] || key;
  }
}
