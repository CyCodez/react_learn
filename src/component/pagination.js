import { useEffect, useState } from "react";

function Pagination() {
  const [count, setcount] = useState(0);

  const [image, setimage] = useState([]);

  const [button, setbutton] = useState([]);

  const [myobj, setmyobj] = useState({
    name: "uwaoma",
    age: 25,
    occupation: "programming",
  });

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

    const firstImage = myItems[count];

    setimage(firstImage);

    setbutton(myItems);
  }, [count]);

  const handleNext = (event) => {
    event.preventDefault();
    if (count < button.length - 1) {
      setcount(count + 1);
    } else {
      setcount(0);
    }
  };
  const handlePrev = (event) => {
    event.preventDefault();
    if (count > 0) {
      setcount(count - 1);
    } else {
      setcount(button.length - 1);
    }
  };

  const handlebut = () =>
    setmyobj((state) => {
      return { ...state, occupation: "developer" };
    });
  return (
    <div>
      <button onClick={handlebut}>click</button>
      <p>{myobj.name}</p>
      <p>{myobj.age}</p>
      <p>{myobj.occupation}</p>
      <div>
        <img src={image.img} alt="" width="150px" height="150px" />
        <p>{image.title}</p>
      </div>
      <button onClick={handlePrev} className="submit">
        prev
      </button>
      <button onClick={handleNext} className="submit">
        next
      </button>
      <p>{image.title}</p>
      <p>{image.id}</p>
    </div>
  );
}

// function Pagination() {
//   const [count, setcount] = useState(0);
//   const [state, setstate] = useState([]);

//   useEffect(() => {
//     // console.log("i am an effect");
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

//     const firstItem = myItems[count];
//     setstate(firstItem);
//     console.log(state);
//   }, [count]);

//   return (
//     <div>
//       <img src={state.img} alt="" />
//       <p>{state.title}</p>
//       <button>prev</button>
//       <button>next</button>
//     </div>
//   );
// }

// function Pagination() {
//   const [state, setstate] = useState(0);
//   const [item, setitem] = useState([]);
//   const [butitem, setbutitem] = useState([]);

//   useEffect(() => {
//     const myitems = [
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

//     const firstitem = myitems[state];
//     setitem(firstitem);
//     setbutitem(myitems);
//   }, [state]);

//   const handlenext = (event) => {
//     event.preventDefault();
//     if (state < butitem.length - 1) {
//       setstate(state + 1);
//     } else {
//       setstate(0);
//     }
//   };

//   const handleprev = (event) => {
//     event.preventDefault();
//     if (state > 0) {
//       setstate(state - 1);
//     }
//   };

//   return (
//     <div>
//       <p>
//         <img src={item.img} alt="" width="150px" height="150px" />
//       </p>
//       <p>{item.title}</p>

//       <button className="submit" onClick={handleprev}>
//         prev
//       </button>
//       <button className="submit" onClick={handlenext}>
//         next
//       </button>
//     </div>
//   );
// }

export default Pagination;
