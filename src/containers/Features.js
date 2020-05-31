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
        <div class="d-flex flex-column">
          <h3
            style={{
              color: COLOR.bgColor,
              textAlign: "center",
            }}
          >
            "Coming Soon !!"
          </h3>
          <div
            style={{
              color: COLOR.bgColor,
              textAlign: "center",
              margin: "40px",
            }}
          >
            <img
              style={{
                height: "20%",
                width: "20%",
              }}
              class="image"
              src="delivery_truck.png"
            />
          </div>
          {/* <b>Industries Services</b>
            </h5>
            <br />
            <p>
              <li> Real Estate &#8211; Commercial &#038; Residential</li>{" "}
            </p>

            <p>
              <li>Hotels</li>
            </p>
            <p>
              <li>Schools &#038; Universities</li>
            </p>
            <p>
              <li>Manufacturing </li>
            </p>
            <p>
              <li>Logistics</li>
            </p>
            <p>
              <li>Infrastructure</li>
            </p> */}

          {/* <div class="feature2">
            <img class="image" src="delivery_truck.png" />
          </div> */}
        </div>
      </Card.Text>

      {/* <Button variant="primary">Go somewhere</Button> */}
    </Card.Body>
  </Card>
);
