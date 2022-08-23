import React from "react";
import ReactDOM from "react-dom";
import UseEffect from "./component/UseEffect";
import UseState from "./component/UseState";

const App = () => (
  <div className="container">
    <UseState />
    <UseEffect />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
