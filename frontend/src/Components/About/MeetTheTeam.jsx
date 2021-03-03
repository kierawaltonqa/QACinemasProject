import Media from "react-bootstrap/Media";
import logo from "../../Resources/Logo/logo.jpg"
import "../../Css/AboutStyle.css";

const MeetTheTeam = () => {
  return (
    <div className="container" maxWidth="md" className="beauty">
      <>
        <h1 className="br"> Meet The Team</h1>
        <hr/>

        <br></br>

        <Media>
          <Media.Body>
            <img
              className="img"
              width={64}
              height={64}
              className="align-self-start mr-3"
              src={logo}
              alt="Generic placeholder"
            />
            <h3>Mohamud Mussa</h3>
            <p>
              Cras sit amet nib h libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>

            <p>
              Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel
              eu leo. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus.
            </p>
            <hr/>
          </Media.Body>
        </Media>

        <Media>
          <Media.Body>
            <img
              width={64}
              height={64}
              className="align-self-center mr-3"
              src={logo}
              alt="Generic placeholder"
            />
            <h3>Robert Tolley</h3>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>

            <p>
              Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel
              eu leo. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus.
            </p>
            <hr/>
          </Media.Body>
        </Media>

        <Media>
          <Media.Body>
            <img
              width={64}
              height={64}
              className="align-self-end mr-3"
              src={logo}
              alt="Generic placeholder"
            />
            <h3>Sam Constello</h3>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>

            <p className="mb-0">
              Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel
              eu leo. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus.
            </p>
            <hr/>
          </Media.Body>
        </Media>

        <Media>
          <Media.Body>
            <img
              width={64}
              padding={20}
              height={64}
              className="align-self-end mr-8"
              src={logo}
              alt="Generic placeholder"
            />
            <h3>Kiera Walton</h3>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>

            <p className="mb-0">
              Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel
              eu leo. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus.
            </p>
            <hr/>
          </Media.Body>
        </Media>
      </>
    </div>
  );
};

export default MeetTheTeam;
