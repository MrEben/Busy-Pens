const navSlide = () => {
  const burger = document.getElementById('burger');
  const nav = document.querySelector('.links');
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
};
navSlide();
