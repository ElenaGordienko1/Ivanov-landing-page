document.querySelectorAll('.slider-section').forEach(section => {
  const slider = section.querySelector('.slider-cars');
  const arrowLeft = section.querySelector('.arrow-left');
  const arrowRight = section.querySelector('.arrow-right');
  const cards = slider.querySelectorAll('.card');

  let scrollTimeout;
  let isManualScroll = false;
  let currentIndex = 0;

  function getCardOffset(index) {
    const targetCard = cards[index];
    if (!targetCard) return 0;
    return targetCard.offsetLeft - slider.offsetLeft;
  }

  function scrollToCard(index) {
    index = Math.max(0, Math.min(index, cards.length - 1));
    currentIndex = index;

    slider.scrollTo({
      left: getCardOffset(index),
      behavior: 'smooth'
    });

    updateActiveCard(index);
  }

  function updateActiveCard(index = currentIndex) {
    cards.forEach(card => card.classList.remove('card--active'));
    if (cards[index]) {
      cards[index].classList.add('card--active');
    }
  }

  function snapToClosestCard() {
    const sliderRect = slider.getBoundingClientRect();
    let closestIndex = 0;
    let minOffset = Infinity;

    cards.forEach((card, index) => {
      const offset = Math.abs(card.getBoundingClientRect().left - sliderRect.left);
      if (offset < minOffset) {
        minOffset = offset;
        closestIndex = index;
      }
    });

    scrollToCard(closestIndex);
  }

  arrowRight.addEventListener('click', () => {
    scrollToCard(currentIndex + 1);
  });

  arrowLeft.addEventListener('click', () => {
    scrollToCard(currentIndex - 1);
  });

  slider.addEventListener('scroll', () => {
    isManualScroll = true;

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      if (isManualScroll) {
        snapToClosestCard();
        isManualScroll = false;
      }
    }, 100);
  });

  window.addEventListener('load', () => {
    scrollToCard(0);
  });
});
