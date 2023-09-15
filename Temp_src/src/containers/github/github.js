import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

const Github = () => {
  return (
    <div class="container">
      <h2 className="project-heading" style={{ paddingRight: "20px" }}>
        <center>
          <strong className="yellow">My Contributions to Open Source</strong>
        </center>
      </h2>
      <GitHubCalendar
        username="AlanBinu007"
        blockSize={15}
        blockMargin={5}
        color="#6102ce"
        fontSize={16}
      />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Github;
