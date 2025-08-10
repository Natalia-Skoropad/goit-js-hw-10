import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const delay = form.delay.value.trim();
  const state = form.state.value;

  if (!delay) {
    iziToast.warning({
      title: 'Caution',
      message: 'You forgot important data',
      position: 'topRight',
      timeout: 5000,
    });
    return;
  }

  new Promise((resolve, reject) => {
    setTimeout(() => {
      state === 'fulfilled' ? resolve(delay) : reject(delay);
    }, delay);
  })
    .then(d => {
      iziToast.success({
        title: 'OK',
        message: `Fulfilled promise in ${d}ms`,
        position: 'topRight',
        timeout: 5000,
      });
    })
    .catch(d => {
      iziToast.error({
        title: 'Error',
        message: `Rejected promise in ${d}ms`,
        position: 'topRight',
        timeout: 5000,
      });
    });
});
