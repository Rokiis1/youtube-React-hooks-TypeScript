import React, { useContext, useState } from "react";
import PhoneContext, { PhoneState } from "../store/store";

function Consumer() {
  const phone = useContext<PhoneState>(PhoneContext);
  return (
    <div>
      <p>Phone: {phone.phone}</p>
      <p>Series: {phone.series}</p>
    </div>
  );
}

function UseContext() {
  const [phone, setPhone] = useState({
    phone: "Apple",
    series: "X",
  });
  return (
    <PhoneContext.Provider value={phone}>
      <Consumer />
      <button
        onClick={() =>
          setPhone({
            phone: "Samsung",
            series: "S21",
          })
        }
      ></button>
    </PhoneContext.Provider>
  );
}

export default UseContext;
