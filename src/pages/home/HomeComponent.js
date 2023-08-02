import React, { Component } from "react";
import Header from "../../components/header/Header";
import FeelingProud from "./FeelingProud";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import Greeting from "../../containers/greeting/Greeting";

class Home extends Component {
  render() {
    console.log(this.props.theme);
    const theme = this.props.theme;

    return (
      <div>
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-text-div">
                <Greeting theme={theme} />
              </div>
              <div className="heading-img-div">
                <div style={{ width: 600, height: 600 }}>
                  <FeelingProud theme={theme} />
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Skills theme={this.props.theme} />

        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;