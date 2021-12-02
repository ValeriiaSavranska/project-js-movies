const loader = document.querySelector('.loader');

const handleBySpin = async cb => {
  showSpinner();
  const data = await cb();
  hideSpinner();
  return data;
};

const showSpinner = () => {
  loader.classList.remove('loader-hide');
  loader.classList.add('loader-show');
};

const hideSpinner = () => {
  setTimeout(() => {
    loader.classList.remove('loader-show');
    loader.classList.add('loader-hide');
  }, 800);
};

export { handleBySpin };
