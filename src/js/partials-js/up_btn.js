const upBtnRef = document.querySelector('#up-button');

const onScrollbottom = () => {
  if (window.scrollY > 200) {
    upBtnRef.classList.add('visible');
  } else {
    upBtnRef.classList.remove('visible');
  }
};

window.addEventListener('scroll', onScrollbottom);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

upBtnRef.addEventListener('click', scrollToTop);
