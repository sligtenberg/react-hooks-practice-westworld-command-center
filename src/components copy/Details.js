import React, { useContext } from "react";
import { Segment, Image } from "semantic-ui-react";
import { SelectedHostContext } from "../context/Context";
import * as Images from "../services/Images";
import HostInfo from "./HostInfo";

function Details({ decommissionHost, commissionHost, reassignHost }) {
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.
  const selectedHost = useContext(SelectedHostContext)[0]

  return (
    <Segment id="details" className="HQComps">
      {selectedHost ?
        <HostInfo
          host={selectedHost}
          decommissionHost={decommissionHost}
          commissionHost={commissionHost}
          reassignHost={reassignHost}
        /> : <Image size="medium" src={Images.westworldLogo} />}
    </Segment>
  );
}

export default Details;
