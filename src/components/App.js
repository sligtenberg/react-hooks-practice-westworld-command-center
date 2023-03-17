import React, { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap";
import Headquarters from "./Headquarters";

function App() {
  const [hosts, setHosts] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/hosts")
    .then(r => r.json())
    .then(setHosts)
  }, [])

  return (
    <Segment id="app">
      <WestworldMap hosts={hosts} setHosts={setHosts} />
      <Headquarters hosts={hosts} setHosts={setHosts}/>
    </Segment>
  );
}

export default App;
