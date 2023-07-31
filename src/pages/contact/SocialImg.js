import React, { Component } from "react";
import Lottie from "lottie-react";
import ContactAni from "../../assests/animations/Contact-ani1.json";

export default class SocialImg extends Component {
  render() {
    return <Lottie animationData={ContactAni} />;
  }
}
