import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import pizzaexpress from "../../../Resources/pizzaexpress.jpg";
import carluccios from "../../../Resources/carrlucios.jpg";

const RestaurantsModal = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [key, setKey] = useState('home');

    return (
        <>
            <button size={30} className="btn btn-outline-dark" onClick={toggle}>View Details</button>
            <Modal isOpen={modal}>
                <ModalHeader id="modal-header">
                    <h4>Restaurants</h4>
                </ModalHeader>
                <ModalBody id="modal-body">
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                    >
                        <Tab eventKey="home" title="Pizza Express">
                            <div className="row-md">
                                <br />
                                <center>
                                    <img src={pizzaexpress} alt="turtlebay" height="100%" width="75%" />
                                </center>
                                <br />
                                <p>Turtle Bay is a Carribean restaurant/bar that serves a selection of great food and cocktails.
                                They have happy hour every day, offering 2 for 1 on drinks!
                                    This is located a five minute walk away from QA Cinemas.</p>
                            </div>
                        </Tab>
                        <Tab eventKey="profile" title="Carluccio's">
                            <div className="row-md">
                                <br />
                                <center>
                                    <img src={carluccios} alt="allbarone" id="allbarone" height="90%" width="75%" />
                                </center>
                                <br />
                                <p>All Bar One is a stylish wine bar/pub that offers an extensive range of drinks at reasonable prices.
                                    This is located just a few doors down from us and is the perfect place for a post-movie drink.</p>
                            </div>
                        </Tab>
                    </Tabs>

                </ModalBody>
                <ModalFooter id="modalfooter">
                    <button onClick={toggle} className="btn btn-outline-danger">Go Back</button>
                </ModalFooter>
            </Modal>
        </>
    )
}
export default RestaurantsModal;