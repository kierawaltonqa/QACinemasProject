import React, { useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import "../Resources/TicketBooking.css"


const ToggleInput = ({ filmname, adulttic, childtic, deluxetic }) => {

    const [hidden, setHidden] = useState(false)

    const toggleHidden = () => {

        setHidden(!hidden);
        clearVals();
    }

    const clearVals = () => {

        adulttic(0);
        childtic(0);
        deluxetic("off");

    }

    const testVals = () => {

        adulttic(0);
        childtic(0);
        deluxetic("off");

        setHidden(!hidden);
    }




    return (

        <>
            <div>
                <button className="btn btn-secondary" style={{ marginLeft: "10px" }} onClick={toggleHidden}>Press</button>
            </div>

            <Modal isOpen={hidden} className="modal-container modal-dialog modal-dialog-centered ">
                <ModalHeader style={{ backgroundColor: "black", color: "white" }}>
                    Purchase Tickets: {filmname}

                </ModalHeader>
                <ModalBody style={{ backgroundColor: "gold" }} >

                    <div className="form-mb position-relative">
                        {/* <center> */}
                        <div >
                            <label htmlFor="" style={{ fontSize: "17px" }}>Ticket Holder Name:</label>
                            <br />
                            <input style={{ width: "180px" }} type="text" placeholder="Enter Name:" />
                        </div>
                        <hr style={{ backgroundColor: "black" }} />
                        <div>
                            <label htmlFor="" style={{ fontSize: "17px" }}>Screen Time:</label>
                            <br />
                            <input style={{ width: "90px" }} type="time" placeholder="Screen Time" />
                        </div>
                        <br />
                        <div>
                        </div>
                        <label htmlFor="" style={{ fontSize: "17px" }}>Tickets:</label>

                        <div>
                            <input style={{ width: "90px", marginRight: "4px" }} type="number" placeholder="Adult" onChange={({ target }) => adulttic(target.value)} />
                        </div>
                        <input style={{ width: "90px", }} type="number" placeholder="Child" onChange={({ target }) => childtic(target.value)} />

                        <hr />
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" onChange={({ target }) => deluxetic(target.value)} />
                            <label className="form-check-label" style={{ color: "black" }}>Deluxe?</label>
                        </div>

                        {/* </center> */}


                    </div>


                </ModalBody>
                <ModalFooter style={{ backgroundColor: "black" }}>
                    <button className="btn btn-warning" onClick={testVals}>Confirm</button>
                    <button className="btn btn-danger" onClick={toggleHidden}>X</button>
                </ModalFooter>
                <form action=""></form>

            </Modal>
        </>
    )



}

export default ToggleInput;
