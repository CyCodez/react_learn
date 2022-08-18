import React from "react"
import "./app.css"
import {movies} from "./movies"
import Movie from "./movie"
import {word} from "./tests/testing"
function MovieList() {  
  return (
    <div className="movielist">
      {movies.map(movie =>{
       return <Movie key={movie.id} {...movie}/>
      })}
      <p>{word}</p>
    </div>
   
  );
}




export default MovieList;