import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import CardPayment from './CardPayment';

const PaymentModal = ({ hidden, sethidden }) => {

    // Tab choice
    const [key, setKey] = useState('card');


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
                    onSelect={(k) => setKey(k)}>
                    <Tab eventKey="card" title="Credit/Debit Cards">
                        <CardPayment sethidden={sethidden} />
                    </Tab>

                    <Tab eventKey="paypal" title="PayPal">
                        <hr style={{ borderColor: "black" }} />
                        <h2 style={{ color: "black", textAlign: "center" }}>Coming soon..</h2>
                        <hr style={{ borderColor: "black" }} />
                    </Tab>
                </Tabs>
            </ModalBody>
        </Modal >
    )
}

export default PaymentModal
