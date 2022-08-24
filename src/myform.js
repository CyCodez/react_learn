import { useState, useEffect } from "react";

function Myfun() {
  const [state, setstate] = useState(window.innerWidth);
  const checksize = () => {
    setstate(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checksize);
    return () => window.removeEventListener("resize", checksize);
  }, []);
  return (
    <>
      <p>size: {state}</p>
    </>
  );
}

export function MyForm() {
  const [mystate, setmystate] = useState(false);
  return (
    <div>
      <button onClick={() => setmystate(!mystate)}>click</button>
      {mystate && <Myfun />}
      <div className="form-container">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const { name, email, tel } = event.target.elements;

            console.log(
              `my name is ${name.value} and my email is ${email.value} this is my number ${tel.value}`
            );
          }}
        >
          <input type="text" placeholder="name" name="name" />
          <br />
          <input type="text" placeholder="email" name="email" />
          <br />
          <input type="text" placeholder="tel" name="tel" />
          <br />
          <input className="submit" type="submit" />
        </form>
      </div>
    </div>
  );
}
