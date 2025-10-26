import React from "react";
import { useParams, Link } from "react-router-dom";
import booksData from "../data/booksData";
const BookDetail = () => {
const { id } = useParams();
const book = booksData.find((b) => b.id === parseInt(id));
if (!book) return <p>Book not found!</p>;
return (
<div>
<h2>{book.title}</h2>
<h4>By {book.author}</h4>
<p>{book.description}</p>
<p> Rating: {book.rating}</p>
<Link to="/">← Back to List</Link>
</div>
);
};
export default BookDetail;