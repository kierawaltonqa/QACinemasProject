import Media from "react-bootstrap/Media";
import mo from "../../../Resources/avatar2.png";

const Mo = () => {



    return (
        <>
            <div className="row">

                <div className="col-md-9">
                    <h3>Mohamud Mussa</h3>
                    <p>
                        Hi there! My name is Mo and the love I have for React is unmatched. I spend most days daydreaming about how the world is full of components and unidirectional communication.
                </p>
                    <p>Anywhoo, I was mainly involved in the frontend of this website, I did also design our custom images in Photoshop. Css is also a newfound joy of mine. Since we completed this website fairly quickly because our team is amazing,  I thought of the idea to create a blog page, setting up the backend, and linking it to a custom page that allows the admin staff to create blog posts!</p>
                    <p>Here is my Github :)</p>
                </div>
                <div className="col-md-3">
                    <center>
                        <img
                            width={175}
                            height={175}
                            padding={20}
                            className="align-self-start mr-3"
                            src={mo}
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