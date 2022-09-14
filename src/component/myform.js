import { useState, useEffect, useRef } from "react";

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

function MyForm() {
  // state values////////
  const [mystate, setmystate] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [tel, settel] = useState("");
  const [dbase, setdbase] = useState([]);
  const myuseref = useRef(null);
  ////// state values

  // setstate functions////////////
  const handlename = (e) => setname(e.target.value);
  const handleemail = (e) => setemail(e.target.value);
  const handletel = (e) => settel(e.target.value);
  ////////setstate functions

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email && tel) {
      const obj = {
        id: Math.random(),
        name: name,
        email: email,
        tel: tel,
      };
      setdbase((base) => [...base, obj]);
      setname("");
      setemail("");
      settel("");
    }
    console.log(myuseref.current);
  };
  useEffect(() => {
    myuseref.current.focus();
  });
  return (
    <div>
      <button onClick={() => setmystate(!mystate)}>click</button>
      {mystate && <Myfun />}
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            ref={myuseref}
            type="text"
            placeholder="name"
            name="name"
            value={name}
            onChange={handlename}
          />
          <br />
          <input
            type="text"
            placeholder="email"
            name="email"
            value={email}
            onChange={handleemail}
          />
          <br />
          <input
            type="text"
            placeholder="tel"
            name="tel"
            value={tel}
            onChange={handletel}
          />
          {dbase.map((ob) => {
            return (
              <>
                <div key={ob.id} className="dbase">
                  <p>
                    {ob.name} {ob.email}
                  </p>
                </div>
              </>
            );
          })}
          <br />
          <input className="submit" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default MyForm;
