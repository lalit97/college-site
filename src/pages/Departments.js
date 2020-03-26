import React from "react";

class Departments extends React.Component {
  render() {
    return (
      <section id="department">
        <div className="container">
          <ul>
            <li>
              <a href="./D_electrical.html"> Electrical Engineering</a>
            </li>
            <li>
              <a href="./D_eic.html">Electronics Inst. & Control</a>
            </li>
            <li>
              <a href="./D_cse.html">Computer Science Engineering</a>
            </li>
            <li>
              <a href="./D_mechanical.html">Mechanical Engineering</a>
            </li>
            <li>
              <a href="./D_ec.html">Electronics & Communication</a>
            </li>
            <li>
              <a href="./D_it.html">Information Technology</a>
            </li>
            <li>
              <a href="./D_civil.html">Civil Engineering</a>
            </li>
            <li>
              <a href="./D_mca.html">Dept. of MCA</a>
            </li>
            <li>
              <a href="./D_appliedscience.html">Dept. of Applied Sciences</a>
            </li>
            <li>
              <a href="./D_management.html">Dept. of Management</a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Departments;
