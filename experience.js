import React from 'react';
import ReactDOM from "react-dom";

const onMouseOver = event => {
  const el = event.target;
  let blue = "#A7ECEC";
  el.style.color = blue;
};

const onMouseOut = event => {
  const el = event.target;
  let white = "#FFFFFF";
  el.style.color = white;
};

function Experience() {
  return (
    <div class="w3-col l3 m6 w3-margin-bottom">
      <h4>Relevant Experiences</h4>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom" onMouseEnter={event => onMouseOver(event)}
onMouseOut={event => onMouseOut(event)}>
      <h5>MongoDB Node.js Driver Intern: 2019 </h5>
      <h6>Improved the Node driver’s test-runner by removing dependencies and consolidating multiple
repositories to reduce technical overhead.</h6>
      <h6>Integrated Mocha with the test runner to use the latest features.</h6>
      <h6>Interacted with users to fix bugs and added feature support for Node driver’s quarterly goals</h6>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom" onMouseEnter={event => onMouseOver(event)}
onMouseOut={event => onMouseOut(event)}>
      <h5>Improbable Customer Sucess Intern: 2018 </h5>
      <h6>Developed a C# ConfigWorker to connect to a running game and make edits. </h6>
      <h6>Made a Unity testbed game </h6>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom" onMouseEnter={event => onMouseOver(event)}
onMouseOut={event => onMouseOut(event)}>
      <h5>PrecisionLender Web Development Intern: 2017 </h5>
      <h6>Developed career webpage, using JQuery, HTML and CSS to pull data from Greenhouse's REST API </h6>
      <h6>Used Microsoft Azure's Question and Answer bot template to make a AI Q&A bot for Request for Proposal questions </h6>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom" onMouseEnter={event => onMouseOver(event)}
onMouseOut={event => onMouseOut(event)}>
      <h5>Jane Street Capital Insight Program Participant: 2017 </h5>
      <h6>Developed skills in OCaml to create basic snake game.</h6>
      <h6>Built a bot with Python which trades bonds, stocks and ADRs on a virtual marketplace for a positive PnL.</h6>
    </div>
  )
}

const experienceElement = document.getElementById("experience");
ReactDOM.render(<Experience />, experienceElement);
