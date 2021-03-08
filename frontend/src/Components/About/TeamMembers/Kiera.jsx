import Media from "react-bootstrap/Media";
import logo from "../../../Resources/Logo/logo.jpg"
import kiera from "../../../Resources/kiera.JPG"

const Kiera = () => {



    return (


        <Media>
            <Media.Body>
                <img
                    width={64}
                    padding={20}
                    height={64}
                    className="align-self-end mr-8"
                    src={kiera}
                    alt="Generic placeholder"
                />
                <h3>Kiera Walton</h3>
                <p>
                    Hi, I'm Kiera! I have loved collaborating with Team Spell to complete this project.
                    For the most part, I worked on the front end development; designing and implementing the discussion board, the movie listings and new releases, as well as the search bar, and various other aspects of the design and styling.
                    I also took on the role of scrum master for this project, meaning I was in charge of running the daily stand ups and ensuring the successful completion of tasks and sprints.
        </p>


                <p className="mb-0">

                </p>
                <hr />
            </Media.Body>
        </Media>




    )
}

export default Kiera; 