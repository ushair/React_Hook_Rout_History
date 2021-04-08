import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

export default function Contact() {
  const location = useLocation();
  const { name, lname } = useParams();
  const history = useHistory();
  console.log(history);
  return (
    <div>
      <h1>
        Hello,This is Contact {name} {lname} page {""}
      </h1>
      <h2>The location is {location.pathname} </h2>
      <button onClick={() => history.goBack()}>Go back</button>
      <button onClick={() => history.push("/Services")}>Push</button>
      {location.pathname === "/Contact/ushair/ansari" ? (
        <button onClick={() => {}}>Welcome ushair</button>
      ) : null}
    </div>
  );
}
