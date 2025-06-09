document.querySelectorAll('.slider-section').forEach(section => {
  const slider = section.querySelector('.slider');
  const nextBtnLeft = section.querySelector('.arrow-left');
  const nextBtnRight = section.querySelector('.arrow-right');

  function getSlideWidth() {
    const slide = slider.querySelector('[class$="__slide"]');
    const style = getComputedStyle(slide);
    return slide.offsetWidth + parseInt(style.marginRight);
  }

  nextBtnLeft.addEventListener('click', () => {
    slider.scrollBy({
      left: -getSlideWidth(),
      behavior: 'smooth'
    });
  });

  nextBtnRight.addEventListener('click', () => {
    slider.scrollBy({
      left: getSlideWidth(),
      behavior: 'smooth'
    });
  });

});
