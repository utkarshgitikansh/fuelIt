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
export const Cards = (props) => (
  <Card class="card">
    <Card.Img />
    <Card.Body>
      <Card.Title>{props.value1}</Card.Title>
      <Card.Text>
        <p>{props.value2}</p>

        <p>{props.value3}</p>

        <p>{props.value4}</p>
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
);
