import { Toast, Image, } from "react-bootstrap";
import Fif from "./Images/15.png"


const Fifteen = () => {




    return (
        <>

        <div className="beauty"> 
          <Toast.Header className="goldenHours">
            <strong style={{color: 'red'}}>15 Film Ratings</strong>
          </Toast.Header>
          <Toast.Body  className="goldenHours">

          <Image style={{backgroundColor: 'gold', height: '30%', width: '30%'}} src={Fif} rounded />
          <hr/>
          <strong> Dangerous behaviour </strong>
          <br/>
          <p>Dangerous behaviour (for example, suicide, self-harming and asphyxiation) should not dwell on detail which could be copied. Whether the depiction of easily accessible weapons is acceptable will depend on factors such as realism, context and setting.</p>

<strong> Discrimination </strong>

<br/>

<p> The work as a whole must not endorse discriminatory language or behaviour, although there may be racist, homophobic or other discriminatory themes and language.</p>



<strong> Drugs</strong>
<br/>
<p>Drug taking may be shown but the work as a whole must not promote or encourage drug misuse (for example, through detailed instruction). The misuse of easily accessible and highly dangerous substances (for example, aerosols or solvents) is unlikely to be acceptable.
</p>

<strong> Language</strong>
<br/>
<p>There may be strong language. Very strong language may be permitted, depending on the manner in which it is used, who is using the language, its frequency within the work as a whole and any special contextual justification.

</p>


            <a style={{color: 'red'}}  
              href="https://www.bbfc.co.uk/rating/15"
              rel="noreferrer"
              target="_blank"
            >
              Additional Info
            </a>


          </Toast.Body>
          </div>
        </>
    );


}

export default Fifteen;