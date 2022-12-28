// https://github.com/bloominstituteoftechnology/React-Router-Movies 

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Link,
  Switch,
  Route
} from 'react-router-dom';

import MovieList from './Movies/MovieList.js'
import Movie from './Movies/Movie.js'

import SavedList from './Movies/SavedList';


export default function App () {

  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };


  return (
    <div>
      <Link to="/"><h1>MOVIE LIST</h1></Link>

      <SavedList list={[]} /> 

      <div>
        <Switch>
          <Route path="/movies/:id">
            <Movie />
          </Route>
          <Route path="/">
            <MovieList movies={movieList}/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}
