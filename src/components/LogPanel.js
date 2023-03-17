import React from "react";
import { Segment, Button } from "semantic-ui-react";
import { Log } from "../services/Log";

function LogPanel({ hosts, updateHost }) {
  function dummyLogs() {
    // This is just to show you how this should work. But where should the log data actually get stored?
    // And where should we be creating logs in the first place?
    // Use the Log Service class (located in: 'src/services/Log') we've created anywhere you like.
    // Just remember to import it

    let logs = [];

    logs.unshift(Log.warn("This is an example of a warn log"));
    logs.unshift(Log.notify("This is an example of a notify log"));
    logs.unshift(Log.error("This is an example of an error log"));

    return logs;
  }

  let buttonComponent = hosts.some(host => host.active) ?
    <Button fluid color={"green"} content={"DECOMMISSION ALL"} onClick={decommissionAll}/> :
    <Button fluid color={"red"} content={"ACTIVATE ALL"} onClick={activateAll}/>
  
  function decommissionAll() {
    hosts.forEach(host => {
      if (host.active) {
        const newHost = host
        newHost.active = false
        updateHost(newHost, 'active')
        //debugger
      }
    })
  }

  function activateAll() {
    hosts.forEach(host => {
      if (!host.active) {
        const newHost = host
        newHost.active = true
        updateHost(newHost, 'active')
        //debugger
      }
    })
  }

  return (
    <Segment className="HQComps" id="logPanel">
      <pre>
        {dummyLogs().map((log, i) => (
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
