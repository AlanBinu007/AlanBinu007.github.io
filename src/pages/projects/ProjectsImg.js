import React from "react";
import Lottie from "lottie-react";
import ProjectAni from "../../assests/animations/Work-ani.json";

export default function ProjectsImg(props) {
  const theme = props.theme;
  return <Lottie animationData={ProjectAni} />;
}
