// window.onscroll = function () {
//   scrollFunction();
// };

// const btn = $('#up-button');

// $(window).scroll(function () {
//   if ($(window).scrollTop() > 700) {
//     btn.addClass('show');
//   } else {
//     btn.removeClass('show');
//   }
// });

// btn.on('click', function (e) {
//   e.preventDefault();
//   $('html, body').animate({ scrollTop: 0 }, '300');
// });

const upBtnRef = document.querySelector('#up-button');

const onScrollbottom = () => {
  //   console.log(window.scrollTop);
  if (window.pageYOffset > 200) {
    upBtnRef.classList.add('show');
  } else {
    upBtnRef.classList.remove('show');
  }
};

window.addEventListener('scroll', onScrollbottom);
