import React, { useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area";

function WestworldMap({ hosts }) {
  const [areas, setAreas] = useState([])

  const areaComponents = areas.map(area => <Area areaName={area.name} key={area.name} hosts={hosts} />)

  useEffect(() => {
    fetch("http://localhost:3000/areas")
    .then(r => r.json())
    .then(setAreas)
  }, [])

  return <Segment id="map">{areaComponents}</Segment>;
}

export default WestworldMap;
