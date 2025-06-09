let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll === 0) {
    
    header.classList.add('hide');
  } else if (currentScroll > lastScrollTop) {

    header.classList.add('hide');
  } else if (currentScroll < lastScrollTop) {

    header.classList.remove('hide');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
