import React from "react";
import styled from "styled-components";
import { CardsForm } from "../components/cardsform";
import { Forms } from "../components/form";
import { Form, Button } from "react-bootstrap";
import { Cards } from "../components/cards";
import { Card } from "react-bootstrap";
import Map from "../components/Map";
import firebase from "firebase";
import { config } from "./config";
import Loader from "./loader.js";

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

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: [],
      value1: [],
      value2: [],
      value3: [],
      value4: [],
      value5: [],
      flag: false,
      latitude: null,
      longitude: null,
      address: "",
      isButtonDisabled: false,
      data: "",
      val: [],
      loading: true,
      bgColor: `#fe4a49`,
      bgColor2: `#fff`,
    };
  }

  fetch = () => {
    // this.state.loading = true;
    let dat = [];

    const database = firebase.database().ref("order");
    database.on(
      "value",
      (snap) => {
        snap.forEach((element) => {
          dat = element.val().user_order.order[0];
          this.setState({
            value1: [...this.state.value1, dat.customer],
            value2: [...this.state.value2, dat.address],
            value3: [...this.state.value3, dat.fuel],
            value4: [...this.state.value4, dat.capacity],
            value5: [...this.state.value5, dat.vehicle],
          });

          for (const [index, element] of this.state.value1.entries()) {
            this.setState({ count: [...this.state.count, index] });
          }
        });
        console.log(this.state.value1);
      },
      function (error) {
        console.log("Error: " + error.code);
      }
    );
    // this.state.loading = false;
    this.state.isButtonDisabled = true;
  };

  render() {
    let {
      value1,
      value2,
      value3,
      value4,
      value5,
      flag,
      latitude,
      longitude,
      address,
      data,
      count,
      val,
    } = this.state;

    let datas = this.state.count.map((index) => {
      // if (this.state.loading) {
      //   return <div class="center">Waiting</div>;
      // } else {
      return (
        <Card>
          <Card.Img />
          <Card.Body>
            {/* <Card.Title>Order History</Card.Title> */}
            <Card.Text>
              <p>
                <b>Name of customer :</b> {value1[index]}
              </p>
              <p>
                <b>Address :</b> {value2[index]}
              </p>
              <p>
                <b>Fuel type :</b> {value3[index]}
              </p>
              <p>
                <b>Fuel capacity :</b> {value4[index]}
              </p>
              <p>
                <b>Vehicle type :</b> {value5[index]}
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      );
      // }
    });
    return (
      <div class="d-flex flex-column">
        <div class="location">
          <Card>
            <Card.Img />
            <Card.Body>
              {/* <Card.Title>Order History</Card.Title> */}
              <Card.Text>
                <h3
                  style={{
                    color: this.state.bgColor,
                    textAlign: "center",
                  }}
                >
                  Order History
                </h3>
                <br />
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Button
                    variant="primary"
                    onClick={this.fetch}
                    disabled={this.state.isButtonDisabled}
                    style={{
                      backgroundColor: this.state.bgColor,
                      border: this.state.bgColor,
                    }}
                  >
                    Fetch Orders
                  </Button>
                </div>
                <br />
                {datas}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div class="about">
          <img src="delivery_truck.png" />
        </div>
      </div>
    );
  }
}
export default Location;
