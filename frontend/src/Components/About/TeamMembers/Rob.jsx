import Media from "react-bootstrap/Media";
import logo from "../../../Resources/Logo/logo.jpg"

const Rob = () => {



    return (

        <div className="row">
            <div className="col-md-9">
                <h3>Robert Tolley</h3>
                <p>Hi my name is Rob and I'm 24.</p>
                <p>It's been around 12 weeks since I've seen daylight, so that means my training must almost be complete. </p>
                <p>I took part in initial development for the Back-End API, once the framework and necessities for this was complete,
                I lead the development on the screens page, followed by the ticket booking and payment webpage.
                My main focus was on ensuring all functionality behind the pages worked as effectively as possible,
                    to then focus on collaborating with my team to ensure the styling was consistent for the website design. </p>
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


    )
}

export default Rob; 