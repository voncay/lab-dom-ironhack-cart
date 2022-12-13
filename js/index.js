// ITERATION 1

function updateSubtotal(product) {

  //... your code goes here
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');
  const subtotalFormated = (Number(quantity) * Number(price)).toString();
  subtotal.textContent = subtotalFormated;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName('product');
  console.log(products[0]);
  // products.forEach( e => {
  //   let sum = 0;
  //   //sum += updateSubtotal(e);
  //   //console.log(sum);
  //   console.log(e);
  // });


  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
