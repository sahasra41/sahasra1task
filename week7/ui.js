import { addToCart, removeFromCart, getCart, calculateTotal } from './cart.js';
export function renderBooks(books) {
const bookList = document.getElementById('book-list');
bookList.innerHTML = '';
books.forEach((book, index) => {
const li = document.createElement('li');
li.innerHTML = `
<strong>${book.title}</strong> by ${book.author} - $${book.price}
<em>(${book.availability})</em>
<button ${book.availability === 'out of stock' ? 'disabled' : ''} data-index="${index}">Add
to Cart</button>
`;
bookList.appendChild(li);
});
}
export function setupAddToCartListeners(books) {
document.getElementById('book-list').addEventListener('click', (e) => {
if (e.target.tagName === 'BUTTON' && e.target.innerText === 'Add to Cart') {
const index = e.target.dataset.index;
addToCart(books[index]);
renderCart();
}
});
}
export function renderCart() {
const cartList = document.getElementById('cart-list');
const totalPrice = document.getElementById('total-price');
const cart = getCart();
cartList.innerHTML = '';
cart.forEach((book, index) => {
const li = document.createElement('li');
li.innerHTML = `
${book.title} - $${book.price}
<button data-index="${index}">Remove</button>
`;
cartList.appendChild(li);
});
totalPrice.textContent = `Total: $${calculateTotal()}`;
setupRemoveFromCartListeners();
}
function setupRemoveFromCartListeners() {
document.getElementById('cart-list').addEventListener('click', (e) => {
if (e.target.tagName === 'BUTTON') {
const index = e.target.dataset.index;
removeFromCart(index);
renderCart();
}
});
}