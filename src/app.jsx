import React from "react";
import { Routes, Route } from "react-router-dom";
import BookList from "./pages/BookList";
import BookDetail from "./components/BookDetail";

const App = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Book Explorer</h1>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetail />} />
      </Routes>
    </div>
  );
};

export default App;
