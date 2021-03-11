import React from 'react'
import { Toast } from 'react-bootstrap'

const Info = () => {
  return (
    <>

      <div className="beauty">
        <Toast.Header className="goldenHours">
          <strong style={{ color: 'red' }}>Information</strong>
        </Toast.Header>
        <Toast.Body className="goldenHours">



          <h3> What is Classification </h3>
          <hr />
          <p>All classification decisions are based on the BBFC’s published and regularly updated Guidelines. The Guidelines are the product of extensive public consultation, research and the accumulated experience of the BBFC over many years. They reflect current views on film, DVD and video game regulation.</p>
          <p>Classification is the process of giving age ratings and content advice to films and other audiovisual content to help children and families choose what’s right for them and avoid what’s not.</p>
          <p>Recommendations are made by our Compliance Officers based on the BBFC’s published Guidelines. These are the result of extensive consultation with people right across the UK, research, and the BBFC’s more than 100 years of experience. They reflect people’s views on film, DVD, Blu-ray, video on demand (VoD) regulation and are regularly updated.

</p>

          <a style={{ color: 'red' }}
            href="https://www.bbfc.co.uk/about-classification"
            rel="noreferrer"
            target="_blank"
          >
            Additional Info
            </a>
        </Toast.Body>
      </div>
    </>
  )
}

export default Info
