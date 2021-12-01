// import galleryDiv from '../partials-js/main-page';
const galleryDiv = document.querySelector('.gallery');
const marcup404 = () => {
  return `
 <div class="plug-list">
 <div class="plug-text">

  <hr>
  <div>Page Not Found</div>
</div>
<div class="astronaut">
  <img src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png" alt="" class="src">
</div>
</div>
  
`;
  // startAnimation();
};

const startAnimation = () => {
  // const divAnimation = document.querySelector('.plug-list');
  // // var body = galleryDiv;
  // setInterval(createStar, 100);
  // function createStar() {
  //   var right = Math.random() * 500;
  //   var top = Math.random() * screen.height;
  //   var star = divAnimation.createElement('div');
  //   star.classList.add('star');
  //   divAnimation.appendChild(star);
  //   setInterval(runStar, 10);
  //   star.style.top = top + 'px';
  //   function runStar() {
  //     if (right >= screen.width) {
  //       star.remove();
  //     }
  //     right += 3;
  //     star.style.right = right + 'px';
  //   }
  // }

  // if(storage.watchedFilms.length===0 && storage.queueFilms.length===0) {
  // galleryDiv.innerHTML = marcup404();
  //     startAnimation();
  // }

  const divAnimation = document.querySelector('.plug-list');
  const main = document.querySelector('main');
  setInterval(createStar, 100);
  function createStar() {
    let right = Math.random() * 500;
    let top = Math.random() * screen.height;
    let star = document.createElement('div');
    star.classList.add('star');
    divAnimation.appendChild(star);
    setInterval(runStar, 10);
    star.style.top = top + 'px';
    function runStar() {
      if (right >= screen.width) {
        star.remove();
      }
      right += 3;
      star.style.right = right + 'px';
    }
  }
};
export { marcup404, startAnimation };
