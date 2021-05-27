import React, { useState } from "react";
import "../App.css";
import FlagIcon from "./FlagIcon.js";
import { Form, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getCountries } from "../helper";

const Country = (props) => {
  const [countries] = useState(getCountries());

  const [toggleContents, setToggleContents] = useState("N/A");
  const [selectedCountry, setSelectedCountry] = useState();
  return (
    <Form>
      <Dropdown
        onSelect={(eventKey) => {
          const { code, title } = countries.find(
            ({ code }) => eventKey === code
          );

          setSelectedCountry(eventKey);
          let newUser = props.newUser;
          newUser.country = eventKey;
          props.setNewUser(newUser);
          setToggleContents(
            <>
              <FlagIcon code={code} /> {title}
            </>
          );
        }}
      >
        <Dropdown.Toggle
          variant="light"
          id="dropdown-flags"
          className="text-left col border-0 rounded-0"
        >
          {toggleContents}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {countries.map(({ code, title }) => (
            <Dropdown.Item key={code} eventKey={code}>
              <FlagIcon code={code} /> {title}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Form>
  );
};
export default Country;
