
import { Toast, Image } from "react-bootstrap";
import twel from "./Images/12A.png"


const TwelveA = ({ toggleShow12A }) => {

    return (
        <>

<>

<div className="beauty"> 
  <Toast.Header className="goldenHours">
    <strong style={{color: 'red'}}>12a Film Ratings</strong>
  </Toast.Header>
  <Toast.Body  className="goldenHours">

  <Image style={{backgroundColor: 'gold', height: '30%', width: '30%'}}  src={twel} rounded />

  <hr/>

      <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ipsa voluptas aliquam architecto est ea ab molestias molestiae voluptate necessitatibus dicta reprehenderit aut quos laboriosam veritatis, eius optio accusantium expedita! </p>
      <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ipsa voluptas aliquam architecto est ea ab molestias molestiae voluptate necessitatibus dicta reprehenderit aut quos laboriosam veritatis, eius optio accusantium expedita! </p>
      <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ipsa voluptas aliquam architecto est ea ab molestias molestiae voluptate necessitatibus dicta reprehenderit aut quos laboriosam veritatis, eius optio accusantium expedita! </p>
      <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ipsa voluptas aliquam architecto est ea ab molestias molestiae voluptate necessitatibus dicta reprehenderit aut quos laboriosam veritatis, eius optio accusantium expedita! </p>
    <a style={{color: 'red'}}  
      href="https://www.bbfc.co.uk/rating/12a"
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

export default TwelveA;