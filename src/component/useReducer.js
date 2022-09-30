import { useEffect, useReducer, useState } from "react";
import Mymodal from "./modal";

const defaultstate = {
  isModalOpen: false,
  status: "",
  storage: [],
};
function MyReducer() {
  const [user, setuser] = useState("");
  const [desc, setdesc] = useState("");
  const [state, Dispatch] = useReducer(reducer, defaultstate);
  const [timer, settimer] = useState("");
  const sec = setInterval(() => new Date().getSeconds());

  useEffect(() => {
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    const alltime = `${hour}:${minutes}:${seconds}`;
    settimer(alltime);
  }, [sec]);

  function reducer(state, action) {
    if (action.type === "some_value") {
      const mystore = [...state.storage, action.payload];
      return {
        ...state,
        storage: mystore,
        status: `${user} item added Hurray!!!`,
        isModalOpen: true,
      };
    }
    // if (action.type === "some_desc") {
    //   const mydesc = [...state.storage, action.payload];
    //   return {
    //     ...state,
    //     storage: mydesc,
    //     isModalOpen: true,
    //   };
    // }
    if (action.type === "empty_value") {
      return {
        ...state,
        status: "please enter a value",
        isModalOpen: true,
      };
    }
    // if (action.type === "empty_desc") {
    //   return {
    //     ...state,
    //     status: "please enter a description",
    //     isModalOpen: true,
    //   };
    // }
    if (action.type === "close_modal") {
      return {
        ...state,
        isModalOpen: false,
      };
    }
    if (action.type === "delete") {
      const myfun = state.storage.filter(
        (store) => store.id !== action.payload
      );
      return {
        ...state,
        storage: myfun,
      };
    }
  }

  const handlechange = (e) => {
    e.preventDefault();
    setuser(e.target.value);
  };

  const handledesc = (e) => {
    e.preventDefault();
    setdesc(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (user) {
      const hour = new Date().getHours();
      const minutes = new Date().getMinutes();
      const seconds = new Date().getSeconds();
      const alltime = `${hour}:${minutes}:${seconds}`;
      const othervalue = {
        id: new Date().getTime().toString(),
        user,
        time: alltime,
        desc: desc,
      };
      Dispatch({ type: "some_value", payload: othervalue });
    }
    if (user === "") {
      Dispatch({ type: "empty_value" });
    }
    // if (desc) {
    //   const descValue = { desc };
    //   Dispatch({ type: "some_desc", payload: descValue });
    // }
    // if (desc === "") {
    //   Dispatch({ type: "empty_desc" });
    // }
    setuser("");
    setdesc("");
  };
  //
  const closeModal = () => {
    Dispatch({ type: "close_modal" });
  };

  return (
    <>
      <p>
        {setInterval(() => {
          return <div>i am an interval</div>;
        }, 1000)}
      </p>
      <p>{timer}</p>
      <form onSubmit={handlesubmit}>
        {state.isModalOpen && (
          <Mymodal modal={state.status} closeModals={closeModal} />
        )}
        <input
          type="text"
          value={user}
          placeholder="task"
          onChange={handlechange}
        />
        <input
          type="text"
          value={desc}
          placeholder="description"
          onChange={handledesc}
        />
        <button type="submit" className="submit">
          add
        </button>
        {state.storage.map((store) => {
          return (
            <div key={store.id} className="main_add">
              <div className="item_add">
                <p>
                  Added to the list:
                  <br />
                  <span style={{ fontWeight: "bold" }}>
                    {store.user[0].toUpperCase() + store.user.slice(1)}
                  </span>
                </p>
                <br />
                <p>
                  Time added:{" "}
                  <span style={{ fontWeight: "bold" }}>{store.time}</span>
                </p>
                <br />
                <p>
                  Desc:{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {store.desc[0].toUpperCase() + store.desc.slice(1)}
                  </span>
                </p>
                <br />
                <button
                  onClick={() =>
                    Dispatch({ type: "delete", payload: store.id })
                  }
                  style={{ backgroundColor: "yellow", borderRadius: "5px" }}
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </form>
    </>
  );
}
export default MyReducer;
