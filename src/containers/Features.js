import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;

export const COLOR = {
  bgColor: `#fe4a49`,
  bgColor2: `#fff`,
};

export const Features = () => (
  // Services component
  <Card>
    <Card.Img />
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
        <div class="d-flex flex-row">
          <div class="feature">
            <h5
              style={{
                color: COLOR.bgColor,
              }}
            >
              <b>Industries Services</b>
            </h5>
            <br />
            <ul> Real Estate &#8211; Commercial &#038; Residential</ul>{" "}
            <p>
              <ul>Hotels</ul>
            </p>
            <p>
              <ul>Schools &#038; Universities</ul>
            </p>
            <p>
              <ul>Manufacturing </ul>
            </p>
            <p>
              <ul>Logistics</ul>
            </p>
            <p>
              <ul>Infrastructure</ul>
            </p>
          </div>
          <div class="feature2">
            <img class="image" src="delivery_truck.png" />
          </div>
        </div>
      </Card.Text>

      {/* <Button variant="primary">Go somewhere</Button> */}
    </Card.Body>
  </Card>
);
