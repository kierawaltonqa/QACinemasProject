import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import turtlebay from "../../../Resources/turtle-bay-.jpg";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const TBModal = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [key, setKey] = useState('home');

    return (
        <>
            <button size={30} className="btn btn-outline-dark" onClick={toggle}>View Details</button>
            <Modal isOpen={modal}>
                <ModalHeader id="modal-header">
                    <h4>Bars</h4>
                </ModalHeader>
                <ModalBody id="modal-body">
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                    >
                        <Tab eventKey="home" title="Home">
                            <p>Turtle Bay</p>
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                            <p>All Bar One</p>
                        </Tab>
                    </Tabs>
                    {/* <div className="row">
                        <center>
                            <img src={turtlebay} alt="turtlebay" height="75%" width="75%" />
                        </center>
                    </div> */}
                </ModalBody>
                <ModalFooter id="modalfooter">
                    <button onClick={toggle} className="btn btn-outline-danger">Go Back</button>
                </ModalFooter>
            </Modal>
        </>
    )
}
export default TBModal;