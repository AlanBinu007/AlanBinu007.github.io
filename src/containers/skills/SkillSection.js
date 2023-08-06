import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";
import Lottie from "lottie-react";
import backend from "../../assests/animations/backend.json";
import datascience from "../../assests/animations/datascience.json";
import cloud from "../../assests/animations/cloud.json";
import crypto from "../../assests/animations/crypto.json";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <Lottie animationData={datascience} />;
  else if (props.fileName === "FullStackImg")
    return <Lottie animationData={backend} />;
  else if (props.fileName === "CloudInfraImg")
    return <Lottie animationData={cloud} />;
  else if (props.fileName === "CryptoCry")
    return <Lottie animationData={crypto} />;
  return <DesignImg theme={props.theme} />;
}

function SkillSection(props) {
  const theme = props.theme;
  return (
    <div>
      {skills.data.map((skill, index) => {
        if (index % 2 === 0) {
          return (
            <div className="skills-main-div">
              <div className="skills-image-div">
                <GetSkillSvg fileName={skill.fileName} theme={theme} />
              </div>

              <div className="skills-text-div">
                <h1 className="skills-heading">{skill.title}</h1>
                <SoftwareSkill logos={skill.softwareSkills} />
                <div>
                  {skill.skills.map((skillSentence) => {
                    return (
                      <p
                        className="subTitle skills-text"
                        style={{ color: theme.secondaryText }}
                      >
                        <br />
                        {skillSentence}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="skills-main-div">
              <div className="skills-text-div">
                <h1 className="skills-heading">{skill.title}</h1>
                <SoftwareSkill logos={skill.softwareSkills} />
                <div>
                  {skill.skills.map((skillSentence) => {
                    return (
                      <p
                        className="subTitle skills-text"
                        style={{ color: theme.secondaryText }}
                      >
                        <br />
                        {skillSentence}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div className="skills-image-div">
                <GetSkillSvg fileName={skill.fileName} theme={theme} />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default SkillSection;
