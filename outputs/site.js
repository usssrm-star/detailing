const request = document.querySelector('#request');
const service = document.querySelector('#service');
const car = document.querySelector('#car');
const feedback = request.querySelector('output');

document.querySelectorAll('[data-service]').forEach((link) => {
  link.addEventListener('click', () => {
    service.value = link.dataset.service;
    feedback.textContent = '';
  });
});

request.addEventListener('input', () => {
  car.setCustomValidity('');
  feedback.textContent = '';
});

request.addEventListener('submit', (event) => {
  event.preventDefault();
  const model = car.value.trim();
  if (!model) {
    car.setCustomValidity('Укажи марку и модель автомобиля.');
    car.reportValidity();
    return;
  }
  feedback.textContent = `Готово: ${service.selectedOptions[0].text} для ${model}. Запрос показан только в демо.`;
});
