import 'animate.css';

const dataRef = document.querySelector('.footer__data');

const date = new Date();

dataRef.innerHTML = date.getFullYear();
