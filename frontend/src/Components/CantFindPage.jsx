import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap/";
import "../Css/AboutStyle.css";
import lost from "../Resources/Logo/lost.jpg";
import Footer from "./Footer";

const CantFindPage = () => {
  return (
    <>
      <div className="row">
        <Col sm={6}>
          <Image className="img" src={lost} roundedCircle />
        </Col>
        <Col>
          <Col>
            <h1 className="mid"> Ooops, you seem lost!</h1>
          </Col>
        </Col>
      </div>

      <Footer></Footer>
    </>
  );
};

export default CantFindPage;
