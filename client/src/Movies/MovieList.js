import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export default function MovieList(props) {
  console.log(props.movies);
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}


// TODO: <Link to={`${url}/${item.id}`}> around the movie card, to link to the specific ID it has
// url = useRouteMatch
function MovieDetails(props) {
  const { title, director, metascore } = props.movie;
  const url = "/movies";
  console.log("MOVIE.ID: " , props.movie.id);
  console.log("URL: " , url);

  return (
    <Link to={`movies/${props.movie.id}`}>
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>
    </Link>
  );
}
