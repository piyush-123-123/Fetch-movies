import { Button, Card } from "react-bootstrap";
import React from "react";
const Movies=({movies,onDelete})=>{

    return (
     
    <div className="movies">
     {movies.map((movie) => (
       <Card key={movie.id} className="m-3 bg-primary text-white">
          <Card.Body className="m-3 bg-primary text-white">
            <Card.Title><strong>{movie.title}</strong></Card.Title>

            <Card.Text>
              {movie.openingText}
            </Card.Text>
            <Card.Text>
              Release Date: {movie.releaseDate}
            </Card.Text>
            <Button variant="danger" onClick={() => onDelete(movie.id)}>Delete</Button>
          </Card.Body>
       </Card>
      ))}
      </div>


    )

}
export default React.memo(Movies);