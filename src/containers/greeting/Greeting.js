import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { useHistory } from "react-router-dom";
import { style } from "glamor";
import Typewriter from "typewriter-effect";

export default function Greeting(props) {
  const theme = props.theme;
  const history = useHistory();

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div>
      <h1 class="h11">Hello World </h1>
      <p className="greeting-text-p">I am Alan Binu</p>
      <p className="greeting-text-p3">
        <Typewriter
          options={{
            strings: [
              "Professional Java Developer",
              "Spring Boot Developer",
              "Passionate Blockchain Enthusiast",
              "Committed Open Source Contributor",
              "Effective Problem Solver",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </p>
      <h4 class="i1">
        <b className="greeting-text-p1">Master's degree in Computer Science</b>
      </h4>
      <SocialMedia />
      <div className="portfolio-repo-btn-div">
        <a
          href="https://firebasestorage.googleapis.com/v0/b/alanbinu-stripe.appspot.com/o/Alan%20Binu-CV.pdf?alt=media&token=c17cd636-1b59-459b-950a-b1768d52dd75"
          download
        >
          <button className="button1">Get a copy of my CV</button>
        </a>
        <a href="https://consultationwithalan.web.app/" target="_blank">
          <button className="button">Book 1-1 Consultation with Me</button>
        </a>
      </div>

      <div className="resume-btn-div"></div>
    </div>
  );
}
