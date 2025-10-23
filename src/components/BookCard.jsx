import React from "react";
import { Link } from "react-router-dom";
const BookCard = ({ book }) => {
return (
<div
style={{
border: "1px solid #ccc",
padding: "15px",
borderRadius: "8px",
width: "200px",
}}
>
<h3>{book.title}</h3>
<p>By {book.author}</p>
<Link to={`/book/${book.id}`} style={{ color: "blue" }}>
View Details →
</Link>
</div>
);
};
export default BookCard;