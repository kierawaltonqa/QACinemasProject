
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import logo from "../Resources/Logo/logo.jpg";
import FindUs from "./FindUs";
import MeetTheTeam from "./MeetTheTeam";
import ContactForm from "./ContactForm";
import QaCinemaInfo from "./QaCinemaInfo";
import Footer from "./Footer";
import Map from "./Map";

const AboutPage = () => {
  return (
    <>
    <br className="br"></br>
    <br className="br"></br>
{/* <img src={background}  class="rounded float-left" alt="..."></img> */}
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



export default AboutPage;
