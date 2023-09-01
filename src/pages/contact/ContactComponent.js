import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import AddressImg from "./AddressImg";
import SocialImg from "./SocialImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import ContactForm from "./contactform";
import Stars from "../../components/Stars/Stars";
import toast, { Toaster } from "react-hot-toast";
import AlanBinuCV from "../.././assests/cv/Alan Binu-CV.pdf";

const ContactData = contactPageData.contactSection;

const GoogleMapStyle = {
  border: "green",
  borderRadius: 20,
  border: 30,
};

class Contact extends Component {
  componentDidMount() {
    document.body.style.zoom = "90%";
  }
  render() {
    const theme = this.props.theme;

    function downloadCV() {
      const apiPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ data: "okay" });
        }, 3000);
      });
      toast.promise(apiPromise, {
        loading: "Getting the file.....",
        success: "Downloading the file.....",
      });
    }
    return (
      <>
        <Stars />
        <Header theme={theme} />
        <div className="contact-heading-div">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-img-div">
              <SocialImg theme={theme} />
            </div>
            <div className="contact-heading-text-div">
              <h1 className="contact-heading-text">{ContactData["title"]}</h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                "If people like you they will listen to you, but if they trust
                you they'll do business with you."
              </p>
              <SocialMedia theme={theme} />
              <div className="resume-btn-div">
                <a
                  href={AlanBinuCV}
                  //href="https://firebasestorage.googleapis.com/v0/b/alanbinu-stripe.appspot.com/o/Alan%20Binu-CV.pdf?alt=media&token=c17cd636-1b59-459b-950a-b1768d52dd75"
                  download
                >
                  <button className="button1" onClick={downloadCV}>
                    Download My CV
                  </button>
                </a>
              </div>
              <div className="address-btn-div">
                <Button
                  text="Support by Sponsering Me on Github💝"
                  newTab={true}
                  href="https://github.com/sponsors/AlanBinu007"
                  theme={theme}
                />
                <br />
                <br />
              </div>
              <div className="resume-btn-div">
                <a href="https://consultationwithalan.web.app/" target="_blank">
                  <button className="button" style={{ marginTop: 50 }}>
                    Book 1-1 Consultation with Me
                  </button>
                </a>
              </div>
            </div>
          </Fade>{" "}
        </div>

        <br />
        <Fade bottom duration={1000} distance="40px">
          <div className="address-heading-div">
            <div className="address-heading-text-div">
              <div class="contact-section-map">
                <b>Where I'm Currently Located</b>
              </div>
              <br />
              <br />
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1531.398953095234!2d55.15812694855984!3d25.09323907121768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6be20232a78b%3A0x4f6727442f0bd497!2sDubai%20Internet%20City!5e1!3m2!1sen!2sin!4v1691376088725!5m2!1sen!2sin"
                  width="1000"
                  height="650"
                  style={GoogleMapStyle}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <br />
          </div>
          <div className="address-heading-div">
            <div className="address-heading-text-div">
              <ContactForm />
            </div>
            <div
              className="contact-heading-img-div-address"
              style={{ marginLeft: 100 }}
            >
              <AddressImg theme={theme} />
            </div>
          </div>
        </Fade>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </>
    );
  }
}

export default Contact;
