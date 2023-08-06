import React, { Component } from "react";
import Lottie from "lottie-react";
import ContactAni from "../../assests/animations/Contact-ani4.json";

export default class GoogleMapImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div style={{ width: 500, height: 500 }}>
        <Lottie animationData={ContactAni} />;
      </div>
    );
  }
}
