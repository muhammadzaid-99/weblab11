import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import BookTableRow from "./BookTableRow";

const BookList = () => {
  const [books, setBooks] = useState([]);

  // Fetch books on component mount
  useEffect(() => {
    axios
      .get("http://localhost:4000/books/")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Handle editing a book
  const handleEdit = (bookId) => {
    window.location.href = `/edit-book/${bookId}`;
  };
  
  // Handle deleting a book
  const handleDelete = (bookId) => {
    axios
      .delete(`http://localhost:4000/books/delete-book/${bookId}`)
      .then(() => {
        alert("Book deleted successfully!");
        setBooks(books.filter((book) => book._id !== bookId)); 
      })
      .catch((error) => {
        console.error("Error deleting book:", error);
      });
  };

  const renderDataTable = () =>
    books.map((book, index) => (
      <BookTableRow
        obj={book}
        key={index}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    ));

  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>ISBN</th>
            <th>Page Count</th>
            <th>Published Date</th>
            <th>Authors</th>
            <th>Categories</th>
            <th>Thumbnail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderDataTable()}</tbody>
      </Table>
    </div>
  );
};

export default BookList;
