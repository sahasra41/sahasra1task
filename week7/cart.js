let cart = [];
export function addToCart(book) {
cart.push(book);
}
export function removeFromCart(index) {
cart.splice(index, 1);
}
export function getCart() {
return cart;
}
export function calculateTotal() {
//let total=0;
return cart.reduce((total, book) => total + book.price, 0).toFixed(2);
}
export function clearCart() {
cart = [];
}