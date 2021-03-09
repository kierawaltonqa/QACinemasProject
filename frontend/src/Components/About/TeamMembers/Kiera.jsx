import Media from "react-bootstrap/Media";
import kiera from "../../../Resources/kiera.JPG"

const Kiera = () => {



    return (
        <>
            <div className="row">
                <div className="col-md-9">
                    <h3>Kiera Walton</h3>
                    <p>
                        Hi, I'm Kiera! I have loved collaborating with Team Spell to complete this project.
                        For the most part, I worked on the front end development; designing and implementing the discussion board, the movie listings and new releases pages, as well as the search bar, and various aspects of the home page and about page.
                        I also took on the role of scrum master for this project, meaning I was in charge of running the daily stand ups and ensuring the successful completion of tasks and sprints.
                    </p>
                    <p>
                        I am really proud of what we have achieved, none of it could have been done without all of our hard work (and of course coffee).
                    </p>
                </div>
                <div className="col-md-3">
                    <br />
                    <center>
                        <img
                            width={120}
                            padding={20}
                            height={120}
                            className="align-self-end mr-8"
                            src={kiera}
                            alt="Generic placeholder"
                        />
                    </center>
                </div>
                <hr />
            </div>
        </>



    )
}

export default Kiera; 