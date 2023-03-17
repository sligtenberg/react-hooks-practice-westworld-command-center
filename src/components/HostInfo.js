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

function HostInfo({ host, updateHost }) {
  const options = [
    { key: "high_plains", text: "High Plains", value: "high_plains" },
    { key: "lowlands", text: "Lowlands", value: "lowlands" },
    { key: "under_construction", text: "Under Construction", value: "under_construction" },
    { key: "pariah", text: "Pariah", value: "pariah" },
    { key: "python_pass", text: "Python Pass", value: "python_pass" },
    { key: "badlands", text: "Badlands", value: "badlands" }
  ];

  function handleOptionChange(e, { value }) {
    const newHost = host
    newHost.area = value
    updateHost(host, 'area')
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
              {host.firstName} | {host.gender === "Male" ? <Icon name="man" /> : <Icon name="woman" />}
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
              onChange={handleOptionChange}
              value={host.area}
              options={options}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default HostInfo;
