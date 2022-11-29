import features from '../JS/data.js';
import { products } from '../JS/data.js';

const navSlide = () => {
  const burger = document.getElementById('burger');
  const nav = document.querySelector('.links');
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
};
navSlide();

const updateFeaturesHeight = () => {
  const featuresHeight = document.querySelector('.features');
  const productsHeight = document.querySelector('.products');
  const featureQualitiesHeight = document.querySelector('.features-qualities');
  const productsDisplayHeight = document.querySelector('.products-display');
  const qHeight = featureQualitiesHeight.getBoundingClientRect().height;
  const pHeight = productsDisplayHeight.getBoundingClientRect().height;
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
    return `<div id=${id} class="each-product">
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
