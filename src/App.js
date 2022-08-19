import React from "react"
import "./app.css"
import {movies} from "./movies"
import Movie from "./movie"
import {useState} from "react"
function MovieList() {  
  const[fruit, setfruit] = useState("apple")
  const[number, setnumber] = useState(1)
  const changefruit = () => {
    if(fruit === "apple"){
    setfruit("orange")}
  else{setfruit("apple")}};
  const changenumber = () =>{
    setnumber(number + 1)
    if(number === 5){
      alert("stop");
    }
  }
  return (
    <div>
    <div className="movielist">
      {movies.map(movie =>{
       return <Movie key={movie.id} {...movie}/>
      })}  
     
    </div>
     <p className="para">{fruit}</p>
      <button onClick = {changefruit} className="button">change fruits</button>
      <p className="para">{number}</p>
      <button onClick = {changenumber} className="button">change number</button>
   </div>
  );
}




export default MovieList;