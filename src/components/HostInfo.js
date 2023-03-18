import React from "react";
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  Divider,
} from "semantic-ui-react";
import "../stylesheets/HostInfo.css";

function HostInfo({ host, areas, updateHost, hostsInArea }) {

  const areaOptions = areas.map(area => {
    return {
      key: area.id,
      text: area.name.replace(/^_*(.)|_+(.)/g, (s, c, d) => c ? c.toUpperCase() : ' ' + d.toUpperCase()),
      value: area.name
    }
  })

  function handleLocationChange(event, { value }) {
    const newArea = areas.find(area => area.name === value)
    if (newArea.limit <= hostsInArea[newArea.name]) console.log("Too many hosts in destination!")
    else {
      console.log("do it!")
      const newHost = host
      newHost.area = value
      updateHost(host, 'area')
    }
  }

  function handleRadioChange() {
    const newHost = host
    newHost.active = !host.active
    updateHost(newHost, 'active')
  }

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={host.imageUrl}
          floated="left"
          size="small"
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {host.firstName} |
              {host.gender === "Male" ? <Icon name="man" /> : <Icon name="woman" />}
            </Card.Header>
            <Card.Meta>
              <Radio
                onChange={handleRadioChange}
                label={host.active ? "Active" : "Decommissioned"}
                checked={host.active}
                slider
              />
            </Card.Meta>
            <Divider />
            Current Area:
            <Dropdown
              onChange={handleLocationChange}
              value={host.area}
              options={areaOptions}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default HostInfo;
