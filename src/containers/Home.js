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

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      flag: false,
      latitude: "",
      longitude: "",
      address: "",
      isButtonDisabled1: false,
      isButtonDisabled2: false,
      isButtonDisabled3: false,
      data: "",
      val: [],
      bgColor: `#fe4a49`,
      bgColor2: `#fff`,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFuel = this.handleFuel.bind(this);
    this.handleCap = this.handleCap.bind(this);
    this.handleVehicle = this.handleVehicle.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.position = this.position.bind(this);
  }

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }),
      (err) => console.log(err)
    );

    window.onbeforeunload = function (e) {
      if (true) {
        return;
      }
      var dialogText = "Dialog text here";
      e.returnValue = dialogText;
      return dialogText;
    };
  };

  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     console.log("Latitude is :", position.coords.latitude);
  //     console.log("Longitude is :", position.coords.longitude);

  //     this.setState({
  //       latitude: position.coords.latitude,
  //       longitude: position.coords.longitude,
  //     });
  //   });
  // }

  position = () => {
    console.log("yoo" + this.state.latitude);

    mapboxgl.accessToken =
      "pk.eyJ1IjoidWc3Nzg4IiwiYSI6ImNrOWIxaHBhaDAxcGwzbW14MmUyd3o2Z3cifQ.oOQRBNGR1TFvpPNdRjoYYg";
    let map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",

      center: [this.state.longitude, this.state.latitude], // starting position
      zoom: 10, // starting zoom
    });

    fetch(
      // `https://updateitt.herokuapp.com/locate?lat=${this.state.latitude}&lon=${this.state.longitude}`,
      `https://us1.locationiq.com/v1/reverse.php?key=246b8ad3629517&lat=${this.state.latitude}&lon=${this.state.longitude}&format=json`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            address: [...this.state.address, result.display_name],
          });
        },

        (error) => {
          this.setState({});
        }
      );
    this.setState({
      isButtonDisabled1: true,
    });
  };

  confirm = () => {
    // console.log("yoo" + this.state.latitude);

    alert("Order:" + this.state.value1 + this.state.value2 + this.state.value3);

    let key1 = "order";
    //weather_data[key1].pop();

    let user_order = {};

    user_order[key1] = [];

    var data = {
      fuel: this.state.value1,
      capacity: this.state.value2,
      vehicle: this.state.value3,
      customer: this.state.value5,
      address: this.state.value4,
    };
    user_order[key1].push(data);

    const database = firebase.database().ref();
    const order = database.child("order");

    var order_data = order.push({
      user_order,
    });

    console.log(user_order);

    // fetch(
    //   `https://updateitt.herokuapp.com/locate?lat=${this.state.latitude}&lon=${this.state.longitude}`,
    //   {
    //     method: "GET",
    //   }
    // )
    //   .then((res) => res.json())
    //   .then(
    //     (result) => {
    //       result.results.forEach((element) => {
    //         console.log(element);
    //         this.setState({
    //           address: [...this.state.address, element.formatted_address],
    //         });
    //       });
    //     },

    //     (error) => {
    //       this.setState({});
    //     }
    //   );
    this.setState({
      isButtonDisabled2: true,
    });
  };

  fetch = () => {
    let dat = [];
    const database = firebase.database().ref("order");
    database.on(
      "value",
      (snap) => {
        snap.forEach((element) => {
          dat = element.val().user_order.order[0];
          this.setState({
            val: [...this.state.val, dat.address],
          });
        });
        // console.log(snap.val());
      },
      function (error) {
        console.log("Error: " + error.code);
      }
    );

    // console.log(dat.order[0]);
    // this.setState({
    //   val: dat..order.[0].customer,
    // });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ flag: true });
    this.setState({
      isButtonDisabled2: false,
    });
  }

  handleFuel(event) {
    event.preventDefault();
    this.setState({ value1: event.target.value });
  }

  handleCap(event) {
    event.preventDefault();
    this.setState({ value2: event.target.value });
  }

  handleVehicle(event) {
    event.preventDefault();
    this.setState({ value3: event.target.value });
  }

  handleAddress(event) {
    event.preventDefault();
    this.setState({ value4: event.target.value });
  }

  handleName(event) {
    event.preventDefault();
    this.setState({ value5: event.target.value });
  }

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
      val,
    } = this.state;

    // console.log("edewdqw" + longitude);

    let lat;
    let lon;

    lat = latitude;
    lon = longitude;

    console.log("wow" + lat, lon);

    let order1;
    let order2;
    let order3;
    let order4;
    let order5;

    if (flag == true) {
      order1 = value1;
      order2 = value2;
      order3 = value3;
      order4 = value4;
      order5 = value5;
    }

    return (
      <div class="container">
        <div class="row">
          {/* <Card class="card">
            <Card.Img />
            <Card.Body>
              <Card.Title>Order History</Card.Title>
              <Card.Text>
                <p>{val}</p>
              </Card.Text>
              <Button variant="primary" onClick={this.fetch}>
                Submit Order
              </Button>
            </Card.Body>
          </Card> */}

          <div class="col">
            {/* <Forms handleSubmit={this.handleSubmit} /> */}

            <Card class="card">
              <Card.Img />
              <Card.Body>
                <Card.Title>
                  <b>Who are you ??</b>
                </Card.Title>
                <Card.Text>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Fuel Type</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter fuel type"
                        onChange={this.handleFuel}
                        // style={{
                        //   backgroundColor: this.state.bgColor2,
                        //   border: this.state.bgColor,
                        // }}
                      />
                      <Form.Text className="text-muted">
                        We are currently delivering Diesel.
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Fuel capacity</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter fuel capacity"
                        onChange={this.handleCap}
                        // style={{
                        //   backgroundColor: this.state.bgColor2,
                        //   border: this.state.bgColor,
                        // }}
                      />
                      <Form.Text className="text-muted">
                        Fuel capacity in litres (L)
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Type of vehicle</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter type of vehicle"
                        onChange={this.handleVehicle}
                        // style={{
                        //   backgroundColor: this.state.bgColor2,
                        //   border: this.state.bgColor,
                        // }}
                      />
                      <Form.Text className="text-muted">
                        Two wheeler or Four wheeler
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Customer Name"
                        onChange={this.handleName}
                        // style={{
                        //   backgroundColor: this.state.bgColor2,
                        //   border: this.state.bgColor,
                        // }}
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter type of vehicle"
                        onChange={this.handleAddress}
                        // style={{
                        //   backgroundColor: this.state.bgColor2,
                        //   border: this.state.bgColor,
                        // }}
                      />
                    </Form.Group>
                    <Button
                      style={{
                        backgroundColor: this.state.bgColor,
                        border: this.state.bgColor,
                      }}
                      variant="primary"
                      type="submit"
                    >
                      FuelIt
                    </Button>
                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>

            {/* <Cards value1="Order History" /> */}
          </div>
          <div class="col">
            <Card class="card">
              <Card.Img />
              <Card.Body>
                <Card.Title>
                  <b>Where are you ??</b>
                </Card.Title>
                <Card.Text>
                  <p>
                    <div id="map"></div>
                  </p>
                  <p>{address}</p>
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={this.position}
                  disabled={this.state.isButtonDisabled1}
                  style={{
                    backgroundColor: this.state.bgColor,
                    border: this.state.bgColor,
                  }}
                >
                  Find me
                </Button>
              </Card.Body>
            </Card>

            <CardsForm
              value1="Order Details !!"
              value2={order1}
              value3={order2}
              value4={order3}
              value5={order5}
              value6={order4}
            />

            <Card class="card">
              <Card.Img />
              <Card.Body>
                <Card.Title>
                  <b>Confirm Order ✔</b>
                </Card.Title>
                <Card.Text>
                  <p></p>
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={this.confirm}
                  disabled={this.state.isButtonDisabled2}
                  style={{
                    backgroundColor: this.state.bgColor,
                    border: this.state.bgColor,
                  }}
                >
                  Submit Order
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
