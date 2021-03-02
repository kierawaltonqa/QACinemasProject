import { Toast } from 'react-bootstrap'

const PGToast = ({ setShowPG, showPG }) => {





    return (



        // <div className="col-md-5">

        <Toast onClose={() => setShowPG(false)} show={showPG} >
            <Toast.Header>

                <strong className="mr-auto">PG</strong>

            </Toast.Header>
            <Toast.Body><a href="https://www.bbfc.co.uk/rating/PG" rel="noreferrer" target="_blank">additional info</a></Toast.Body>
        </Toast>
        // </div>


    )
}

export default PGToast;