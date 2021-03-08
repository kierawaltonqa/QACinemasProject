import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import CardPayment from './CardPayment';

const PaymentModal = ({ hidden }) => {

    const [key, setKey] = useState('home');
    

    return (
        <Modal isOpen={hidden} className="modal-container modal-dialog modal-dialog-centered ">
            <ModalHeader style={{ backgroundColor: "blue", color: "white" }}>
                QA Cinema Pay Online:
            <p>Please enter billing info to pay for the your selected tickets.</p>
            </ModalHeader>
            <ModalBody style={{ backgroundColor: "white" }} >

                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                >
                    <Tab eventKey="home" title="Credit/Debit Cards">

                        <CardPayment />
                        

                    </Tab>
                    <Tab eventKey="profile" title="PayPal">

                    </Tab>
                </Tabs>


            </ModalBody>

        </Modal>
    )
}

export default PaymentModal
