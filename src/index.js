import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import App from "./components/App";
import { SelectedHostProvider } from "./context/selectedHost"

ReactDOM.render(
    <SelectedHostProvider>
      <App /> 
    </SelectedHostProvider>, 
    document.getElementById("root")
  );