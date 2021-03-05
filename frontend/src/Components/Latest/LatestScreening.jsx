import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import imageOne from "./Images/latest1.jpg";
import imageTwo from "./Images/latest2.jpg";
import imageThree from "./Images/latest3.jpg";

const LatestScreening = () => {
  return (
    <div>
      <h1> Screen Times </h1>
      <CardGroup>
        <Card style={{ backgroundColor: "black" }}>
          <Card.Img variant="top" src={imageOne} style={{ height: "550px" }} />
          <Card.Body>
            <Card.Title>Venom </Card.Title>
            <Card.Text style={{ color: "white", backgroundColor: "black" }}>
              Venom is a 2018 American superhero film based on the Marvel Comics
              character of the same name, produced by Columbia Pictures in
              association with Marvel and Tencent Pictures. Distributed by Sony
              Pictures Releasing, it is the first film in the Sony Pictures
              Universe of Marvel Characters.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small style={{ color: "gold" }}>
              <div>
                <li> 09:00am </li>
                <li> 09:45am</li>
                <li> 12:45pm</li>
                <li> 03:45am</li>
              </div>
            </small>
          </Card.Footer>
        </Card>
        <Card style={{ backgroundColor: "black" }}>
          <Card.Img variant="top" src={imageTwo} style={{ height: "550px" }} />
          <Card.Body>
            <Card.Title>Deadpool 2</Card.Title>
            <Card.Text>
              Deadpool 2 is a 2018 American superhero film based upon the Marvel
              Comics character Deadpool. It is the eleventh installment in the
              X-Men film series, and is the sequel to 2016's Deadpool.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small style={{ color: "gold" }}>
              <div>
                <li> 09:00am </li>
                <li> 09:45am</li>
                <li> 12:45pm</li>
                <li> 03:45am</li>
              </div>
            </small>
          </Card.Footer>
        </Card>
        <Card style={{ backgroundColor: "black" }}>
          <Card.Img
            variant="top"
            src={imageThree}
            style={{ height: "550px" }}
          />
          <Card.Body>
            <Card.Title>Sonic</Card.Title>
            <Card.Text>
              Sonic the Hedgehog is a 2020 live action/computer-animated
              action-adventure comedy film based on the Sonic the Hedgehog video
              game franchise published by Sega.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small style={{ color: "gold" }}>
              <div>
                <li> 09:00am </li>
                <li> 09:45am</li>
                <li> 12:45pm</li>
                <li> 03:45am</li>
              </div>
            </small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default LatestScreening;
