
import { Toast, Image } from "react-bootstrap";
import tw from "./Images/12.png"


const Twelve = ({ toggleShow12 }) => {

    return (
        <>
  <>

<div className="beauty"> 
  <Toast.Header className="goldenHours">
    <strong style={{color: 'red'}}>12 Film Ratings</strong>
  </Toast.Header>
  <Toast.Body  className="goldenHours">

  <Image style={{backgroundColor: 'gold', height: '30%', width: '30%'}} src={tw} rounded />
  <hr/>

      <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ipsa voluptas aliquam architecto est ea ab molestias molestiae voluptate necessitatibus dicta reprehenderit aut quos laboriosam veritatis, eius optio accusantium expedita! </p>
      <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ipsa voluptas aliquam architecto est ea ab molestias molestiae voluptate necessitatibus dicta reprehenderit aut quos laboriosam veritatis, eius optio accusantium expedita! </p>
      <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ipsa voluptas aliquam architecto est ea ab molestias molestiae voluptate necessitatibus dicta reprehenderit aut quos laboriosam veritatis, eius optio accusantium expedita! </p>
      <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ipsa voluptas aliquam architecto est ea ab molestias molestiae voluptate necessitatibus dicta reprehenderit aut quos laboriosam veritatis, eius optio accusantium expedita! </p>
    <a style={{color: 'red'}}  
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