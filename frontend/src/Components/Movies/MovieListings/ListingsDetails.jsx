import { useState } from 'react';
import { CardLink, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const ListingsDetails = ({ id, title, runtime, rating, director, poster, actors }) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <>
            <CardLink className="btn btn-outline-dark" onClick={toggle}>Details</CardLink>

            <div className="modal-dialog modal-fullscreen-sm-down">
                <Modal className="modal-container custom-map-modal"
                    id="listingmodal"
                    dialogClassName="modal-dialog"
                    isOpen={modal}>
                    <ModalHeader id="modal-header">{title}</ModalHeader>
                    <ModalBody id="modal-body">
                        <div class="row-md">
                            <div className="col-md-12" id="modalimage">
                                <img src={poster} height="30%" width="30%" />
                            </div>
                            <div className="col-md-12">
                                <hr />
                                <p id="director">Directed by {director}</p>
                                <h6>The main cast: </h6>
                                {
                                    actors.map((actor) => (
                                        <p id="cast">{actor}</p>
                                    ))
                                }
                                <br />
                                <p id="runtime">Runtime: {runtime}</p>
                                <p id="rating">Rating: {rating}</p>
                            </div>
                        </div>

                    </ModalBody>
                    <ModalFooter id="modalfooter">
                        <button onClick={toggle} className="btn btn-outline-danger">Go Back</button>
                    </ModalFooter>
                </Modal>
            </div>
        </>
    )
}
export default ListingsDetails;