import React from "react";
import "./LoaderLogo.css";
import Lottie from "lottie-react";
import Loading from "../../assests/animations/loading1.json";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;

    return (
      <>
        <div id="text" style={{ marginTop: 125 }}>
          <span>No Matter How Hard It Is ,</span> Just Keep Going
        </div>
        <div style={{ width: 30, height: 30 }}>
          <Lottie animationData={Loading} />
        </div>
      </>
    );
  }
}

export default LogoLoader;
