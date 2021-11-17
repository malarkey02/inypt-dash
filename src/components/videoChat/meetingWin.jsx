// import SlidingPane from "react-sliding-pane";
// import React, { useState } from "react";

function Meetings(props) {
  // const [notesState, setNotesState] = useState({
  //   isPaneOpen: false,
  //   isPaneOpenLeft: false,
  // });

  function roomNameGen() {
    // api.dispose();
    return Math.random().toString(36).substring(2);
  }
  // console.log(result);

  const domain = "meet.jit.si";
  const options = {
    roomName: roomNameGen(), //random name for now
    width: 1200,
    height: 800,
    parentNode: document.querySelector("#meet-frame"),
  };

  const api = new window.JitsiMeetExternalAPI(domain, options);
  window.onunload = () => {
    api.executeCommand("hangup");
    api.dispose();
  };

  return <div id="meet-frame"></div>;
}

export default Meetings;
