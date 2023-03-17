import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host";

function HostList({ hosts }) {
  
  const hostComponents = hosts.map(host => <Host key={host.firstName} host={host} />)

  return (
    <Card.Group itemsPerRow={6}>{hostComponents}</Card.Group>
  );
}

export default HostList;
