import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

const PaymentModal = ({hidden}) => {
    return (
        <Modal isOpen={hidden} className="modal-container modal-dialog modal-dialog-centered ">
        <ModalHeader style={{ backgroundColor: "blue", color: "white" }}>
            Payment

        </ModalHeader>
        <ModalBody style={{ backgroundColor: "white" }} >

            <div className="form-mb position-relative">
               
            </div>


        </ModalBody>
        <ModalFooter style={{ backgroundColor: "blue" }}>
        </ModalFooter>

    </Modal>
    )
}

export default PaymentModal
