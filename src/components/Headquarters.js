import React, {useState } from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import HostList from "./HostList";
import LogPanel from "./LogPanel";
import { Log } from "../services/Log";

function Headquarters({ hosts, setHosts }) {
  const [logs, setLogs] = useState([])

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
        <Details updateHost={updateHost}/>
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel logs={logs}/>
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
