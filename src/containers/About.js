import React from "react";
import { Card, Button } from "react-bootstrap";
import styled from "styled-components";
import { Form } from "react-bootstrap";
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
  bgColor: "#96ceb4",
  bgColor2: "#fff",
`;

export const COLOR = {
  bgColor: `#fe4a49`,
  bgColor2: `#fff`,
};

export const About = () => (
  // <GridWrapper>
  <div class="d-flex flex-column">
    <Card
      style={
        {
          // borderColor: COLOR.bgColor,
        }
      }
    >
      <Card.Img />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          <h3
            style={{
              color: COLOR.bgColor,
              textAlign: "center",
            }}
          >
            WE ARE FUELIT
          </h3>
          <br />
          <p>
            FuelIt is a fictitious corner in world to deliver fuel at your
            doorstep. We serve corporates, manufacturing, construction, mining
            among other industries which require fuel to run their operations.
            Our aim is to revolutionise the way fuel is purchased, stored and
            delivered . Not only does FuelIt take pride in its technology to
            ensure that our customers get the right quantity and quality on
            every order, FuelIt also brings safety, transparency and convenience
            in it&#8217;s doorstep delivery.
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
    <div class="d-flex flex-column">
      <div class="quote">
        <h3
          style={{
            color: COLOR.bgColor,
            textAlign: "center",
          }}
        >
          "It is only our humanity that can deliver us from the brutality of our
          achievements"
        </h3>
      </div>
      <div
        class="image_logo"
        style={{
          textAlign: "center",
        }}
      >
        <img src="delivery_truck.png" />
      </div>
    </div>
  </div>
);
