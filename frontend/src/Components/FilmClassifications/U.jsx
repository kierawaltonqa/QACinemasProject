
import { Toast, Image } from "react-bootstrap";
import uimage from "./Images/U.png"



const U = () => {

  return (
    <>
      <>

        <div className="beauty">
          <Toast.Header className="goldenHours">
            <strong style={{ color: 'red' }}>U Film Ratings</strong>
          </Toast.Header>
          <Toast.Body className="goldenHours">
            <Image style={{ backgroundColor: 'gold', height: '30%', width: '30%' }} src={uimage} rounded />
            <hr />
            <strong style={{ color: "red" }}>Universal: suitable for all</strong>
            <p style={{ color: "red" }}>A U film should be suitable for audiences aged four years and over, although it is impossible to predict what might upset any particular child.</p>
            <strong>Dangerous Behaviour</strong>
            <p>Potentially dangerous or anti-social behaviour which young children may copy must be clearly disapproved of. No emphasis on realistic or easily accessible weapons.</p>
            <strong>Discrimination</strong>
            <p>Discriminatory language or behaviour is unlikely to be acceptable unless clearly disapproved of</p>
            <strong>Drugs</strong>
            <p>References to illegal drugs or drug misuse must be infrequent and innocuous, or have a clear educational purpose or anti-drug message suitable for young children.</p>
            <strong>Language</strong>
            <p>Infrequent use only of very mild bad language.</p>
            <a style={{ color: 'red' }}
              href="https://www.bbfc.co.uk/rating/U"
              rel="noreferrer"
              target="_blank"
            >
              Additional Info
    </a>
          </Toast.Body>
        </div>
      </>


    </>
  )

}

export default U;