import { Toast } from 'react-bootstrap'

const TwelveToast = ({ setShow12, show12 }) => {





    return (





        <Toast onClose={() => setShow12(false)} show={show12} >
            <Toast.Header>

                <strong className="mr-auto">12</strong>

            </Toast.Header>
            <Toast.Body><a href="https://www.bbfc.co.uk/rating/12" rel="noreferrer" target="_blank">additional info</a></Toast.Body>
        </Toast>



    )
}

export default TwelveToast;