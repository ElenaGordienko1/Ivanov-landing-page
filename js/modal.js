document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const openButtons = document.querySelectorAll('.modal-open');
  const closeBtn = modal.querySelector('.modal__close');
  const overlay = modal.querySelector('.modal__overlay');
  const form = document.getElementById('contactForm');

  const openModal = () => modal.classList.add('is-active');
  const closeModal = () => modal.classList.remove('is-active');

  openButtons.forEach(btn => btn.addEventListener('click', openModal));
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  form.addEventListener('submit', e => {
    e.preventDefault();
    // Здесь можно сделать отправку формы через AJAX
    closeModal();
    form.reset();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});
