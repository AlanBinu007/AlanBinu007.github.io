import React, { Component } from "react";
import Lottie from "lottie-react";
import ContactAni from "../../assests/animations/email.json";

export default class SocialImg extends Component {
  render() {
    return <Lottie animationData={ContactAni} />;
  }
}
