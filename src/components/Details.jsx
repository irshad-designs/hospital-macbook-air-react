import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

import report from "../assets/report.png";
const Details = () => {
  return (
    <div>
      <Form className="details__form" style={{ marginTop: "5rem" }}>
        <Row className="mb-4">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Gender</Form.Label>
            <Form.Control type="gender" placeholder="female" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Birth Day</Form.Label>
            <Form.Control type="date" placeholder="Feb 24th, 1997" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="(239) 555 -0108" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Registered Date</Form.Label>
            <Form.Control type="date" placeholder="Feb 24th, 1997" />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Street Address</Form.Label>
            <Form.Control type="text" placeholder="JL. Diponegoro No. 21" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="New york" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="number" placeholder="695591" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Member Status</Form.Label>
            <Form.Control type="text" placeholder="happy" />
          </Form.Group>
        </Row>
        <div className="details__buttons">
          <Button variant="light">Upcoming Appointments</Button>
          <Button variant="light">Past Appointments</Button>
          <Button variant="light">Medical Records</Button>
        </div>
      </Form>
      <div className="details__list">
        <div className="details__list_heading">
          <h6>Root Canal Treatment</h6>
          <h6>Show Previous Treatments</h6>
        </div>
        <div className="details__content">
          <div>
            <h2>26 Nov ‘19</h2>
            <p>09.00 - 10.00</p>
          </div>
          <div style={{ border: "1px solid grey", height: "35px" }}></div>
          <div>
            <p>Treatment</p>
            <h6>Open Access</h6>
          </div>
          <div style={{ border: "1px solid grey", height: "35px" }}></div>
          <div>
            <p>Dentist</p>
            <h6>Drg. Adam H.</h6>
          </div>
          <div>
            <p>Nurse</p>
            <h6>Jessicamila</h6>
          </div>
          <div>
            <a>
              <img src={report} alt="report" />
              Note
            </a>
          </div>
        </div>
        <div className="details__content">
          <div>
            <h2>26 Nov ‘19</h2>
            <p>09.00 - 10.00</p>
          </div>
          <div style={{ border: "1px solid grey", height: "35px" }}></div>
          <div>
            <p>Treatment</p>
            <h6>Open Access</h6>
          </div>
          <div style={{ border: "1px solid grey", height: "35px" }}></div>
          <div>
            <p>Dentist</p>
            <h6>Drg. Adam H.</h6>
          </div>
          <div>
            <p>Nurse</p>
            <h6>Jessicamila</h6>
          </div>
          <div>
            <a>
              <img src={report} alt="report" />
              Note
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
