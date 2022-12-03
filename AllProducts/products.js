import menu from './data.js';
const article = document.querySelector('.article');
const btns = document.querySelector('.buttons');
window.addEventListener('DOMContentLoaded', function () {
  displaYitems(menu);
  displayButtons();
});

function displayButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ['all']
  );
  // we are tryimg to say that the values has a value of all.
  // but are use .includes and push to append new vlues to the 'all'. So much that. the reduce method
  //  considers only one of the v alues at a time.
  //  using map method would have appended all the array specifics to the values.
  const categorybtns = categories
    .map(function (cartegory) {
      return `<button class="btn bn" data-gh="${cartegory}">${cartegory}</button>`;
    })
    .join('');
  btns.innerHTML = categorybtns;
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const category = e.currentTarget.dataset.gh;
      //    console.log(category);
      const gha = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === 'all') {
        displaYitems(menu);
      } else {
        displaYitems(gha);
      }
    });
  });
}

function displaYitems(menuItem) {
  let display = menuItem.map(function (item) {
    return `<div class="item">
        <div class="image"><img src=${item.img} alt="not available" srcset="">
        </div>
        <div class="content">
            <div class="item-nameprice">
                <div class="itemname">${item.title}</div>
                <div class="price">$${item.price}</div>
            </div>
            <div class="info">
                <p>${item.desc}</p>
                <button class="btn btn-primary obn">purchase</button>
            </div>
        </div>
    </div>`;
  });
  display = display.join('');
  article.innerHTML = display;
}
