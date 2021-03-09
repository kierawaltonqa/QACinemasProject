
import { Toast, Image } from "react-bootstrap";
import pgimage from "./Images/PG.png"



const PG = () => {






  return (
    <>

      <div className="beauty">
        <Toast.Header className="goldenHours">
          <strong style={{ color: 'red' }}>PG Film Ratings</strong>
        </Toast.Header>
        <Toast.Body className="goldenHours">


          <Image style={{ backgroundColor: 'gold', height: '30%', width: '30%' }} src={pgimage} rounded />
          <hr />
          <strong style={{ color: 'red' }}>PG Parental Guidance</strong>
          <p style={{ color: 'red' }}>General viewing, but some scenes may be unsuitable for young children. A PG film should not unsettle a child aged around eight or older. Unaccompanied children of any age may watch, but parents are advised to consider whether the content may upset younger, or more sensitive, children.</p>

          <strong>Dangerous Behaviour</strong>
          <p>No detail of potentially dangerous behaviour which young children are likely to copy, if that behaviour is presented as safe or fun. No glamorisation of realistic or easily accessible weapons such as knives. No focus on anti-social behaviour which young children are likely to copy.</p>
          <strong>Discrimination</strong>
          <p>Discriminatory language or behaviour is unlikely to be acceptable unless clearly disapproved of, or in an educational or historical context, or in a particularly dated work with no likely appeal to children. Discrimination by a character with whom children can readily identify is unlikely to be acceptable.</p>
          <strong>Drugs</strong>
          <p>References to illegal drugs or drug misuse must be innocuous or carry a suitable anti-drug message.</p>
          <strong>Language</strong>
          <p>Mild bad language only. Aggressive or very frequent use of mild bad language may result in a work being passed at a higher category.</p>
          <a style={{ color: 'red' }}
            href="https://www.bbfc.co.uk/rating/PG"
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

export default PG;