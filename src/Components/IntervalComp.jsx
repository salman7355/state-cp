import React, { useState, useEffect } from "react";

const IntervalComp = ({ mountTime }) => {
  const [interval, setInterval] = useState(null);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setInterval(Date.now() - mountTime);
    }, 1000);

    return () => clearInterval(intervalID);
  }, [mountTime]);

  return <div>Time since last mount: {interval}ms</div>;
};

export default IntervalComp;
