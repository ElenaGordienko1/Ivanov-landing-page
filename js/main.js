document.querySelectorAll('.splide').forEach((slider) => {
  const splide = new Splide(slider, {
    type: 'slide',
    perPage: 3,
    perMove: 1,
    focus: 0,
    fixedWidth: '760px',
    gap: '20px',
    pagination: false,
    arrows: false,
    updateOnMove: true,
    trimSpace: false,
  });

  splide.mount();

  const container = slider.closest('.slider-section');
  const arrowLeft = container?.querySelector('.popular-cars__arrow-left');
  const arrowRight = container?.querySelector('.popular-cars__arrow-right');

  if (arrowLeft && arrowRight) {
    arrowLeft.addEventListener('click', () => splide.go('<'));
    arrowRight.addEventListener('click', () => splide.go('>'));

    splide.on('moved', () => {
      arrowLeft.style.opacity = splide.index === 0 ? '0.5' : '1';
      arrowLeft.style.cursor = splide.index === 0 ? 'default' : 'pointer';

      const isEnd = splide.index >= splide.length - splide.options.perPage;
      arrowRight.style.opacity = isEnd ? '0.5' : '1';
      arrowRight.style.cursor = isEnd ? 'default' : 'pointer';
    });

    splide.emit('moved');
  }
});
