import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [isbn, setIsbn] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [authors, setAuthors] = useState("");
  const [categories, setCategories] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookObject = {
      title,
      isbn,
      pageCount,
      publishedDate,
      authors: authors.split(","),
      categories: categories.split(","),
      thumbnailUrl,
    };

    axios
      .post("http://localhost:4000/books/create-book", bookObject)
      .then((res) => {
        alert("Book successfully created");
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    // Clear form after submission
    setTitle("");
    setIsbn("");
    setPageCount("");
    setPublishedDate("");
    setAuthors("");
    setCategories("");
    setThumbnailUrl("");
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
          Create Book
        </Button>
      </Form>
    </div>
  );
};

export default CreateBook;
