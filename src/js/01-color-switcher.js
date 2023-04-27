import '../css/common.css';

const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let timerId = null;

const randomColor = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  stopBtn.disabled = true;
  timerId = setInterval(() => {
    body.style.backgroundColor = randomColor();
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  stopBtn.disabled = false;
  startBtn.disabled = false;
});
