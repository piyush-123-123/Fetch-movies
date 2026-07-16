import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import "./AddMovie.css";

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [openingText, setOpeningText] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    const newMovieObj = {
      title,
      openingText,
      releaseDate,
    };

    console.log(newMovieObj);

    setTitle("");
    setOpeningText("");
    setReleaseDate("");
  }

  return (
    <Card className="movie-form p-4 my-4">
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Opening Text</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={openingText}
            onChange={(e) => setOpeningText(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Release Date</Form.Label>
          <Form.Control
            type="date"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="dark" type="submit">
            Add Movie
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default AddMovie;