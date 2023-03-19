import React from "react";
import "../stylesheets/Area.css";
import HostList from "./HostList";

function Area({ areaName, hosts }) {
  const hostsInArea = hosts.filter(host => host.area === areaName && host.active === true)

  return (
    <div
      className="area"
      id={areaName}
    >
      <h3 className="labels">
        {areaName.replace(/^_*(.)|_+(.)/g, (s, c, d) => c ? c.toUpperCase() : ' ' + d.toUpperCase())}
      </h3>
      {<HostList hosts={hostsInArea} />}
    </div>
  );
}

export default Area;
