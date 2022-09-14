import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
  user: {
    name: "cyrus",
    username: "uwaoma cyrus",
    email: "uwaomacyruz@gmail.com",
    bio: "",
    verified: false,
  },
});

export function AuthProvider(props) {
  const [user, setuser] = useState({
    name: "cyrus",
    username: "uwaoma cyrus",
    email: "uwaomacyruz@gmail.com",
    bio: "barack obama lives in honololu",
    verified: "true",
  });
  return (
    <AuthContext.Provider
      value={{
        user: user,
        verified: true,
        setuser: setuser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export function Mybutton() {
  const { user, setuser } = useContext(AuthContext);

  const handlebutton = (event) => {
    event.preventDefault();
    setuser((prev) => {
      return {
        ...prev,
        bio: "barack obama is the president",
      };
    });
  };
  return (
    <div>
      <h1>user Bio</h1>
      <p>{user.bio}</p>
      <button onClick={handlebutton}>update</button>
    </div>
  );
}

export function Contextone() {
  const { user, verified } = useContext(AuthContext);
  return (
    <div>
      <p>my name is {user.name}</p>
      <p>and my username is {user.username}</p>
      <p>and my email address is {user.email}</p>
      <p>verified: {verified ? "yes" : "no"}</p>
      <Mybutton />
    </div>
  );
}
