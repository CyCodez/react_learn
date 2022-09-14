import { useEffect, useState } from "react";

function Getmyapi() {
  const [user, getuser] = useState([]);

  const asyncFunc = async () => {
    const response = await fetch("https://api.github.com/users");
    const result = await response.json();

    getuser(result);
  };
  useEffect(() => {
    asyncFunc();
  }, []);

  return (
    <h1>
      {user.map((uses) => {
        const { id, login, avatar_url } = uses;
        return (
          <p key={id} className="avatar">
            <img src={avatar_url} alt={login} width="150px" height="150px" />
          </p>
        );
      })}
    </h1>
  );
}

export default Getmyapi;
