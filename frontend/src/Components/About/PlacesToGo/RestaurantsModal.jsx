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
            <button size={30} className="btn btn-outline-primary" onClick={toggle} id="res-button">View Details</button>
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
                                <p>Pizza Express is the perfect place to eat with friends and family before going to enjoy a movie of your choice at QA Cinemas.
                                This restaurant regularly offers excellent discounts and vouchers, such as 2 for 1 on Pizza's on Wednesday's.
                                </p>
                                <p>Contact: 01306 888236</p>
                            </div>
                        </Tab>
                        <Tab eventKey="profile" title="Carluccio's">
                            <div className="row-md">
                                <br />
                                <center>
                                    <img src={carluccios} alt="allbarone" id="allbarone" height="90%" width="75%" />
                                </center>
                                <br />
                                <p>Carluccio's provide relaxed all-day dining, serving authentic Italian cuisine.
                                    The food is delicious and fresh and the restaurant is located right next door to the QA Cinema building!</p>
                                <p>Contact: 01923 927267</p>
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