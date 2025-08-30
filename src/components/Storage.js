class Storage {
  constructor() {
    this.key = "anagramme_scores";
  }

  save(scores) {
    localStorage.setItem(this.key, JSON.stringify(scores));
  }

  load() {
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : [];
  }

  clear() {
    localStorage.removeItem(this.key);
  }
}
