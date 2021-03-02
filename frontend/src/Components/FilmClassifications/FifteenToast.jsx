import { Toast } from 'react-bootstrap';
import '../../Resources/Toast.css'
const FifteenToast = ({ show15, setShow15 }) => {



    return (



        // <div className="col-md-5">

        <Toast onClose={() => setShow15(false)} show={show15} id="toastPopUp"  >
            <Toast.Header>

                <strong className="mr-auto">15</strong>

            </Toast.Header>
            <Toast.Body><a href="https://www.bbfc.co.uk/rating/15" rel="noreferrer" target="_blank">additional info</a></Toast.Body>
        </Toast>
        // </div>


    )
}
export default FifteenToast;
