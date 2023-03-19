import React from "react";
import { Segment, Button } from "semantic-ui-react";

function LogPanel({ hosts, updateHost, logs, writeLog }) {
  let buttonComponent = hosts.some(host => host.active) ?
    <Button fluid color={"green"} content={"DECOMMISSION ALL"} onClick={decommissionAll}/> :
    <Button fluid color={"red"} content={"ACTIVATE ALL"} onClick={activateAll}/>
  
  function decommissionAll() {
    hosts.forEach(host => {
      if (host.active) {
        const newHost = host
        newHost.active = false
        updateHost(newHost, 'active')
        writeLog('notify', 'Decommissioning all hosts.')
      }
    })
  }

  function activateAll() {
    hosts.forEach(host => {
      if (!host.active) {
        const newHost = host
        newHost.active = true
        updateHost(newHost, 'active')
        writeLog('warn', 'Activating all hosts!')
      }
    })
  }

  return (
    <Segment className="HQComps" id="logPanel">
      <pre>
        {logs.map((log, i) => (
          <p key={i} className={log.type}>
            {log.msg}
          </p>
        ))}
      </pre>
        {buttonComponent}
    </Segment>
  );
}

export default LogPanel;
