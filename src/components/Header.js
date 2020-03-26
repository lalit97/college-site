import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="top">
          <div className="container"></div>
        </div>
        <header>
          <div className="container">
            <nav>
              <ul>
                <li className="current">
                  <Link to="/">
                    <a href="index.html">Home</a>
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <a href="about.html">About</a>
                  </Link>
                </li>
                <li>
                  <Link to="/departments">
                    <a href="departments.html" id="departments">
                      Departments
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="contact">
                    <a href="contact_us.html">Contact Us</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
