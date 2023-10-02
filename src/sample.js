import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')



// Sample fetch code

const API_BASE = 'http://localhost:8080';
const ENDPOINT_GET_PRODUCTS = API_BASE + '/products';

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('btn-get-products').addEventListener('click', getProductsFromApi);
});

function getProductsFromApi(){

  fetch(ENDPOINT_GET_PRODUCTS)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    displayProducts(data);
  })
  .catch(error => {
    console.log('ERROR: ', error)
  });
}

function displayProducts(data){

  const ulEl = document.getElementById("products");

  data.forEach( (eachProduct) => {
    const liEl = document.createElement('li');
    liEl.innerText = eachProduct;
    ulEl.appendChild(liEl);
  });
}

// Sample HTML code relating to fetch above'

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <title>Title</title>
//   <script defer src="js/fetch-examples.js"></script>
// </head>
// <body>
//     <h1>API Test</h1>
//     <button id="btn-get-products">Get Products</button>
//     <ul id="products"></ul>
// </body>
// </html>
