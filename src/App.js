import React from "react";
import "./app.css";
import { movies } from "./movies";
import Movie from "./movie";
import { Getmyapi } from "./getApi";
import { App } from "./carcomponent";
import { MyForm } from "./myform";
import { Mystate } from "./stateApp";

function MovieList() {
  return (
    <div>
      <MyForm />
      <div className="movielist">
        {movies.map((movie) => {
          return <Movie key={movie.id} {...movie} />;
        })}
      </div>
      <Getmyapi />
      <App />

      <Mystate />
    </div>
  );
}

export default MovieList;
