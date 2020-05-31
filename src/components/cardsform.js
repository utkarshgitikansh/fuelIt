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

export const CardsForm = (props) => (
  <Card>
    <Card.Img />
    <Card.Body>
      <Card.Title>
        <b>{props.value1}</b>
      </Card.Title>

      {props.value2 == null ? (
        <div>
          <br />
          <h4
            style={{
              color: COLOR.bgColor,
              textAlign: "center",
            }}
          >
            "Your order details will be displayed here"
          </h4>

          <div
            class="image_logo"
            style={{
              textAlign: "center",
            }}
          >
            <img src="delivery_truck.png" />
          </div>
        </div>
      ) : (
        <Card.Text>
          <h5
            style={{
              color: COLOR.bgColor,
              textAlign: "center",
            }}
          >
            Fuel type : {props.value2}
          </h5>

          <h5
            style={{
              color: COLOR.bgColor,
            }}
          >
            Fuel capacity : {props.value3}
          </h5>

          <h5
            style={{
              color: COLOR.bgColor,
            }}
          >
            Customer vehicle : {props.value4}
          </h5>

          <h5
            style={{
              color: COLOR.bgColor,
            }}
          >
            Customer Name : {props.value5}
          </h5>

          <h5
            style={{
              color: COLOR.bgColor,
            }}
          >
            Address : {props.value6}
          </h5>
        </Card.Text>
      )}

      {/* <Button variant="primary">Go somewhere</Button> */}
    </Card.Body>
  </Card>
);
