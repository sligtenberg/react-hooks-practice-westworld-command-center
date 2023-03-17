import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import App from "./components/App";
import { SelectedHostProvider, AreasProvider } from "./context/Context"

ReactDOM.render(
    <AreasProvider >
      <SelectedHostProvider >
        <App /> 
      </SelectedHostProvider >
    </AreasProvider >, 
    document.getElementById("root")
  );