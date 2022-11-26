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

// const updateFeaturesHeight = () => {

// };
// window.addEventListener('resize', updateFeaturesHeight());
const updateFeaturesHeight = () => {
  const featuresHeight = document.querySelector('.features');
  const productsHeight = document.querySelector('.products');
  const featureQualitiesHeight = document.querySelector('.features-qualities');
  const productsDisplayHeight = document.querySelector('.products-display');
  const qHeight = featureQualitiesHeight.getBoundingClientRect().height;
  const pHeight = productsDisplayHeight.getBoundingClientRect().height;
  console.log(qHeight);
  const mQuery = window.matchMedia('(max-width:620px)');
  const handleResize = (e) => {
    if (e.matches) {
      featuresHeight.style.height = `${qHeight * 5}px`;
      productsHeight.style.height = `${pHeight * 5}px`;
    }
  };
  mQuery.addListener(handleResize);
};
updateFeaturesHeight();

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
const products = [
  {
    id: 1,
    img: './images/download(1).jpg',
    prodName: 'Bic',
    price: 23.5,
  },
  {
    id: 2,
    img: './images/img4.jpg',
    prodName: 'Befa',
    price: 23.5,
  },
  {
    id: 3,
    img: './images/download(2).jpg',
    prodName: 'Silk Blue',
    price: 23.5,
  },
  {
    id: 4,
    img: './images/download.jpg',
    prodName: 'Binf',
    price: 23.5,
  },
];
const feature = document.querySelector('.features-qualities');
const product = document.querySelector('.products-display');
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
  let displayProducts = products.map(function (item) {
    const { id, img, prodName, price } = item;
    return `<div class="each-product">
              <div class="product-image">
                <img src=${img} alt="image here" />
              </div>
              <h3>${prodName}</h3>
              <h2>$${price}</h2>
              <button class="btn btn-primary">purchase</button>
            </div>`;
  });
  displayProducts = displayProducts.join('');
  product.innerHTML = displayProducts;
});
