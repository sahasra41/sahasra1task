import { fetchBooks } from './books.js';
import { renderBooks, setupAddToCartListeners, renderCart } from './ui.js';
document.addEventListener('DOMContentLoaded', async () => {
const books = await fetchBooks();
renderBooks(books);
setupAddToCartListeners(books);
renderCart();
});