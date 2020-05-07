import React, { Component } from "react";

export default class Intro extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <React.Fragment>
        <section id="intro">
          <div className="intro-overlay" />
          <div className="intro-content">
            <div className="row">
              <div className="col-twelve">
                <h5>Hello, World.</h5>
                <h1>I'm {resumeData.name}.</h1>
                <p className="intro-position">
                  <span>{resumeData.role}</span>
                  <span>UI/UX Designer</span>
                </p>
                <a
                  className="button stroke smoothscroll"
                  href="#about"
                  title=""
                >
                  More About Me
                </a>
              </div>
            </div>
          </div>{" "}
          {/* /intro-content */}
          <ul className="intro-social">
            <li>
              <a href="/#">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="/#">
                <i className="fa fa-behance" />
              </a>
            </li>
            <li>
              <a href="/#">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="/#">
                <i className="fa fa-dribbble" />
              </a>
            </li>
            <li>
              <a href="/#">
                <i className="fa fa-instagram" />
              </a>
            </li>
          </ul>{" "}
          {/* /intro-social */}
        </section>{" "}
        {/* /intro */}
      </React.Fragment>
    );
  }
}
