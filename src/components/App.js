import React, { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap";
import Headquarters from "./Headquarters";

function App() {
  const [hosts, setHosts] = useState([])
  const [areas, setAreas] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/hosts")
    .then(r => r.json())
    .then(setHosts)
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/areas")
    .then(r => r.json())
    .then(setAreas)
  }, [])

  return (
    <Segment id="app">
      <WestworldMap hosts={hosts} areas={areas} />
      <Headquarters hosts={hosts} areas={areas} setHosts={setHosts}/>
    </Segment>
  );
}

export default App;
