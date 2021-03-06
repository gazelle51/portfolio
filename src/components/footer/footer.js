import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          <div className="row">
            <div className="col-six tab-full pull-right social">
              <ul className="footer-social">
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
              </ul>
            </div>
            <div className="col-six tab-full">
              <div className="copyright">
                <span>© Copyright Kards 2016.</span>
                <span>
                  Design by <a href="http://www.styleshout.com/">styleshout</a>
                </span>
              </div>
            </div>
            <div id="go-top">
              <a className="smoothscroll" title="Back to Top" href="#top">
                <i className="fa fa-long-arrow-up" />
              </a>
            </div>
          </div>{" "}
          {/* /row */}
        </footer>
      </React.Fragment>
    );
  }
}
