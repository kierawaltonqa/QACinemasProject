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
                        <div className="col-md-12" id="modalimage">
                            <img src={poster} height="30%" width="30%" />
                        </div>
                        <div className="col-md-12">
                            <hr />
                            <h5>Details...</h5>
                            <p>Directed by: {director}</p>
                            <p>The main cast:
                                    <ul>
                                    {
                                        actors.map((actor) => (
                                            <li>{actor}</li>
                                        ))
                                    }
                                </ul>
                            </p>
                            <p>Runtime: {runtime}</p>
                            <p>Rating: {rating}</p>
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