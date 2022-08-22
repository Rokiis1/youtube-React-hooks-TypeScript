import React from "react";
import ReactDOM from "react-dom";
import UseState from "./component/UseState";

const App = () => (
  <div className="container">
    <UseState />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
