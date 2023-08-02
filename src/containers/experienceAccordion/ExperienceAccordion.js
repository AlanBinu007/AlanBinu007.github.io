import React, { Component } from "react";
import "./exp.css";
import { Fade, Flip } from "react-reveal";
import infosys from "./infosys.jpg";
import indel from "./Indel.png";
import santhisoft from "./santhisoft.png";
import webtechsolutions from "./webtechsolutions.png";

class ExperienceAccordion extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    return (
      <>
        <Fade bottom duration={2000} distance="40px">
          <div class="container">
            <center>
              <h2>Work Experience</h2>
            </center>
            <br />
            <div class="col-twelve"></div>
            <div class="timeline-wrap">
              <div class="timeline-block">
                <div class="timeline-ico">
                  <i class="fa fa-briefcase" aria-hidden="true"></i>
                </div>

                <div class="timeline-header">
                  <h3>
                    <a href="https://www.tcs.com" target="_blank">
                      <h5 class="resume-title">TCS</h5>
                    </a>
                  </h3>
                  <i>September 2022 - January 2023</i>
                  <br />
                  <i>Full Time</i>
                  <br />
                </div>

                <div class="timeline-content">
                  <h3>
                    <h5 class="resume-title">Java Develoer</h5>
                  </h3>

                  <p>
                    Client : <i>WALGREENS</i> (Second-largest pharmacy store
                    chain in the United State)
                    <br />
                    <br />
                    Worked as a Java backend developer in MWS (Mobile Web
                    Service) team with apps that <br />
                    build on Microservice Architecture.
                    <br />
                    Worked with the dev team to fix customer problems.
                    <br />
                    Help the team to fix and modify the cloud Azure
                    works/problems
                    <br />
                    <br />
                  </p>
                  {/* <div class="col-lg-4">
                <a
                  href="https://drive.google.com/file/d/1HgJlOEPPkcZ6e_-zbNfHaSTpBsx4NxJg/view?usp=sharing"
                  target="_blank"
                >
                  <div class="blog-item-wrapper">
                    <div class="blog-item-img">
                      <img src={infosys} alt="" width="150" height="200"/>
                    </div>
                  </div>
                </a>
                </div> */}
                </div>
              </div>
              <div class="timeline-block">
                <div class="timeline-ico">
                  <i class="fa fa-briefcase" aria-hidden="true"></i>
                </div>

                <div class="timeline-header">
                  <h3>
                    <a href="https://www.infosys.com" target="_blank">
                      <h5 class="resume-title">Infosys ltd</h5>
                    </a>
                  </h3>
                  <i>August 2020 - August 2022</i>
                  <br />
                  <i>Full Time</i>
                  <br />
                </div>

                <div class="timeline-content">
                  <h3>
                    <h5 class="resume-title">Full Stack Engineer</h5>
                  </h3>

                  <p>
                    Client : <i>HSBC</i> (Hongkong and Shanghai Banking
                    Corporation) 6th largest <br />
                    multinational investment bank and financial services holding
                    company
                    <br />
                    <br />
                    Deals with Full Stack Spring with Raect for the LoanIQ
                    Development team.
                    <br />
                    *Working as a Full Stack Engineer with ReactJs and Spring
                    boot in HSBC for LoanIQ <br />
                    UK team for Core Banking Systems with apps that build on
                    Microservice Architecture.
                    <br />* Organized and leaded cross-functional problem
                    solving teams through root cause <br />
                    identification, verification and corrective action steps
                    including preventive actions
                    <br />* Created a new way of log extraction all over the
                    LoanIQ team for faster <br />
                    development and process <br /> requirement and it is widely
                    used across the team.
                    <br />* Created a React project that help to deploy the
                    Control-M jobs to live within seconds,
                    <br /> thus increased the productivity across the team.
                    <br />* Created a new setup to monitor Httpd server in every
                    5 min in Control-m to fix the <br />
                    Apache Server crash notification
                    <br />* Successful transformed Control-m jobs fetcher
                    application from JSP, InfluxDb stack <br />
                    to React, MongoDB which recrease the latency and increased
                    effectiveness of database.
                  </p>

                  {/* <div class="col-lg-4">
                <a
                  href="https://drive.google.com/file/d/1HgJlOEPPkcZ6e_-zbNfHaSTpBsx4NxJg/view?usp=sharing"
                  target="_blank"
                >
                  <div class="blog-item-wrapper">
                    <div class="blog-item-img">
                      <img src={infosys} alt="" width="150" height="200"/>
                    </div>
                  </div>
                </a>
                </div> */}
                </div>
              </div>
              {/* <div class="timeline-block">
                  <div class="timeline-ico">
                    <i class="fa fa-briefcase" aria-hidden="true"></i>
                  </div>

                  <div class="timeline-header">
                    <h3>
                    <a href="https://www.indelsystems.in" target="_blank"><h5 class="resume-title">Indel Systems</h5></a>
                    </h3>
                    <i>April 2020 - August 2020</i>
                    <br />
                    <i>Full Time</i>
                    <br />
                  </div>

                  <div class="timeline-content">
                    <h3>
                      <h5 class="resume-title">Software Developer - Trainee</h5>
                    </h3>

                    <p>
                      Worked in the Java backend for Gold Loan Application
                      <br />
                    </p>
                    <div class="col-lg-4">
                <a
                  href="https://drive.google.com/file/d/1HmPMcyttoXFJZbP16Xgb4iSlGKDKyN5g/view?usp=sharing"
                  target="_blank"
                >
                  <div class="blog-item-wrapper">
                    <div class="blog-item-img">
                      <img src={indel} alt="" width="150" height="200"/>
                    </div>
                  </div>
                </a>
                </div>
                  </div>
                </div> */}

              <div class="timeline-block">
                <div class="timeline-block">
                  <div class="timeline-ico">
                    <i class="fa fa-briefcase" aria-hidden="true"></i>
                  </div>

                  <div class="timeline-header">
                    <h3>
                      <a href="http://santhisoft.com/" target="_blank">
                        <h5 class="resume-title">Santhisoft Technologies</h5>
                      </a>
                    </h3>
                    <i>November 2019 - March 2020</i>
                    <br />
                    <i>Internship</i>
                    <br />
                  </div>

                  <div class="timeline-content">
                    <h3>
                      <h5 class="resume-title">Software Developer - Intern</h5>
                    </h3>

                    <p>
                      Santhisoft is a software product development company in
                      Kerala, India, incorporated <br />
                      in 2005 and is managed by CMI congregation. Apart from
                      software product development, <br />
                      company offers customized software solutions, IT
                      consultancy services and training to <br />
                      their customers.
                      <br />I worked here for 5 months for my major project
                      which includes the technologies <br /> like Java, JSP,
                      HTML, CSS, MySql, Bootstrap and PHP
                      <br />
                    </p>
                    {/* <div class="col-lg-4">
                <a
                  href="https://drive.google.com/file/d/1uxuRJcwtbE48p61CzSI7XH71h4Lljgu9/view?usp=sharing"
                  target="_blank"
                >
                  <div class="blog-item-wrapper">
                    <div class="blog-item-img">
                      <img src={santhisoft} alt="" width="150" height="200"/>
                    </div>
                  </div>
                </a>
                </div> */}
                  </div>
                </div>

                <div class="timeline-block">
                  <div class="timeline-ico">
                    <i class="fa fa-briefcase" aria-hidden="true"></i>
                  </div>

                  <div class="timeline-header">
                    <h3>
                      <a
                        href="https://web-tech-solutions.web.app/"
                        target="_blank"
                      >
                        <h5 class="resume-title">Web Tech Solutions</h5>
                      </a>
                    </h3>
                    <i>Januvary 2017 - February 2020</i>
                    <br />
                    <i>Freelancer</i>
                    <br />
                  </div>

                  <div class="timeline-content">
                    <h3>
                      <h5 class="resume-title">Founder</h5>
                    </h3>

                    <p>
                      Mainly we provide Web Application with online payment and
                      online database for <br />
                      securing the data, System Softwares, Desktops, Laptops and
                      we are also providing
                      <br /> computer repare facility.
                      <br />
                    </p>
                    <div class="col-lg-4">
                      {/* <div class="blog-item-wrapper">
                    <div class="blog-item-img">
                      <img src={webtechsolutions} alt="" width="250" height="150"/>
                    </div>
                  </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <center>
              <h2>
                <i class="vv">Volunteer Experience</i>
              </h2>
            </center>
            <br />
            <div class="col-twelve"></div>
            <div class="timeline-wrap">
              <div class="timeline-block">
                <div class="timeline-ico">
                  <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                </div>

                <div class="timeline-header">
                  <h3>
                    <i clas="vv">Participants</i>
                  </h3>
                  <i>June 2021</i>
                  <br />
                </div>

                <div class="timeline-content">
                  <h3>
                    <i>Google Developer Student Clubs</i>
                  </h3>
                  Successfully Participated in Google Developer Student Clubs
                  <br />
                  <br />
                </div>
              </div>
              <div class="timeline-block">
                <div class="timeline-ico">
                  <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                </div>

                <div class="timeline-header">
                  <h3>
                    <i>Code Contributor</i>
                  </h3>
                  <i>May 2021</i>
                  <br />
                </div>

                <div class="timeline-content">
                  <h3>
                    <i>Leet Code</i>
                  </h3>
                  Contribute codes for some problems
                  <br />
                  <br />
                </div>
              </div>
              <div class="timeline-block">
                <div class="timeline-ico">
                  <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                </div>

                <div class="timeline-header">
                  <h3>
                    <i>
                      HR Assistant for <br />
                      Off Campus Drive
                    </i>
                  </h3>
                  <i>April 2021</i>
                  <br />
                </div>

                <div class="timeline-content">
                  <h3>
                    <i>Infosys, Pune</i>
                  </h3>
                  Support the HR for Conducteting the Campus Drive
                  <br /> I worked as an assistant for following up each and
                  every candidate
                  <br />
                  <br />
                </div>
              </div>
              <div class="timeline-block">
                <div class="timeline-ico">
                  <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                </div>

                <div class="timeline-header">
                  <h3>
                    <i>GitHub Contributor</i>
                  </h3>
                  <i>July 2019</i>
                  <br />
                </div>

                <div class="timeline-content">
                  <h3>
                    <i>private IT Clubs </i>
                  </h3>
                  Contributed codes for Various organization and also support
                  for solving some
                  <br /> of my colleagues code issues
                  <br />
                  <br />
                </div>
              </div>

              <div class="timeline-block">
                <div class="timeline-ico">
                  <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                </div>

                <div class="timeline-header">
                  <h3>
                    <i>Software Support Volunteer</i>
                  </h3>
                  <i>February 2019</i>
                  <br />
                </div>

                <div class="timeline-content">
                  <h3>
                    <i>Santhigiri Institude Of Management, Vazhithala</i>
                  </h3>
                  Volunteered as a Software Support in a Mega Job Fair with
                  consist of 50+
                  <br /> companies and 2500+ Candidates
                  <br />
                  <br />
                </div>
              </div>

              <div class="timeline-block">
                <div class="timeline-ico">
                  <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                </div>

                <div class="timeline-header">
                  <h3>
                    <i>Seminar Co-ordinator</i>
                  </h3>
                  <i>October 2019 </i>
                  <br />
                </div>

                <div class="timeline-content">
                  <h3>
                    <i>Santhigiri College of Computer Sciences, Vazhithala</i>
                  </h3>
                  I carry out one of the role for taking an excel
                  project/seminar for our junior <br />
                  students in my college as a foundation step for their career
                  <br />
                </div>
              </div>
              <div class="timeline-block">
                <div class="timeline-ico">
                  <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                </div>

                <div class="timeline-header">
                  <h3>
                    <i>
                      Computer Hardware <br />
                      Explanation
                    </i>
                    <i>and Assembly</i>
                  </h3>
                  <i>August 2018</i>
                  <br />
                </div>
                <div class="timeline-content">
                  <h3>
                    <i>Santhigiri College of Computer Sciences, Vazhithala</i>
                  </h3>

                  <p>
                    Conducted one day seminar to the junior students about the
                    computer <br />
                    hardware, hands-on experience, specification and assemblying
                    like cpu, ram,
                    <br /> bios etc...
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </>
    );
  }
}

export default ExperienceAccordion;
