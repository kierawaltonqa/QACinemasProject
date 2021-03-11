
import mo from "../../../Resources/avatar2.png";
import GitHubIcon from '@material-ui/icons/GitHub';


const Mo = () => {



    return (
        <>
            <div className="row">

                <div className="col-md-9">
                    <h3>Mohamud Mussa</h3>
                    <p>
                        Hi there! My name is Mo and the love I have for React is unmatched. I spend most days daydreaming about how the world is full of components and unidirectional communication.
                </p>
                    <p>Anywhoo, I was mainly involved in the frontend of this website and also setting up the inital connection to mongodb. I also lead the design of the website including designing our custom images on Photoshop. Css is also a newfound joy of mine. Since we completed this website fairly quickly because our team is amazing,  I thought of the idea to create a blog page, setting up the backend, and linking it to a custom page that allows the admin staff to create blog posts!</p>
                
    
                    <GitHubIcon fontSize="large"></GitHubIcon>
                    <br/>
                    <br/> 
                    <a style={{color: 'gold' }} id="GitHubLink" href="https://github.com/MohamudMussa" target="_blank" rel="noreferrer">GitHub Link     </a>
                    
        
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