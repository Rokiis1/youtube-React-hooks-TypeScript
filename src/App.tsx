import React from "react";
import ReactDOM from "react-dom";
import UseContext from "./component/UseContext";
import UseEffect from "./component/UseEffect";
import UseState from "./component/UseState";

const App = () => (
  <div className="container">
    <UseState />
    <UseEffect />
    <UseContext />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
