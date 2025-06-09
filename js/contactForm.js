document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const modal = document.getElementById('formModal');
  const closeBtn = modal.querySelector('.modal__close');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    modal.classList.add('active');

    form.reset();
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
});