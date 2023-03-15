import React, { useState } from "react";

const Result = () => {
  const [profile, setProfile] = useState({
    name: "salman",
    bio: "coding",
    profession: "Developer",
    image: "https://picsum.photos/200/300",
  });

  return (
    <div>
      <h1>{profile.name}</h1>
      <h2>{profile.bio}</h2>
      <p>{profile.profession}</p>
      <img src={profile.image} alt="" />
    </div>
  );
};

export default Result;
