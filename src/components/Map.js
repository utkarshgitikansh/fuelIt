import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Card, Button } from "react-bootstrap";
var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [props.longitude, props.latitude], // 28.6203607 77.42609089999999
      //value: [77.42609089999999, 28.6203607],
    };
  }

  componentDidMount() {
    console.log("Map" + this.state.value);
    mapboxgl.accessToken =
      "pk.eyJ1IjoidWc3Nzg4IiwiYSI6ImNrOWIxaHBhaDAxcGwzbW14MmUyd3o2Z3cifQ.oOQRBNGR1TFvpPNdRjoYYg";
    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",

      center: this.state.value, // starting position
      zoom: 8, // starting zoom
    });
  }

  render() {
    return (
      <Card class="card">
        <div id="map"></div>

        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text></Card.Text>

          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    );
  }
}
export default Map;
