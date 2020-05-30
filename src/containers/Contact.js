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

export const COLOR = {
  bgColor: `#fe4a49`,
  bgColor2: `#fff`,
};
export const Contact = () => (
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
            }}
          >
            WE ARE HERE
          </h3>
          <br />
          <p>
            BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH
            BLAH BLAH BLAH BLAH BLAH BLAH BLAH
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
    <div class="d-flex flex-row">
      <div class="quote">
        <h3>
          "The improvement of understanding is for two ends: first, our own
          increase of knowledge; secondly, to enable us to deliver that
          knowledge to others"
        </h3>
      </div>
      <div class="about">
        <img src="delivery_truck.png" />
      </div>
    </div>
  </div>
);
