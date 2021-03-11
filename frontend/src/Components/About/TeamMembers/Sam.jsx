
import './Sam.css'
import { GoGitBranch } from "react-icons/go"
import sam from '../../../Resources/samQAC.jpg'

const Sam = () => {



    return (
        <>
            <div className="row">
                <div className="col-md-9">

                    <h3 id="samHeading">Sam Costello</h3>
                    <p>
                        Hi! :-) I'm Sam and I am 25.
                </p>
                    <p><i>Former lemonade stand owner turned developer</i></p>

                    <p>
                        I was mainly involved in the API and Back-End development and testing of this website!
                        I first started coding at the start of december 2020 - and this is the first team software development project that I have been involved with.
                </p>
                    <p>Below is where you will find all of my experiments:</p><a id="GitHubLink" href="https://github.com/scostello-hubQA" target="_blank" rel="noreferrer">Sam's GitHub</a>
                    <GoGitBranch size={30} />

                </div>
                <div className="col-md-3">
                    <br />
                    <center>
                        <img
                            width={120}
                            height={150}
                            padding={20}
                            className="align-self-start mr-3"
                            src={sam}
                            alt="sam-img"
                        />
                    </center>
                </div>

                <hr />
            </div>
        </>


    )
}

export default Sam;