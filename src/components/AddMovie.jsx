import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import "./AddMovie.css";

const AddMovie = ({fetchHandler}) => {
  const [title, setTitle] = useState("");
  const [openingText, setOpeningText] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  async function submitHandler(e) {
    e.preventDefault();

    const newMovieObj = {
      title,
      openingText,
      releaseDate,
    };
   const response = await fetch(
  "https://movies-app-66a8a-default-rtdb.firebaseio.com/movies.json",
   {
    method: "POST",
    body: JSON.stringify(newMovieObj),
    headers: {
    "Content-Type": "application/json",
     }
  }
);

    setTitle("");
    setOpeningText("");
    setReleaseDate("");
    fetchHandler();
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