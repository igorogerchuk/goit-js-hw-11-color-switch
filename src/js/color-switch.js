import { colors } from "./colors.js";

const background = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.interval = setInterval(() => changeBodyBackgroundColor(), 1000);
    this.isActive = true;
  },
  stop() {
    clearInterval(this.interval);
    this.isActive = false;
  }
};

const refs = {
  startButton: document.querySelector('button[data-action="start"'),
  stopButton: document.querySelector('button[data-action="stop"'),
  body: document.querySelector("body")
};

refs.startButton.addEventListener("click", background.start.bind(background));
refs.stopButton.addEventListener("click", background.stop.bind(background));

function changeBodyBackgroundColor() {
  refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
