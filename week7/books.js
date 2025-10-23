export async function fetchBooks() {
const response = await fetch('./books.json');
return await response.json();
}