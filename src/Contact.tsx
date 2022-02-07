import React from "react";
import { useHistory } from "react-router-dom";

export default function Contact() {
  const history = useHistory();
  console.log(history);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <div>
      <h1>Contact page</h1>
      <button onClick={handleClick}>Go home</button>
    </div>
  );
}
