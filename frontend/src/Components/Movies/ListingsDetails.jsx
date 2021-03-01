import { useParams, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { CardLink, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ListingsDetails = ({ id, title, runtime, rating, director, poster, actors }) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <>
            <CardLink className="btn btn-outline-dark" onClick={toggle}>Details</CardLink>
            <Modal className="modal-container custom-map-modal"
                dialogClassName="modal-dialog"
                isOpen={modal}>
                <ModalHeader>{title}</ModalHeader>
                <ModalBody>
                    <div class="row-md">
                        <div className="col-md-6">
                            <img src={poster} height="50%" width="50%" />
                        </div>
                        <div className="col-md-6">
                            <hr />
                            <h5>Details...</h5>
                            <ul>
                                <li>The runtime for this movie is: {runtime}</li>
                                <li>This movie has a rating of {rating} (to see more info on ratings, visit the classification page)</li>
                                <li>{director} directed this movie.</li>
                                <li>The main cast: {actors}</li>
                            </ul>
                            <hr />
                        </div>
                    </div>

                </ModalBody>
                <ModalFooter>
                    <button onClick={toggle} className="btn btn-outline-danger">Go Back</button>
                </ModalFooter>
            </Modal>

        </>
    )
}
export default ListingsDetails;