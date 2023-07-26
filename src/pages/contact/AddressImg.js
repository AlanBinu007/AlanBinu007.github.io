import React, { Component } from "react";
import Lottie from "lottie-react";
import ContactAni from "../../assests/animations/Contact-ani.json";

export default class AddressImg extends Component {
  render() {
    const theme = this.props.theme;
    return <Lottie animationData={ContactAni} />;
  }
}
