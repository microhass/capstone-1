const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const backdrop = document.querySelector('.backdrop');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  menu.classList.add('open-menu');
});

[closeIcon, backdrop].forEach((icon) => icon.addEventListener('click', () => menu.classList.remove('open-menu')));

// closeIcon.addEventListener('click', () => {
//   menu.classList.remove('open-menu');
// });
