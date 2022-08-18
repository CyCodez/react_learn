import React from "react"
import "./app.css"
import {movies} from "./movies"
import Movie from "./movie"
function MovieList() {  
  return (
    <div className="movielist">
      {movies.map(movie =>{
       return <Movie key={movie.id} {...movie}/>
      })}
    </div>
   
  );
}




export default MovieList;