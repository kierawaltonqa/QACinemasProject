
import { Toast, Image } from "react-bootstrap";
import tw from "./Images/12.png"


const Twelve = ({ toggleShow12 }) => {

  return (
    <>
      <>

        <div className="beauty">
          <Toast.Header className="goldenHours">
            <strong style={{ color: 'red' }}>12 Film Ratings</strong>
          </Toast.Header>
          <Toast.Body className="goldenHours">

            <Image style={{ backgroundColor: 'gold', height: '30%', width: '30%' }} src={tw} rounded />
            <hr />

            <strong style={{ color: 'red' }}>12 – Video release suitable for 12 years and over</strong>
            <p style={{ color: 'red' }}>video works classified 12 contain material that is not generally suitable for children aged under 12. No one younger than 12 may see a 12A film in a cinema unless accompanied by an adult. Adults planning to take a child under 12 to view a 12A film should consider whether the film is suitable for that child. To help them decide, we recommend that they check the Ratings Info for that film in advance. No one younger than 12 may rent or buy a 12 rated video work.</p>
            <strong>Dangerous Behaviour</strong>
            <p>No promotion of potentially dangerous behaviour which children are likely to copy. No glamorisation of realistic or easily accessible weapons such as knives. No endorsement of anti-social behaviour.</p>
            <strong>Discrimination</strong>
            <p>Discriminatory language or behaviour must not be endorsed by the work as a whole. Aggressive discriminatory language or behaviour is unlikely to be acceptable unless clearly condemned.</p>
            <strong>Drugs</strong>
            <p>Misuse of drugs must be infrequent and should not be glamorised or give detailed instruction.</p>
            <strong>Language</strong>
            <p>There may be moderate bad language. Strong language may be permitted, depending on the manner in which it is used, who is using the language, its frequency within the work as a whole and any special contextual justification.</p>
            <a style={{ color: 'red' }}
              href="https://www.bbfc.co.uk/rating/12"
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

export default Twelve;