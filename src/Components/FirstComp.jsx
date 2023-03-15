import React, { useState } from "react";

const FirstComp = () => {
  const [num, setNum] = useState(0);
  const [text, setText] = useState("");

  return (
    <>
      <button onClick={() => setNum(num - 1)}>-</button>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>+</button>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};

export default FirstComp;
