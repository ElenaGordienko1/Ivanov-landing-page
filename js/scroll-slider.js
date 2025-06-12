document.querySelectorAll('.slider-sections').forEach(section => {
  const slider = section.querySelector('.slider');
  const btnLeft = section.querySelector('.next-btn-left');
  const btnRight = section.querySelector('.next-btn-right');

  function getSlideWidth() {
    const slide = slider.querySelector('[class$="__slide"]');
    if (!slide) return 0;
    const style = getComputedStyle(slide);
    const marginRight = parseInt(style.marginRight || 0);
    return slide.offsetWidth + marginRight;
  }

  function updateArrows() {
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

    if (btnLeft) {
      const atStart = slider.scrollLeft <= 0;
      btnLeft.style.opacity = atStart ? '0.5' : '1';
      btnLeft.style.pointerEvents = atStart ? 'none' : 'auto';
      btnLeft.style.cursor = atStart ? 'default' : 'pointer';
    }

    if (btnRight) {
      const atEnd = slider.scrollLeft >= maxScrollLeft - 1;
      btnRight.style.opacity = atEnd ? '0.5' : '1';
      btnRight.style.pointerEvents = atEnd ? 'none' : 'auto';
      btnRight.style.cursor = atEnd ? 'default' : 'pointer';
    }
  }

  btnLeft?.addEventListener('click', () => {
    slider.scrollBy({ left: -getSlideWidth(), behavior: 'smooth' });
  });

  btnRight?.addEventListener('click', () => {
    slider.scrollBy({ left: getSlideWidth(), behavior: 'smooth' });
  });

  slider.addEventListener('scroll', updateArrows);

  // Инициализация стрелок после загрузки
  window.addEventListener('load', updateArrows);
});
