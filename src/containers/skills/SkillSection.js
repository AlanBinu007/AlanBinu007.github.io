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
import HomeAni1 from "../../assests/animations/Home-ani1.json";
import HomeAni2 from "../../assests/animations/Home-ani2.json";
import HomeAni3 from "../../assests/animations/Home-ani3.json";
import HomeAni4 from "../../assests/animations/Home-ani9.json";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <Lottie animationData={HomeAni2} />;
  else if (props.fileName === "FullStackImg")
    return <Lottie animationData={HomeAni1} />;
  else if (props.fileName === "CloudInfraImg")
    return <Lottie animationData={HomeAni3} />;
  else if (props.fileName === "CryptoCry")
    return <Lottie animationData={HomeAni4} />;
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
