import React from "react";

class ContactUs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section id="contact">
          <div className="container">
            <table>
              <tr>
                <th>Contact Address College</th>
              </tr>
              <tr>
                <td>
                  KARNI INDUSTRIAL AREA, <br />
                  PUGAL ROAD BIKANER (RAJASTHAN)
                  <br />
                  PIN CODE 334004
                  <br />
                  Contact : +91-0151 2253404
                  <br />
                  FAX : +91-0151 2252919
                  <br />
                  Email: principal@ecb.ac.in, gecb.principal@gmail.com <br />
                </td>
              </tr>
              <tr>
                <th>Contact - Admission Related Enquiry</th>
              </tr>
              <tr>
                <td>
                  Dr Mahendra Vyas : 9785636408
                  <br />
                  Dr Subhash Panwar : 9928589444
                  <br />
                  Dr Atul Goswami: 9413726946
                  <br />
                </td>
              </tr>
            </table>
          </div>
        </section>

        <section id="map">
          <div className="container">
            <iframe
              title={"my-title"}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.8341662336334!2d73.2921110500548!3d28.060087682561946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6adbe0a7c29%3A0xc45e43813e5ac1e0!2sGovernment+Engineering+College+Bikaner!5e0!3m2!1sen!2sin!4v1537188507830"
              width="1200"
              height="300"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ContactUs;
