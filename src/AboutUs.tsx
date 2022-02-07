import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
export default function AboutUs() {
  const history = useHistory();

  const location = useLocation();

  const { slug }: any = useParams();

  console.log("Params = ", slug);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <div>
      <h1>About us page</h1>
      <h2>Send id = {slug}</h2>
      <button onClick={handleClick}>Go home</button>
    </div>
  );
}
