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

Area.propTypes = {
  hosts: function (props) {
    if (props.hosts.length > props.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      );
    }
  },
};

export default Area;
