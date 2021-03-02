import { Toast } from 'react-bootstrap'
import '../../Resources/Toast.css'
const EighteenToast = ({ setShow18, show18 }) => {





    return (



        // <div className="col-md-5">

        <Toast onClose={() => setShow18(false)} show={show18} id="toastPopUp18" >
            <Toast.Header>

                <strong className="mr-auto">18</strong>

            </Toast.Header>
            <Toast.Body><a href="https://www.bbfc.co.uk/rating/18" rel="noreferrer" target="_blank">additional info</a></Toast.Body>
        </Toast>
        // </div>


    )
}

export default EighteenToast;