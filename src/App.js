import React from "react"
import "./app.css"
// import {useEffect} from "react"
const books=
[
{
  id:1,
  img:"https://books.google.com.ng/books/publisher/content?id=UvElBQAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Wb3r5vgRL5qr2F8F6ucHcDSOojrfy6y0rdSGNG67ykMUdqEP3AflykyTFwOFHEH7p397FDJGVc_F89BVepV48FlbxHrl3XQ8DN-YZKO1YgKlYJInVwK1mG7STwKwq6vljC50Z",
  title:"Amazon book",
  author:"william shakespare",
},
 {
  id:2,
  img:"https://m.media-amazon.com/images/I/81GiC5t1PiL._AC_UL480_FMwebp_QL65_.jpg",
  title:"movie",
  author:"the crow",
},
{
  id:3,
  img:"https://m.media-amazon.com/images/I/510xBcAo8uL._AC_UL480_FMwebp_QL65_.jpg",
  title:"movie",
  author:"Good witch",
  gender: 'male'
},
{
  id:4,
  img:"https://m.media-amazon.com/images/I/81LUdHQG-SL._AC_UL480_FMwebp_QL65_.jpg",
  title:"movie",
  author:"Call the Midwife: Season Ten (DVD)",
  gender: 'male'
},
]
function BookList() {  
  return (
    <div className="booklist">
      {books.map(book =>{
       return <Book key={book.id} {...book}/>
      })}
      
    </div>
   
  );
}
function Book({img,title,author,gender}) {
  const click =(author)=>alert(author);
 
  return (
    <div className="book" onClick={()=>click(author)}>
       <img src={img} />
       <h1 >{title}</h1>
       <p>{author}</p>
       <p>{gender}</p>
    </div>
   
  );
}



export default BookList;