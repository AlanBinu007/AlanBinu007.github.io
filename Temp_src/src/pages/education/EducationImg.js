import React, { Component } from "react";
import Lottie from "lottie-react";
import EduAni from "../../assests/animations/education.json";

export default class EducationImg extends Component {
  render() {
    const theme = this.props.theme;
    return <Lottie animationData={EduAni} />;
  }
}
