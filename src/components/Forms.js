import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Alert, Col, Row, Container, Form, Button } from "react-bootstrap";
import Country from "./Country";

const initialState = {
  name: "",
  lname: "",
  email: "",
  title: "",
  company: "",
  industry: "",
  geography: "",
  country: "",
  talk: "",
  saver: false,
  save: false,
  checkFields: false,
};

function Forms() {
  let history = useHistory();
  const [newUser, setNewUser] = useState(initialState);
  useEffect(() => {
    console.log(newUser);
    const firstUser = {
      name: "",
      lname: "",
      email: "",
      title: "",
      company: "",
      industry: "",
      geography: "",
      country: "",
      talk: "",
      saver: false,
      save: false,
      checkFields: false,
    };
    setNewUser(firstUser);
  }, []);
  const handleOnChange = (e) => {
    console.log(newUser);
    const requirementFields = [
      "name",
      "email",
      "saver",
      "company",
      "country",
      "industry",
    ];
    let isRight = false;
    const { name, value, checked } = e.target;
    console.log(value);
    if (["save", "saver"].includes(name)) {
      newUser[name] = checked;
    } else {
      newUser[name] = value;
    }
    for (const index in requirementFields) {
      const element = requirementFields[index];
      if (typeof newUser[element] === "boolean") {
        if (newUser[element]) {
          isRight = true;
        } else {
          isRight = false;
          break;
        }
      } else {
        if (newUser[element].length > 0) isRight = true;
        else {
          isRight = false;
          break;
        }
      }
    }
    newUser.checkFields = isRight;
    let newObject = Object.assign({}, newUser);

    setNewUser(newObject);
  };

  return (
    <Container>
      <Row>
        <Col lg={4}></Col>
        <Col lg={8}>
          <h1>Contact us</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <Row>
            <Alert.Heading className="address">Media enquiries:</Alert.Heading>
          </Row>
          <Row>
            <p className="address">
              <Alert.Heading>
                <a href="#" id="GFG" className="link">
                  press@modularbank.co
                </a>
              </Alert.Heading>{" "}
            </p>
          </Row>
          <Row>
            <Alert.Heading className="address">Career questions:</Alert.Heading>
          </Row>
          <Row>
            <p className="address">
              <Alert.Heading>
                <a href="#" className="link">
                  careers@modularbank.co
                </a>
              </Alert.Heading>{" "}
            </p>
          </Row>
          <p className="address">
            <Alert.Heading>
              <Row>Our offices:</Row>
              <Row>Tallinn, Estonia</Row>
              <Row>Vabaduse Workland</Row>
              <Row>Pärnu mnt 12, 10146</Row>
            </Alert.Heading>
          </p>

          <p className="address add">
            <Alert.Heading>
              <Row>Berlin, Germany</Row>
              <Row>Bikini Berlin, Scaling Spaces, 2.OG</Row>
              <Row>Budapester Str. 46</Row>
              <Row>10787 Berlin</Row>
            </Alert.Heading>
          </p>
        </Col>
        <Col lg={8}>
          <Form>
            <Row>
              <Col lg={6}>
                <Form.Group controlId="formGridEmail">
                  <Form.Label>First name*</Form.Label>
                  <Form.Control
                    onChange={handleOnChange}
                    className="control"
                    name="name"
                    type="text"
                    value={newUser.name}
                  />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group controlId="formGridPassword">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    className="control form-input"
                    onChange={(e) => handleOnChange(e)}
                    name="lname"
                    value={newUser.lname}
                    type="text"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Form.Group controlId="formGridEmail">
                  <Form.Label>Email*</Form.Label>
                  <Form.Control
                    className="control  form-input"
                    onChange={handleOnChange}
                    name="email"
                    value={newUser.email}
                    type="email"
                    placeholder=""
                  />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group controlId="formGridPassword">
                  <Form.Label>Job title</Form.Label>
                  <Form.Control
                    className="control"
                    onChange={handleOnChange}
                    name="title"
                    value={newUser.title}
                    type="text"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Form.Group controlId="formGridEmail">
                  <Form.Label>Company*</Form.Label>
                  <Form.Control
                    className="control"
                    onChange={handleOnChange}
                    name="company"
                    value={newUser.company}
                    type="text"
                  />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group controlId="formGridState">
                  <Form.Label>Industry*</Form.Label>
                  <Form.Control
                    className="control"
                    onChange={handleOnChange}
                    name="industry"
                    value={newUser.industry}
                    as="select"
                    defaultValue="Choose..."
                  >
                    <option>Other</option>
                    <option>Automotive</option>
                    <option>Banking</option>
                    <option>Consulting</option>
                    <option>Finance</option>
                    <option>Healthcare</option>
                    <option>Media/PR</option>
                    <option>Retail</option>
                    <option>Technology</option>
                    <option>Communication</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Form.Group controlId="formGridState">
                  <Form.Label>Country*</Form.Label>
                  <Country setNewUser={setNewUser} newUser={newUser} />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group controlId="formGridState">
                  <Form.Label>Operating geography</Form.Label>
                  <Form.Control
                    className="control"
                    onChange={handleOnChange}
                    name="geography"
                    value={newUser.geography}
                    as="select"
                    defaultValue="Choose..."
                  >
                    <option>N/A</option>
                    <option>National</option>
                    <option>Regional</option>
                    <option>Global</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>What would you like to talk about?</Form.Label>
                  <Form.Control
                    className="control"
                    onChange={handleOnChange}
                    name="talk"
                    value={newUser.talk}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg={10}>
                <Form.Group>
                  <Form.Row id="formGridCheckbox" className="zoreml">
                    <Form.Check
                      className="form-input"
                      onClick={handleOnChange}
                      name="saver"
                      isValid={newUser.saver}
                      type="checkbox"
                    />
                    <Form.Label>
                      By submitting this form I accept privacy policy and cookie
                      policy.
                    </Form.Label>
                  </Form.Row>
                </Form.Group>
                <Form.Row id="formGridCheckbox" className="zoreml">
                  <Form.Check
                    type="checkbox"
                    onClick={handleOnChange}
                    className=""
                    name="save"
                    isValid={newUser.save}
                  />
                  <Form.Label>
                    I would like to receive your newsletter.
                  </Form.Label>
                </Form.Row>
              </Col>
              <Col lg={2}>
                <Button
                  variant="danger"
                  type="submit"
                  onClick={() => {
                    history.push("/Success");
                  }}
                  className="custom-btn"
                  disabled={!newUser.checkFields}
                >
                  Send
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Forms;
