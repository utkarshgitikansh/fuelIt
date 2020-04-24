import React from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
export const Forms = (props) => (
  <div class="form-class">
    <Form onSubmit={props.handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Fuel Type</Form.Label>
        <Form.Control type="text" placeholder="Enter fuel type" />
        <Form.Text className="text-muted">
          We are currently delivering Diesel.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Fuel capacity</Form.Label>
        <Form.Control type="text" placeholder="Enter fuel capacity" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Type of vehicle</Form.Label>
        <Form.Control type="text" placeholder="Enter type of vehicle" />
      </Form.Group>
      <Button variant="primary" type="submit">
        FuelIt
      </Button>
    </Form>
  </div>
);
