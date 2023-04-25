import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const amountInput = document.querySelector('input[name="amount"]');
const delayInput = document.querySelector('input[name="delay"]');
const stepInput = document.querySelector('input[name="step"]');

const submitHolder = () => {
  const amount = Number(amountInput.value);
  const delay = Number(delayInput.value);
  const step = Number(stepInput.value);

  for (let i = 0; i < amount; i++) {
    const position = i + 1;
    const promiseDelay = delay + i * step;
    createPromise(position, promiseDelay);
  }
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(position);
      } else {
        reject(position);
      }
    }, delay);
  });

  promise
    .then(result => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(error => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

form.addEventListener('submit', event => {
  event.preventDefault();
  submitHolder();
});
