function Movie({img,title}) {
  const click =(title)=>alert(title);
 
  return (
    <div className="movie" onClick={()=>click(title)}>
       <img src={img} />
       <h1>{title}</h1>
    </div>
   
  );
}

export default Movie