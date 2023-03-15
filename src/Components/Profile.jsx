import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import Result from "./Results";

const Profile = () => {
  const [bool, setBool] = useState(false);
  const onclick = () => {
    bool == false ? setBool(true) : setBool(false);
  };

  const [name, setName] = useState("Show Profile");
  const changeName = () => {
    name == "Show Profile" ? setName("Hide Profile") : setName("Show Profile");
  };

  const clickHandler = () => {
    onclick();
    changeName();
  };

  return (
    <>
      <h1>My Profile</h1>
      <button onClick={clickHandler}>{name}</button>
      {bool ? <Result /> : null}
    </>
  );
};

export default Profile;
