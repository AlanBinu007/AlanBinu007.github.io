import React, { Component } from "react";
import Lottie from "lottie-react";
import ExpAni from "../../assests/animations/experience.json";

export default class ExperienceImg extends Component {
  render() {
    const theme = this.props.theme;
    return <Lottie animationData={ExpAni} />;
  }
}
