import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import HostList from "./HostList";
import LogPanel from "./LogPanel";
import { Log } from "../services/Log";

function Headquarters({ hosts, areas, setHosts }) {
  const [logs, setLogs] = useState([])

  function writeLog(type, message) {
    switch(type) {
      case "notify": setLogs([Log.notify(message), ...logs]); break
      case "warn": setLogs([Log.warn(message), ...logs]); break
      case "error": setLogs([Log.error(message), ...logs]); break
      default:
    }
  }

  const hostsInArea = {}
  areas.forEach(area => {
    let numHosts = 0
    hosts.forEach(host => numHosts += host.area === area.name ? 1 : 0)
    hostsInArea[area.name] = numHosts
  })
  console.log(hostsInArea)
  
  const hostsInColdStorage = hosts.filter(host => host.active === false)

  function updateHost(newHost, attribute) {
    fetch(`http://localhost:3000/hosts/${newHost.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        [attribute]: newHost[attribute]
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(r => r.json())
    .then(setHosts(hosts.filter(host => host.id === newHost.id ? newHost : host)))
  }

  return (
    <Grid celled="internally">
      <Grid.Column width={8}>{<HostList hosts={hostsInColdStorage}/>}</Grid.Column>
      <Grid.Column width={5}>
        <Details areas={areas} updateHost={updateHost} hostsInArea={hostsInArea} writeLog={writeLog}/>
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel hosts={hosts} updateHost={updateHost} logs={logs} writeLog={writeLog}/>
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
