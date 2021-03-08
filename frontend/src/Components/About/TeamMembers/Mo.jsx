import Media from "react-bootstrap/Media";
import logo from "../../../Resources/Logo/logo.jpg"

const Mo = () => {



    return (
        <>
            <div className="row">

                <div className="col-md-9">
                    <h3>Mohamud Mussa</h3>
                    <p>
                        Cras sit amet nib h libero, in gravida nulla. Nulla vel metus
                        scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
                        in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                        nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </p>
                </div>
                <div className="col-md-3">
                    <center>
                        <img
                            width={120}
                            height={120}
                            padding={20}
                            className="align-self-start mr-3"
                            src={logo}
                            alt="Generic placeholder"
                        />
                    </center>
                </div>
                <hr />
            </div>
        </>
    )
}

export default Mo; 