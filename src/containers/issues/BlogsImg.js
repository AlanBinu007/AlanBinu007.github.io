import React, { Component } from "react";
import Lottie from "lottie-react";
import BlogAni from "../../assests/animations/Blog-ani.json";

export default class BlogsImg extends Component {
  render() {
    const theme = this.props.theme;
    return <Lottie animationData={BlogAni} />;
  }
}
