import Media from "react-bootstrap/Media";
import logo from "../../../Resources/Logo/logo.jpg"

const Mo = () => {



    return (

        <Media>
            <Media.Body>
                <img
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
                <hr />
            </Media.Body>
        </Media>


    )
}

export default Mo; 