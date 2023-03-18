import React, { useContext } from "react";
import { Card } from "semantic-ui-react";
import { SelectedHostContext } from "../context/Context";
import "../stylesheets/Host.css";

function Host({ host }) {
  const [selectedHost, setSelectedHost] = useContext(SelectedHostContext)

  return (
    <Card
      className={host === selectedHost ? "host selected" : "host"}
      onClick={() => setSelectedHost(host)}
      image={host.imageUrl}
      raised
      link
    />
  );
}

export default Host;
