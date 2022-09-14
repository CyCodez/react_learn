import { useState } from "react";
function Car({ list }) {
  return (
    <div className="car">{`this is a ${list.brand} it was manufactured in the year ${list.year}`}</div>
  );
}

function App() {
  const [state, setstate] = useState({ name: "cyrus", age: 99 });

  const handlechange = () => {
    setstate((state) => {
      return {
        name: "john",
      };
    });
  };
  const cars = [
    { id: 1, brand: "ford", color: "red", year: 2020 },
    { id: 2, brand: "toyota", color: "blue", year: 2021 },
    { id: 3, brand: "toyota", color: "blue", year: 2021 },
  ];

  const listcar = cars.map((car) => {
    return <Car list={car} key={car.id} />;
  });
  return (
    <div>
      {state.name}
      {state.age}
      <button onClick={handlechange}>change</button>
      <div className="cardiv">{listcar}</div>
    </div>
  );
}

export default App;
