function Car({ list }) {
  return (
    <div className="car">{`this is a ${list.brand} it was manufactured in the year ${list.year}`}</div>
  );
}

export function App() {
  const cars = [
    { brand: "ford", color: "red", year: 2020 },
    { brand: "toyota", color: "blue", year: 2021 },
    { brand: "toyota", color: "blue", year: 2021 },
  ];

  const listcar = cars.map((car) => {
    return <Car list={car} />;
  });
  return <div className="cardiv">{listcar}</div>;
}
