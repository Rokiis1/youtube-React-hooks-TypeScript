import React, { useState, useEffect } from "react";

function UseEffect() {
  const [value, setValue] = useState(1);

  useEffect(() => {
    const timerHandler = window.setInterval(() => {
      setValue((num) => num + 1);
    }, 1000);
    return () => window.clearInterval(timerHandler);
  }, []);

  return (
    <div>
      <p>{value}</p>
    </div>
  );
}

export default UseEffect;
