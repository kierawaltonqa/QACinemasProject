import Media from "react-bootstrap/Media";
import logo from "../../../Resources/Logo/logo.jpg"

const Kiera = () => {



    return (


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
                <hr />
            </Media.Body>
        </Media>




    )
}

export default Kiera; 