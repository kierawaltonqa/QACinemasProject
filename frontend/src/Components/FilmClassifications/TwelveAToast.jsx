import { Toast } from 'react-bootstrap'

const TwelveAToast = ({ setShow12A, show12A }) => {





    return (



        // <div className="col-md-5">

        <Toast onClose={() => setShow12A(false)} show={show12A} >
            <Toast.Header>

                <strong className="mr-auto">12A</strong>

            </Toast.Header>
            <Toast.Body><a href="https://www.bbfc.co.uk/rating/12" rel="noreferrer" target="_blank">additional info</a></Toast.Body>
        </Toast>
        // </div>


    )
}

export default TwelveAToast;