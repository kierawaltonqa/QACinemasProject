import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import turtlebay from "../../../Resources/turtle-bay-.jpg";

const TBModal = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <>
            <button size={30} className="btn btn-outline-dark" onClick={toggle}>View Details</button>
            <Modal isOpen={modal}>
                <ModalHeader id="modal-header">
                    <h3>Turtle Bay</h3>
                </ModalHeader>
                <ModalBody>
                    <div className="row">
                        <img src={turtlebay} alt="turtlebay" height="30%" width="30%" />
                    </div>
                </ModalBody>
                <ModalFooter id="modalfooter">
                    <button onClick={toggle} className="btn btn-outline-danger">Go Back</button>
                </ModalFooter>
            </Modal>
        </>
    )
}
export default TBModal;