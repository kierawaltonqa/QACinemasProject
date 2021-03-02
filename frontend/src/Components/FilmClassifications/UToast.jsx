import { Toast } from 'react-bootstrap'

const UToast = ({ setShowU, showU }) => {





    return (



        // <div className="col-md-5">

        <Toast onClose={() => setShowU(false)} show={showU} >
            <Toast.Header>

                <strong className="mr-auto">U</strong>

            </Toast.Header>
            <Toast.Body><a href="https://www.bbfc.co.uk/rating/U" rel="noreferrer" target="_blank">additional info</a></Toast.Body>
        </Toast>
        // </div>


    )
}

export default UToast;