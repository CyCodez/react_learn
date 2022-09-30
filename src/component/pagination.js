import { useEffect, useState } from "react";

function Pagination() {
  const [count, setcount] = useState(0);
  const [image, setimage] = useState([]);
  const [button, setbutton] = useState([]);

  useEffect(() => {
    const myItems = [
      {
        id: 1,
        img: "https://m.media-amazon.com/images/I/814ANJ2pPtL._AC_UY327_FMwebp_QL65_.jpg",
        title: "The lost city",
      },
      {
        id: 2,
        img: "https://m.media-amazon.com/images/I/81GiC5t1PiL._AC_UL480_FMwebp_QL65_.jpg",
        title: "the crow",
      },
      {
        id: 3,
        img: "https://m.media-amazon.com/images/I/510xBcAo8uL._AC_UL480_FMwebp_QL65_.jpg",
        title: "Good witch",
      },
      {
        id: 4,
        img: "https://m.media-amazon.com/images/I/81LUdHQG-SL._AC_UL480_FMwebp_QL65_.jpg",
        title: "Call the Midwife: Season Ten (DVD)",
      },
    ];
    // const firstimage = myItems[count]
    setimage(myItems[count]);

    setbutton(myItems);
  }, [count]);

  const handleNext = () => {
    if (count < button.length - 1) {
      setcount(count + 1);
    } else {
      setcount(0);
    }
  };
  const handlePrev = () => {
    if (count > 0) {
      setcount(count - 1);
    } else {
      setcount(3);
    }
  };

  return (
    <div>
      <p>
        <img src={image.img} width="150px" height="150px" alt="pagination" />
      </p>
      <p>{image.title}</p>
      <p>{image.id}</p>
      <button className="submit" onClick={handlePrev}>
        prev
      </button>
      <button className="submit" onClick={handleNext}>
        next
      </button>
    </div>
  );
}

// function Pagination() {
//   const [count, setcount] = useState(0);

//   const [image, setimage] = useState([]);

//   const [button, setbutton] = useState([]);

//   const [myobj, setmyobj] = useState({
//     name: "uwaoma",
//     age: 25,
//     occupation: "programming",
//   });

//   useEffect(() => {
//     const myItems = [
//       {
//         id: 1,
//         img: "https://m.media-amazon.com/images/I/814ANJ2pPtL._AC_UY327_FMwebp_QL65_.jpg",
//         title: "The lost city",
//       },
//       {
//         id: 2,
//         img: "https://m.media-amazon.com/images/I/81GiC5t1PiL._AC_UL480_FMwebp_QL65_.jpg",
//         title: "the crow",
//       },
//       {
//         id: 3,
//         img: "https://m.media-amazon.com/images/I/510xBcAo8uL._AC_UL480_FMwebp_QL65_.jpg",
//         title: "Good witch",
//       },
//       {
//         id: 4,
//         img: "https://m.media-amazon.com/images/I/81LUdHQG-SL._AC_UL480_FMwebp_QL65_.jpg",
//         title: "Call the Midwife: Season Ten (DVD)",
//       },
//     ];

//     const firstImage = myItems[count];

//     setimage(firstImage);

//     setbutton(myItems);
//   }, [count]);

//   const handleNext = (event) => {
//     event.preventDefault();
//     if (count < button.length - 1) {
//       setcount(count + 1);
//     } else {
//       setcount(0);
//     }
//   };
//   const handlePrev = (event) => {
//     event.preventDefault();
//     if (count > 0) {
//       setcount(count - 1);
//     } else {
//       setcount(button.length - 1);
//     }
//   };

//   const handlebut = () =>
//     setmyobj((state) => {
//       return { ...state, occupation: "developer" };
//     });
//   return (
//     <div>
//       <button onClick={handlebut}>click</button>
//       <p>{myobj.name}</p>
//       <p>{myobj.age}</p>
//       <p>{myobj.occupation}</p>
//       <div>
//         <img src={image.img} alt="" width="150px" height="150px" />
//         <p>{image.title}</p>
//       </div>
//       <button onClick={handlePrev} className="submit">
//         prev
//       </button>
//       <button onClick={handleNext} className="submit">
//         next
//       </button>
//       <p>{image.title}</p>
//       <p>{image.id}</p>
//     </div>
//   );
// }

export default Pagination;
