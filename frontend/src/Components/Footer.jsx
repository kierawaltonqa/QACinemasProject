import {Card, Button, Nav} from 'react-bootstrap/'


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

    <Nav defaultActiveKey="/home" as="ul">
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
        <tb>  <Button variant="primary" >Twitter</Button> </tb>

        <tb>    <Button variant="primary">Facebook</Button></tb>

        <tb>  <Button variant="primary">Instagram</Button></tb>


    </row>
  </Card.Body>
</Card>
            
        </div>
    )
}

export default Footer
