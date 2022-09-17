import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { useHistory } from "react-router-dom";
import FeelingProud from "./FeelingProud";
import Button from "../../components/button/Button";
import { style } from "glamor";

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
        Professional Full Stack Java Developer
      </p>
      <h4 class="i1">

        <b className="greeting-text-p1">
        Master's degree in Computer Science
                </b>
      </h4>
      <SocialMedia />
      <div className="portfolio-repo-btn-div">
        <a href="https://github.com/sponsors/AlanBinu007" target="_blank">
          <button className="button1">💕Sponser Me💕</button>
        </a>

        <button
          {...styles}
          className="button"
          onClick={() => {
            history.push("/contact");
          }}
        >
          Hire Me
        </button>
      </div>

      <div className="resume-btn-div"></div>
    </div>
  );
}
