import React, { useState, useEffect } from "react";

const Result = () => {
  const [profile, setProfile] = useState({
    name: "Salman",
    bio: "Coding",
    profession: "Developer",
    image: "https://picsum.photos/200/300",
  });

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 className="text-danger">{profile.name}</h1>
      <h2 className="text-muted">{profile.bio}</h2>
      <p className="text-secondary">{profile.profession}</p>
      <img src={profile.image} alt="" />
      <p className="mt-2 fs-4 text-success">
        {seconds}
        <span className="text-black">
          {" "}
          seconds have elapsed since mounting.
        </span>
      </p>
    </div>
  );
};

export default Result;
