import "../../Css/AboutStyle.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import logo from "../../Resources/Logo/logo.jpg"
import FindUs from "./FindUs";
import MeetTheTeam from "./MeetTheTeam";
import QaCinemaInfo from "./QaCinemaInfo";
import Footer from "../FooterFolder/Footer";
import Map from "./Map";
import PlacesToGoPage from "./PlacesToGo/PlacesToGoPage";

const AboutPage = () => {
  return (
    <>
      <br className="br"></br>
      <br className="br"></br>
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

          <PlacesToGoPage />

        </Container>

        <MeetTheTeam></MeetTheTeam>
      </Container>

      <div>
        <Footer></Footer>
      </div>
    </>
  );
};



export default AboutPage;
