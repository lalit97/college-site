import React, { Component } from "react";
import { connect } from "react-redux";
import { removePopup } from "../actions";

class IntroForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    };
  }

  handleChange = e => {
    const key_ = e.target.name;
    const value_ = e.target.value;
    this.setState({
      [key_]: value_
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      name: "",
      email: ""
    });
    document.getElementById("introForm").style.display = "None";
  };

  handleClick = () => {
    document.getElementById("introForm").style.display = "None";
  };

  render() {
    return (
      <div id="introForm">
        <form className="form-signin popup" onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>{" "}
          <button
            className="btn btn-primary"
            type="button"
            onClick={this.handleClick}
          >
            Close Me
          </button>{" "}
        </form>
      </div>
    );
  }
}

export default IntroForm;
