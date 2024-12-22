import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useParams } from "react-router-dom"; // For navigation and accessing URL params

const UpdateBook = () => {
  const [title, setTitle] = useState("");
  const [isbn, setIsbn] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [authors, setAuthors] = useState("");
  const [categories, setCategories] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  const { bookId } = useParams(); 

  useEffect(() => {
    axios
      .get(`http://localhost:4000/books/edit-book/${bookId}`)
      .then((res) => {
        const book = res.data;
        setTitle(book.title);
        setIsbn(book.isbn);
        setPageCount(book.pageCount);
        setPublishedDate(new Date(book.publishedDate).toISOString( ).split('T')[0]);
        setAuthors(book.authors.join(", "));
        setCategories(book.categories.join(", "));
        setThumbnailUrl(book.thumbnailUrl);
      })
      .catch((err) => console.log(err));
  }, [bookId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBook = {
      title,
      isbn,
      pageCount,
      publishedDate,
      authors: authors.split(","),
      categories: categories.split(","),
      thumbnailUrl,
    };

    axios
      .put(`http://localhost:4000/books/update-book/${bookId}`, updatedBook)
      .then((res) => {
        console.log(res.data);
        alert("Book updated successfully!");
        window.location.href = `/books-list`;
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-wrapper">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="Title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="ISBN">
          <Form.Label>ISBN</Form.Label>
          <Form.Control
            type="text"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="PageCount">
          <Form.Label>Page Count</Form.Label>
          <Form.Control
            type="number"
            value={pageCount}
            onChange={(e) => setPageCount(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="PublishedDate">
          <Form.Label>Published Date</Form.Label>
          <Form.Control
            type="date"
            value={publishedDate}
            onChange={(e) => setPublishedDate(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="Authors">
          <Form.Label>Authors (comma separated)</Form.Label>
          <Form.Control
            type="text"
            value={authors}
            onChange={(e) => setAuthors(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="Categories">
          <Form.Label>Categories (comma separated)</Form.Label>
          <Form.Control
            type="text"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="ThumbnailUrl">
          <Form.Label>Thumbnail URL</Form.Label>
          <Form.Control
            type="text"
            value={thumbnailUrl}
            onChange={(e) => setThumbnailUrl(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" size="lg" block type="submit" className="mt-4">
          Update Book
        </Button>
      </Form>
    </div>
  );
};

export default UpdateBook;
