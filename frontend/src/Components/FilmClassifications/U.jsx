
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

            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ipsa voluptas aliquam architecto est ea ab molestias molestiae voluptate necessitatibus dicta reprehenderit aut quos laboriosam veritatis, eius optio accusantium expedita! </p>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ipsa voluptas aliquam architecto est ea ab molestias molestiae voluptate necessitatibus dicta reprehenderit aut quos laboriosam veritatis, eius optio accusantium expedita! </p>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ipsa voluptas aliquam architecto est ea ab molestias molestiae voluptate necessitatibus dicta reprehenderit aut quos laboriosam veritatis, eius optio accusantium expedita! </p>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ipsa voluptas aliquam architecto est ea ab molestias molestiae voluptate necessitatibus dicta reprehenderit aut quos laboriosam veritatis, eius optio accusantium expedita! </p>
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