import React from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap/";
import "../Css/AboutStyle.css";
import lost from "../Resources/Logo/lost.jpg";
import Footer from "./FooterFolder/Footer";
import { Link } from 'react-router-dom';


const CantFindPage = () => {
  return (
    <>
      <div className="row">
        <Col sm={6}>
          <Image style={{ height: '80vmin' }} className="img" src={lost} roundedCircle />
        </Col>
        <Col>
          <Col>
            <h1 className="mid"> Ooops, you seem lost!</h1>
            <Link to="/">
              <Button className="Button" variant="primary" size="lg" active>
                Return Home
              </Button>{' '}
            </Link>

            <Link to="/newreleases">
              <Button className="Button" variant="primary" size="lg" active>
                Latest Films
              </Button>{' '}
            </Link>

            <Link to="/bookings">
              <Button className="Button" variant="primary" size="lg" active>
                Book Tickets
              </Button>{' '}
            </Link>


            <Link to="/contact">
              <Button className="Button" variant="primary" size="lg" active>
                Contact Us
              </Button>{' '}
            </Link>
          </Col>
        </Col>
      </div>

      <Footer></Footer>
    </>
  );
};

export default CantFindPage;
