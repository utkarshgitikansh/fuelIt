import React from "react";
import styled from "styled-components";
import { Card, Button } from "react-bootstrap";
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
export const CardsForm = (props) => (
  <Card>
    <Card.Img />
    <Card.Body>
      <Card.Title>
        <b>{props.value1}</b>
      </Card.Title>
      <Card.Text>
        <h5>Fuel type : {props.value2}</h5>

        <h5>Fuel capacity :{props.value3}</h5>

        <h5>Customer vehicle :{props.value4}</h5>

        <h5>Customer Name :{props.value5}</h5>

        <h5>Address :{props.value6}</h5>
      </Card.Text>

      {/* <Button variant="primary">Go somewhere</Button> */}
    </Card.Body>
  </Card>
);
