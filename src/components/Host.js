import React, { useContext } from "react";
import { Card } from "semantic-ui-react";
import { SelectedHostContext } from "../context/selectedHost";
import "../stylesheets/Host.css";

function Host({ host}) {
  /* NOTE: The className "host selected" renders a different style than simply "host". */
  const setSelectedHost = useContext(SelectedHostContext)[1]

  return (
    <Card
      className="host selected"
      onClick={() => {
        setSelectedHost(host)
      }}
      image={host.imageUrl}
      raised
      link
    />
  );
}

export default Host;
