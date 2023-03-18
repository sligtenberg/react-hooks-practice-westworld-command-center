import React from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area";

function WestworldMap({ hosts, areas }) {
  const areaComponents = areas.map(area => <Area areaName={area.name} key={area.name} hosts={hosts} />)

  return <Segment id="map">{areaComponents}</Segment>;
}

export default WestworldMap;
