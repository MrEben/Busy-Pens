// import { items } from '../JS/data';
// console.log(features);

const navSlide = () => {
  const burger = document.getElementById('burger');
  const nav = document.querySelector('.links');
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
};
navSlide();

const features = [
  {
    id: 1,
    img: './images/download(1).jpg',
    quality: 'Waterproof',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, non.',
  },
  {
    id: 2,
    img: './images/img4.jpg',
    quality: 'long lasting',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, non.',
  },
  {
    id: 3,
    img: './images/download(2).jpg',
    quality: 'easy to use',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, non.',
  },
  {
    id: 4,
    img: './images/download.jpg',
    quality: 'silvery shine',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, non.',
  },
];
const feature = document.querySelector('.features-qualities');
window.addEventListener('DOMContentLoaded', () => {
  let displayFeatures = features.map(function (item) {
    const { id, img, quality, text } = item;
    return `<div class="each-feature">
              <div class="feature-image">
                <img src=${img} alt="image here" />
              </div>
              <h4>${quality}</h4>
              <p>
                ${text}
              </p>
            </div>`;
  });
  displayFeatures = displayFeatures.join('');
  feature.innerHTML = displayFeatures;
});
