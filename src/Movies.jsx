import { Card } from "react-bootstrap";
import React from "react";
const Movies=({movies})=>{

    return (
     
    <div className="movies">
     {movies.map((movie) => (
       <Card key={movie.episode_id} className="m-3 bg-primary text-white">
          <Card.Body className="m-3 bg-primary text-white">
            <Card.Title><strong>{movie.title}</strong></Card.Title>

            <Card.Text>
              {movie.opening_crawl}
            </Card.Text>

            <Card.Text>
              Director: {movie.director}
            </Card.Text>

            <Card.Text>
              Producer: {movie.producer}
            </Card.Text>

            <Card.Text>
              Release Date: {movie.release_date}
            </Card.Text>
          </Card.Body>
       </Card>
      ))}
      </div>


    )

}
export default React.memo(Movies);