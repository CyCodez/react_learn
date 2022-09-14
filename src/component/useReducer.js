import { useReducer, useState } from "react";
import Mymodal from "./modal";

const defaultstate = {
  isModalOpen: false,
  status: "",
  storage: [],
};
function MyReducer() {
  const [user, setuser] = useState("");
  const [state, Dispatch] = useReducer(reducer, defaultstate);

  function reducer(state, action) {
    if (action.type === "some_value") {
      const mystore = [...state.storage, action.payload];
      return {
        ...state,
        storage: mystore,
        status: "item added Hurray!!!",
        isModalOpen: true,
      };
    }
    if (action.type === "empty_value") {
      return {
        ...state,
        status: "please enter a value",
        isModalOpen: true,
      };
    }
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

  const handlesubmit = (e) => {
    e.preventDefault();
    if (user) {
      const othervalue = { id: new Date().getTime().toString(), user };
      Dispatch({ type: "some_value", payload: othervalue });
    }
    if (user === "") {
      Dispatch({ type: "empty_value" });
    }
  };
  const closeModal = () => {
    Dispatch({ type: "close_modal" });
  };

  return (
    <>
      <form onSubmit={handlesubmit}>
        {state.isModalOpen && (
          <Mymodal modal={state.status} closeModals={closeModal} />
        )}
        <input type="text" value={user} onChange={handlechange} />
        <button type="submit" className="submit">
          submit
        </button>
        {state.storage.map((store) => {
          return (
            <div key={store.id}>
              <p>{store.user}</p>

              <button
                onClick={() => Dispatch({ type: "delete", payload: store.id })}
              >
                click
              </button>
            </div>
          );
        })}
      </form>
    </>
  );
}
export default MyReducer;
