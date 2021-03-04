import { Card, Button, Nav } from 'react-bootstrap/'
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import Times from '../OpeningTimes/Times';
import './Footer.css';

const Footer = () => {


  return (
    <div>

      <br></br>
      <br></br>
      <Card >

        <Card.Body className="footer">
          <Card.Title >QA Cinema</Card.Title>
          <Card.Text > ©TeamSpell 2021    </Card.Text>
          <Card.Text>
          </Card.Text>
          <Nav defaultActiveKey="/home" as="ul" style={{ marginLeft: "42%" }}>
            <Nav.Item as="li" className="footer">
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1">About</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2">Contact Us</Nav.Link>
            </Nav.Item>
          </Nav>
          <row>
            <tb>  <FiTwitter size={25} id="twitter-footer" /> </tb>

            <tb>  <FiFacebook size={25} id="fb-footer" /></tb>

            <tb>  <FiInstagram size={25} id="instagram-footer" /></tb>


          </row>
          <div className="footerTimes">

          <Times style={{color: 'red'}}/>

          </div>
        </Card.Body>

      </Card>

    </div>
  )
}

export default Footer
