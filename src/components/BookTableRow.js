import React from "react";
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const BookTableRow = ({ obj, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{obj.title}</td>
      <td>{obj.isbn}</td>
      <td>{obj.pageCount}</td>
      <td>{new Date(obj.publishedDate).toLocaleDateString()}</td>
      <td>{obj.authors.join(", ")}</td>
      <td>{obj.categories.join(", ")}</td>
      <td>
        <img
          src={obj.thumbnailUrl}
          alt={`Thumbnail of ${obj.title}`}
          style={{ width: "100px", height: "100px" }}
        />
      </td>
      <td>
        <div style={{"display":"flex", "gap":"4px"}}>
        <Button onClick={() => onEdit(obj._id)} size="sm" variant="primary">
          Edit
        </Button>
        <Button onClick={() => onDelete(obj._id)} size="sm" variant="danger">
          Delete
        </Button>

        </div>
      </td>
    </tr>
  );
};

export default BookTableRow;
