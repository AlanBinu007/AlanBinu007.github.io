import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Issues from "../../containers/issues/Issues";
import TopButton from "../../components/topButton/TopButton";
import "./blog.css";
import Stars from "../../components/Stars/Stars";

class Opensource extends Component {
  componentDidMount() {
    document.body.style.zoom = "90%";
  }
  render() {
    return (
      <div className="opensource-main">
        <Stars />
        <Header theme={this.props.theme} />
        <Issues theme={this.props.theme} />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Opensource;
