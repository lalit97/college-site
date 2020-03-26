import React from "react";
import IntroForm from "../components/IntroForm";
import { connect } from "react-redux";
import { removePopup } from "../actions";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    };
  }

  renderForm = () => {
    this.setState({
      showForm: true
    });
  };

  componentDidMount() {
    if (!this.state.showForm) {
      setTimeout(this.renderForm, 2000);
    }
    console.log("meme");
    //    this.props.removePopup();
  }

  // UNSAFE_componentWillReceiveProps(newProps) {
  //   const item = newProps.show[0].show;
  //   this.setState({
  //     blockPopup: item
  //   });
  // }

  render() {
    var introForm;
    if (this.state.showForm) {
      introForm = <IntroForm />;
    } else {
      introForm = " ";
    }

    return (
      <React.Fragment>
        <section id="showcase">
          <div className="container"></div>
        </section>

        {introForm}

        <section id="main">
          <div className="container">
            <article id="main-col">
              <h1>About Us</h1>
              <p>
                Govt. Engineering College Bikaner, established in 1999 is one of
                the renowned institutions in the field of Engineering and
                Management. Approximately 3500 students are presently studying
                in the college. College possesses 337 bighas of land on which
                construction work has been accomplished on 6 lac square feet.
                The college is running the courses like B. Tech,M.Tech, MBA,
                MCA, M. Sc. (CS), BBA, BCA and PhD.
              </p>

              <p>
                Result oriented committed Faculty Members, Excellent Placement,
                Centre for Ethics and Indian Management, magnificent computer
                laboratories, gymnasium, cafeteria etc are salient features of
                this college. College is running an NABL accredited Ceramic,
                Electrical Research Laboratories in campus.
              </p>

              <p>
                Faculty members of this esteemed institution are providing
                consultancy services to business houses. For overall academic
                development of faculty members, college has conducted many short
                term courses on current technical topics, Communication Skills
                and on entrepreneurship etc.
              </p>

              <h1>Salient Features</h1>

              <ul>
                <li>100% Placement Assistance.</li>
                <li>
                  Fee Assistance - Scholarship Scheme as per State Govt. Rules.
                </li>
                <li>All Department have seperate equipped labs.</li>
                <li>
                  Library with 1 Lacs books and 300 educational CD,DVD of IIT
                  Professors,Indest Faculties.
                </li>
                <li>700 intel I-7 computer with internet facility.</li>
                <li>Lecturer by eminent subject experts.</li>
                <li>Transport Facilities ( 9 Buses).</li>
                <li>NCC & NSS wing for boys & girls.</li>
                <li>TEQIP Projects.</li>
                <li>Incubation Center.</li>
              </ul>

              <h1>Establishment</h1>

              <p>
                This academy of technical education took its foundation stone on
                the auspicious day of 10th November 2000. Since then, it is
                stretching its excellence towards greater heights by each
                passing time capsule. As in the first session, there were two
                branches viz., CSE and ECE filling total 120 seats, with the
                solidity of roots, in the session 2002-2003, the college took
                its first extension, with introduction of four new branches and
                intake increasing to 390. At present the college provides PG
                courses in Management (MBA) & Computer Applications (MCA ) along
                with B. Tech in Seven disciplines – CSE, ECE, EE, IT, ME , EI&CE
                & Civil Engineering,M.Tech & PhD with the Total intake of 630
                Students.
              </p>
            </article>

            <aside id="sidebar">
              <div className="dark">
                <dl>
                  <dt>
                    <h1>Admissions 2018-19</h1>
                  </dt>
                  <dd>
                    <ul>
                      <li>
                        <a href="{}">Direct admission announcement</a>
                      </li>
                      <li>
                        <a href="{}">
                          Application Form for B. Tech. Ist Year Direct
                          Admission 2018-19
                        </a>
                      </li>
                      <li>
                        <a href="{}">
                          General Instructions for B. Tech. Ist Year Direct
                          Admission/Spot Round 2018-19
                        </a>
                      </li>
                      <li>
                        <a href="{}">
                          Extension of last date for online fees deposition
                        </a>
                      </li>
                    </ul>
                  </dd>
                </dl>
              </div>
            </aside>
          </div>
        </section>
        <section id="recruiter">
          <div className="container">
            <div id="heading_1">
              <h1>Our Recruiters</h1>
            </div>
            <div id="images_1">
              <ul>
                <li>
                  <img alt={"not found"} src={"./images/a.png"} />
                </li>
                <li>
                  <img alt={"not found"} src={"./images/b.png"} />
                </li>
                <li>
                  <img alt={"not found"} src={"./images/c.png"} />
                </li>
                <li>
                  <img alt={"not found"} src={"./images/d.png"} />
                </li>
                <li>
                  <img alt={"not found"} src={"./images/e.png"} />
                </li>
                <li>
                  <img alt={"not found"} src={"./images/f.png"} />
                </li>
                <li>
                  <img alt={"not found"} src={"./images/g.png"} />
                </li>
                <li>
                  <img alt={"not found"} src={"./images/h.jpg"} />
                </li>
                <li>
                  <img alt={"not found"} src={"./images/i.jpg"} />
                </li>
              </ul>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Main;
