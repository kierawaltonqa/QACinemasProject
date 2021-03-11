import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const Details = ({ item }) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    if (item.img == null) {
        return null;
    }
    else {
        return (
            <>
                <button className="btn btn-outline-dark" onClick={toggle} style={{ marginLeft: "2rem" }} >Details</button>
                <div className="modal-dialog modal-fullscreen-sm-down">
                    <Modal className="modal-container custom-map-modal"
                        id="listingmodal"
                        dialogClassName="modal-dialog"
                        isOpen={modal}>
                        <ModalHeader id="modal-header">{item.title}</ModalHeader>
                        <ModalBody id="modal-body">
                            <div class="row-md">
                                <div className="col-md-12" id="modalimage">
                                    <img alt={item.title} src={item.img} height="30%" width="30%" />
                                </div>
                                <div className="col-md-12">
                                    <hr />
                                    <p id="director">Directed by {item.director}</p>
                                    <h6>The main cast:</h6>

                                    {
                                        item.actors.map((actor) => (
                                            <p id="cast">{actor}</p>
                                        ))
                                    }
                                    <br />
                                    <p id="runtime">Runtime: {item.runtime}</p>
                                    <p id="card-rating">Rating: {item.rating}</p>
                                </div>
                            </div>

                        </ModalBody>
                        <ModalFooter id="modalfooter">
                            <button onClick={toggle} className="btn btn-outline-danger">Go Back</button>
                            <a href="../listings"><button className="btn btn-outline-primary" >View Listings Page</button></a>
                        </ModalFooter>
                    </Modal>
                </div>
            </>
        )
    }
}
export default Details;