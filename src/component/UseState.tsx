import React, { useState } from "react";

function UseState() {
  const [string, setString] = useState<string | null>(null);

  const [number, setNumber] = useState<Number[]>([]);
  return (
    <div>
      <div>
        <button onClick={() => setString("Apple")}>Add fruit</button>
        {JSON.stringify(string)}
      </div>
      <div>
        <button onClick={() => setNumber([...number, number.length])}>
          Add number to array
        </button>
        {JSON.stringify(number)}
      </div>
    </div>
  );
}

export default UseState;
