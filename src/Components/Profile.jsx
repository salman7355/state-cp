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
      <div className="ms-3 d-flex mt-2">
        <h1>My Profile</h1>
        <button className="btn btn-info ms-4 p-2" onClick={clickHandler}>
          {name}
        </button>
      </div>
      {bool ? <Result /> : null}
    </>
  );
};

export default Profile;
