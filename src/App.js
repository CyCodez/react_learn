import React, { useEffect } from "react";
import "./app.css";
import { movies } from "./movies";
import Movie from "./movie";
import { useState } from "react";
function MovieList() {
  const [fruit, setfruit] = useState("apple");
  const [number, setnumber] = useState(1);
  const [obj, setobj] = useState([
    { id: 1, fruits: "apple" },
    {
      id: 2,

      fruits: "banana",
    },
    { id: 3, fruits: "orange" },
  ]);
  const changeobj = (id) => {
    setobj(obj.filter((fil) => fil.id !== id));
  };

  const changefruit = () => {
    if (fruit === "apple") {
      setfruit("orange");
    } else {
      setfruit("apple");
    }
  };
  const changenumber = () => {
    setInterval(() => setnumber((number) => number + 1), 2000);
  };
  useEffect(() => {
    console.log("hello");
    document.title = `new message`;
  }, [number]);
  return (
    <div>
      <div className="movielist">
        {movies.map((movie) => {
          return <Movie key={movie.id} {...movie} />;
        })}
      </div>
      <p className="para">{fruit}</p>
      <button onClick={changefruit} className="button">
        change fruits
      </button>
      <p className="para">{number}</p>
      <button onClick={changenumber} className="button">
        change number
      </button>
      <h1>
        {obj.map(({ id, fruits }) => {
          return (
            <div>
              <p className="fruits">{fruits}</p>
              <button onClick={() => changeobj(id)}>delete</button>
            </div>
          );
        })}
        <button onClick={() => setobj([])}>change obj</button>
      </h1>
    </div>
  );
}

export default MovieList;
