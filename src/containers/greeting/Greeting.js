import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { useHistory } from "react-router-dom";
import { style } from "glamor";
import toast, { Toaster } from "react-hot-toast";
import AlanBinuCV from "../.././assests/cv/Alan Binu-CV.pdf";

export default function Greeting(props) {
  const theme = props.theme;
  const history = useHistory();

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  function downloadCV() {
    const apiPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: "okay" });
      }, 3000);
    });
    toast.promise(apiPromise, {
      loading: "Getting the file.....",
      success: "Downloading the file.....",
    });
  }

  return (
    <div>
      <div className="content-tertiary">
        <p>
          <br/>
          <span>✌🏻</span> Hi there! I'm Alan Binu
        </p>
      </div>
      <div className="content-primary">
        <h1>
          I am a <span>IBM</span> and  <span>Meta Certified Back-End Developer</span>.
          Master in <span>Core Java </span> & <span> Spring Boot</span> with Solid{" "}
          <span>MSc</span> fundamentals.
        </h1>
      </div>

      <SocialMedia />
      <div className="portfolio-repo-btn-div">
        <a
          href={AlanBinuCV}
          // href="https://firebasestorage.googleapis.com/v0/b/alanbinu-stripe.appspot.com/o/Alan%20Binu-CV.pdf?alt=media&token=c17cd636-1b59-459b-950a-b1768d52dd75"
          download
        >
          <button className="button1" onClick={downloadCV}>
            Get a copy of my CV
          </button>
        </a>
        <a href="https://consultationwithalan.web.app/" target="_blank">
          <button className="button">Book 1-1 Consultation with Me</button>
        </a>
      </div>

      <div className="resume-btn-div"></div>
    </div>
  );
}
