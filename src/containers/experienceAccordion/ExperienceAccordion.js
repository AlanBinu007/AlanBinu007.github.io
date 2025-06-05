import React, { Component } from "react";
import "./exp.css";
import { Fade, Flip } from "react-reveal";

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
            <div class="timeline-wrap">
              <div class="timeline-block">
                <div class="timeline-ico">
                  <i class="fa fa-briefcase" aria-hidden="true"></i>
                </div>

                <div class="timeline-header">
                  <h3>
                    <a href="https://voipbird.com/" target="_blank">
                      <h5 class="resume-title">Voipbird IT</h5>
                    </a>
                  </h3>
                  <i>November 2023 - till now</i>
                  <br />
                  <i>Dubai, UAE</i>
                  <br />
                  <br />
                </div>

                <div class="timeline-content">
                  <h3>
                    <h5 class="resume-title">Senior Software Engineer</h5>
                  </h3>
                  <ul className="ulclass">
                    <li className="liclass">
                      Designed, developed, and deployed 5+ mission-critical
                      applications to support core business operations,
                      including CRM systems, auto-dialers, call recording
                      platforms, and DNCR compliance tools, managing 15+ clients
                      independently.
                    </li>
                    <li className="liclass">
                      Achieved 100% compliance success rate with telecom
                      regulations by engineering a fully automated DNCR (Do Not
                      Call Registry) compliance solution.
                    </li>
                    <li className="liclass">
                      Increased client productivity by 25% through the
                      development and implementation of a custom CRM system
                      tailored to streamline workflows and customer engagement.
                    </li>
                    <li className="liclass">
                      Restructured communication flow across 5-10 departments
                      using a centralized auto-dialer system, leading to a 75%
                      reduction in paperwork and significantly improved
                      interdepartmental coordination.
                    </li>
                    <li className="liclass">
                      Developed secure call recording platforms that
                      automatically send recordings to banks per regulatory
                      requirements, reducing manual effort by 10-15% and
                      enhancing audit efficiency.
                    </li>
                    <li className="liclass">
                      Maintained and optimized the organization’s full technical
                      infrastructure—including databases, backend services,
                      frontend applications, API integrations, and CI/CD
                      pipelines ensuring 99.9% uptime and system reliability.
                    </li>
                    <li className="liclass">
                      Acted as the sole technical point of contact, gathering
                      requirements from stakeholders and clients, translating
                      them into scalable, high-performance software solutions.
                    </li>
                    <li className="liclass">
                      Led QA efforts including unit, regression, and user
                      acceptance testing to ensure stable, bug-free releases and
                      smooth post-deployment operations.
                    </li>
                    <li className="liclass">
                      Created and maintained structured technical documentation
                      covering system architecture, workflows, and
                      troubleshooting guides, supporting long-term
                      maintainability and scalability.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="timeline-block">
                <div class="timeline-ico">
                  <i class="fa fa-briefcase" aria-hidden="true"></i>
                </div>

                <div class="timeline-header">
                  <h3>
                    <a href="https://www.tcs.com" target="_blank">
                      <h5 class="resume-title">Tata Consultancy Services</h5>
                    </a>
                  </h3>
                  <i>September 2022 - Januvary 2023</i>
                  <br />
                  <i>Kochi, Kerala, India</i>
                  <br />
                </div>

                <div class="timeline-content">
                  <h3>
                    <h5 class="resume-title">Software Engineer</h5>
                  </h3>
                  <ul className="ulclass">
                    <p>
                      Client : <i>WALGREENS</i> (Second-largest pharmacy store
                      chain in the United State)
                      <br />
                    </p>
                    <li className="liclass">
                      Worked as a Java backend developer in MWS (Mobile Web
                      Service) team with apps that build on Microservice
                      Architecture.
                    </li>
                    <li className="liclass">
                      Worked with the dev team to fix customer problems.
                    </li>
                    <li className="liclass">
                      Help the team to fix and modify the cloud Azure
                      works/problems
                    </li>
                  </ul>
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
                  <i>Pune, Maharashtra, India</i>
                  <br />
                </div>

                <div class="timeline-content">
                  <h3>
                    <h5 class="resume-title">Full Stack Engineer</h5>
                  </h3>
                  <ul className="ulclass">
                    <p>
                      Client : <i>HSBC</i> (Hongkong and Shanghai Banking
                      Corporation) 6th largest multinational investment bank and
                      financial services holding company
                      <br />
                    </p>
                    <li className="liclass">
                      Deals with Full Stack Spring with React for the LoanIQ
                      Development team.
                    </li>
                    <li className="liclass">
                      Working as a Full Stack Engineer with ReactJs and Spring
                      boot in HSBC for LoanIQ UK team for Core Banking Systems
                      with apps that build on Microservice Architecture.
                    </li>
                    <li className="liclass">
                      Organized and leaded cross-functional problem solving
                      teams through root cause identification, verification and
                      corrective action steps including preventive actions
                    </li>
                    <li className="liclass">
                      Created a new way of log extraction all over the LoanIQ
                      team for faster development and process requirement and it
                      is widely used across the team.
                    </li>
                    <li className="liclass">
                      Created a React project that help to deploy the Control-M
                      jobs to live within seconds, thus increased the
                      productivity across the team using Spring boot, Spring
                      Security, Hibernate and MySQL.
                    </li>
                    <li className="liclass">
                      Helped the team to solve the Apache Httpd server crash
                      issue in US region and also created a new J2EE application
                      to monitor Httpd Apache server in every 5 min in Control-m
                      and get alerts by mail.
                    </li>
                    <li className="liclass">
                      Successful transformed Control-m jobs fetcher application
                      from JSP, InfluxDb stack to React, MongoDB which cut
                      latency and increase the overall performance.
                    </li>
                  </ul>
                </div>
              </div>
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
                    <ul className="ulclass">
                      <li className="liclass">
                        Santhisoft is a software product development company in
                        Kerala, India, incorporated in 2005 and is managed by
                        CMI congregation. Apart from software product
                        development, company offers customized software
                        solutions, IT consultancy services and training to their
                        customers.
                      </li>
                      <li className="liclass">
                        I worked here for 5 months for my major project which
                        includes the technologies like Java, JSP, HTML, CSS,
                        MySql, Bootstrap and PHP
                      </li>
                    </ul>
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
                    <ul className="ulclass">
                      <li className="liclass">
                        Mainly we provide Web Application with online payment
                        and online database for securing the data
                      </li>
                      <li className="liclass">
                        Wholesale and retail of computer parts.
                      </li>
                      <li className="liclass">
                        We are also providing computer repare facility.
                      </li>
                    </ul>
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
                    <i clas="vv">Consultant</i>
                  </h3>
                  <i>June 2021 to till now</i>
                  <br />
                </div>

                <div class="timeline-content">
                  <h3>
                    <i>1 to 1 Consultation</i>
                  </h3>
                  Providing guidance and support to students can greatly enhance
                  their chances of succeeding in their chosen careers
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
