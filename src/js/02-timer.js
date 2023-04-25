import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const dateInput = document.querySelector('input#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysBox = document.querySelector('[data-days]');
const hoursBox = document.querySelector('[data-hours]');
const minutesBox = document.querySelector('[data-minutes]');
const secondsBox = document.querySelector('[data-seconds]');

let timerId = null;

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);

  const hours = Math.floor((ms % day) / hour);

  const minutes = Math.floor(((ms % day) % hour) / minute);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};

const timeCounter = () => {
  const targetDate = new Date(dateInput.value).getTime();
  const timeLeft = targetDate - Date.now();

  if (timeLeft <= 0) {
    Notiflix.Notify.success('Yay! Time is up!');
    clearInterval(timerId);
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(timeLeft);

  daysBox.textContent = addLeadingZero(days);
  hoursBox.textContent = addLeadingZero(hours);
  minutesBox.textContent = addLeadingZero(minutes);
  secondsBox.textContent = addLeadingZero(seconds);
};

startBtn.addEventListener('click', () => {
  clearInterval(timerId);
  timerId = setInterval(timeCounter, 1000);
});

new flatpickr('input#datetime-picker', options);
