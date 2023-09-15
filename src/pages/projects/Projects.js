import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import { projectsHeader, projects, reactnative } from "../../portfolio.js";
import "./Projects.css";
import TopButton from "../../components/topButton/TopButton";
import ProjectsImg from "./ProjectsImg";
import { style } from "glamor";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Stars from "../../components/Stars/Stars";
import { useEffect } from "react";

function Projects(props) {
  useEffect(() => {
    document.body.style.zoom = "90%";
  }, []);

  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="projects-main">
      <Stars />
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="heading-img-div">
              <div style={{ width: 600, height: 600 }}>
                <ProjectsImg theme={theme} />
              </div>
            </div>
            <div className="projects-heading-text-div">
              <h1 className="projects-heading-text">{projectsHeader.title}</h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                “Success is the delivery of a product that meets expectation”
              </p>

              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                Every project is an opportunity to learn, to figure out problems
                and challenges, to invent and reinvent.
              </p>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                Every project has challenges, and every project has its
                rewards.The bad experiences make you stronger and makes you
                focus on the next project.
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="repo-cards-div-main">
        <center>
          <h2>My Open Source Commitments</h2>
        </center>
        {projects.data.map((repo) => {
          return <ProjectCard repo={repo} theme={theme} />;
        })}
      </div>
      <br />
      <br />
      <br />
      <a href="https://github.com/AlanBinu007" target="_blank">
        <button className="buttonMore">Explore More (GitHub)</button>
      </a>
      <br />
      <br />
      <Footer theme={props.theme} onToggle={props.onToggle} />
      <TopButton theme={props.theme} />
    </div>
  );
}

export default Projects;
