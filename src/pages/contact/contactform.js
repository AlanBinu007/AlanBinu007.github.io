import React, { Component } from "react";
import emailjs from "emailjs-com";
import "./contactform.css";
import swal from "sweetalert";

export default class ContactForm extends Component {
  render() {
    var flag = 0;
    function sendEmail(e) {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_84joz9v",
          "template_vmt95lh",
          e.target,
          "IEGfeMtwgbnEJludb"
        )
        .then(
          (result) => {
            swal(
              "Email Send Sucessfully!",
              "I will replay to you as soon as i possible",
              "success"
            );
          },
          (error) => {
            swal("Error!", "Try After Some Time!", "error");
          }
        );
      e.target.reset();
    }
    return (
      <>
        <div class="contact-section">
          <br />
          <br />
          <b>I'd love to hear from you</b>
          <br />
          <br />
          <form class="contact-form" onSubmit={sendEmail}>
            <br />
            <input
              type="text"
              name="name"
              class="contact-form-text"
              placeholder="Name"
              required
            />
            <br />
            <input
              type="email"
              name="email"
              class="contact-form-text"
              placeholder="Email"
              required
            />
            <br />

            <input
              type="text"
              name="subject"
              class="contact-form-text"
              placeholder="Subject"
              required
            />
            <br />

            <textarea
              class="contact-form-text"
              name="message"
              placeholder="Message"
              required
            ></textarea>
            <br />

            <input type="submit" class="contact-form-btn" value="Send" />
            <br />
            <br />
            <br />
            <br />
          </form>
        </div>
      </>
    );
  }
}
