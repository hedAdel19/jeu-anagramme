class Timer {
  constructor() {
    this.interval = null;
  }

  start(duration, onTick, onEnd) {
    let timeLeft = duration;
    onTick(timeLeft);

    this.interval = setInterval(() => {
      timeLeft--;
      onTick(timeLeft);

      if (timeLeft <= 0) {
        clearInterval(this.interval);
        onEnd();
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }
}
