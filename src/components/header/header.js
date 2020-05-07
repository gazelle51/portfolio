import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <div className="row">
            <div className="top-bar">
              <a className="menu-toggle" href="/#">
                <span>Menu</span>
              </a>
              <div className="logo">
                <a href="index.html">KARDS</a>
              </div>
              <nav id="main-nav-wrap">
                <ul className="main-navigation">
                  <li className="current">
                    <a className="smoothscroll" href="#intro" title="title">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="smoothscroll" href="#about" title="title">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="smoothscroll" href="#resume" title="title">
                      Resume
                    </a>
                  </li>
                  <li>
                    <a className="smoothscroll" href="#portfolio" title="title">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a className="smoothscroll" href="#services" title="title">
                      Services
                    </a>
                  </li>
                  <li>
                    <a className="smoothscroll" href="#contact" title="title">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* /top-bar */}
          </div>
          {/* /row */}
        </header>{" "}
        {/* /header */}
      </React.Fragment>
    );
  }
}