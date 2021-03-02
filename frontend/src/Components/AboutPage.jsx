
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import logo from "../Resources/Logo/logo.jpg";
import PropTypes from "prop-types";
import FindUs from "./FindUs";
import MeetTheTeam from "./MeetTheTeam";
import ContactForm from "./ContactForm";
import QaCinemaInfo from "./QaCinemaInfo";
import Footer from "./Footer";
import Map from "./Map";


const AboutPage = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Container>
          <div className="row">
            <Col>
              {" "}
              <img src={logo} alt="My Logo" />
            </Col>
            <Col>
              <QaCinemaInfo></QaCinemaInfo>
            </Col>
          </div>

          <div className="row">
            <Col sm={6}>
              <FindUs></FindUs>
            </Col>
            <Col>
              <Col>
                <Map></Map>
              </Col>
            </Col>
          </div>

          <div></div>
        </Container>

        <MeetTheTeam></MeetTheTeam>
      </Container>

      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

AboutPage.propTypes = {};

export default AboutPage;
