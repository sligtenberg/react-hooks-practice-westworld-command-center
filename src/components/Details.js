import React, { useContext } from "react";
import { Segment, Image } from "semantic-ui-react";
import { SelectedHostContext } from "../context/Context";
import * as Images from "../services/Images";
import HostInfo from "./HostInfo";

function Details({ updateHost }) {
  const selectedHost = useContext(SelectedHostContext)[0]

  return (
    <Segment id="details" className="HQComps">
      {selectedHost ?
        <HostInfo host={selectedHost} updateHost={updateHost}/> :
        <Image size="medium" src={Images.westworldLogo}
      />}
    </Segment>
  );
}

export default Details;
