import React, { useState } from 'react'
import { Alert, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import "../Resources/TicketBooking.css"
import axios from "axios";
import { BOOKING_URL } from "../Resources/CONST.json"


const ToggleInput = ({ filmname, basketid }) => {


    //* States for database
    const date1 = new Date();
    const movieName = filmname;
    // const [movieName, setMovieName] = useState(filmname)
    const date = date1.toLocaleDateString();
    // const [date, setDate] = useState(date1.toLocaleDateString())
    const [time, setTime] = useState("")
    const [bookName, setBookName] = useState("")
    const [adultTic, setAdultTic] = useState(0)
    const [childTic, setChildTic] = useState(0)
    const [deluxe, setDeluxe] = useState(false)

    //* Modal state
    const [hidden, setHidden] = useState(false)
    // if no name or screentime chosen
    const [alertHidden, setalertHidden] = useState(false)
    // if no ticket is chosen
    const [noTicket, setnoTicket] = useState(false)
    // IF minus tickets chosen
    const [minusTicket, setMinusTicket] = useState(false);

    const toggleHidden = () => {

        setHidden(!hidden);
    }

    // Alert for no name or time
    const toggleAlert = () => {
        setTimeout(() => {
            setalertHidden(false);
        }, 3000);
    }

    // Alert for no ticket chosen
    const toggleTicketAlert = () => {
        setTimeout(() => {
            setnoTicket(false);
        }, 3000);
    }
    // Alert for no ticket chosen
    const toggleMinusTicketAlert = () => {
        setTimeout(() => {
            setMinusTicket(false);
        }, 3000);
    }



    // CREATE METHOD

    const create = () => {
        // If the tickets have a minus
        if (adultTic < 0 || childTic < 0) {
            setMinusTicket(true);
            toggleMinusTicketAlert();

        } else {

            // If the tickets are both 0
            if (adultTic + childTic == 0) {
                setnoTicket(true);
                toggleTicketAlert();
            } else {
                // Check for deluxe answer
                let deluxeAnswer = "No";
                if (deluxe === true) {
                    deluxeAnswer = "Yes"
                }
                else {
                    deluxeAnswer = "No"
                }
                // Final create method
                let totalCost = (deluxe ? (adultTic * 14) + (childTic * 10)
                    : (adultTic * 8) + (childTic * 4));
                axios.post(`${BOOKING_URL}/create`, { moviename: movieName, date, time, bookername: bookName, adultseats: adultTic, childseats: childTic, deluxe: deluxeAnswer, totalCost })
                    .then(async (res) => {
                        getBasket(res.data)
                        toggleHidden(!hidden);
                    })
                    .catch((err) => {
                        console.log(err);
                        setalertHidden(true);
                        toggleAlert();
                    });
            }
        }
    }

    // GET METHOD

    const getBasket = async (id) => {
        // const id = basketdata;
        console.log(id);
        await axios.get(`${BOOKING_URL}/readOne/${id}`)
            .then((res) => {
                basketid(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }




    return (

        <>
            <div>
                <button id="pressButton" className="btn btn-dark" style={{ marginLeft: "10px" }} onClick={toggleHidden}>+</button>
            </div>

            <Modal isOpen={hidden} className="modal-lg modal-dialog modal-dialog-centered ">
                <ModalHeader style={{ backgroundColor: "black", color: "gold" }}>
                    Purchase Tickets: {filmname}

                </ModalHeader>
                <ModalBody style={{ backgroundColor: "gold" }} >
                    <Alert isOpen={alertHidden} color="danger" style={{ textAlign: "center" }}>Please enter your name and chosen screen time!</Alert>
                    <Alert isOpen={noTicket} color="danger" style={{ textAlign: "center" }}>Please select at least one ticket!</Alert>
                    <Alert isOpen={minusTicket} color="danger" style={{ textAlign: "center" }}>You're not taking our money...</Alert>

                    <div className="form-mb position-relative">
                        <div className="mb-3" >
                            <label htmlFor="" style={{ fontSize: "17px", color: "black" }}>Ticket Holder Name:</label>
                            <br />
                            <input style={{ width: "180px" }} type="text" placeholder="Enter Name:" onChange={({ target }) => setBookName(target.value)} />
                        </div>
                        <hr style={{ backgroundColor: "black" }} />
                        <div>
                            <label htmlFor="" style={{ fontSize: "17px", color: "black" }}>Screen Time:</label>
                            <br />
                            <input style={{ width: "90px" }} type="time" placeholder="Screen Time" onChange={({ target }) => setTime(target.value)} />
                        </div>
                        <br />
                        <div>
                        </div>
                        <label htmlFor="" style={{ fontSize: "17px", color: "black" }}>Tickets:</label>

                        <div className="row" style={{ marginLeft: "0px" }}>
                            <input style={{ width: "90px", marginRight: "4px" }} className="form-control" min="0" type="number" placeholder="£8  Adult" onChange={({ target }) => setAdultTic(target.value)} />
                        </div>
                        <input style={{ width: "90px", }} className="form-control" min="0" type="number" placeholder="£4  Child" onChange={({ target }) => setChildTic(target.value)} />

                        <hr />
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" value={deluxe} onChange={() => setDeluxe(!deluxe)} />
                            <label className="form-check-label" style={{ color: "black" }}>Deluxe?  +£5 Per ticket</label>
                        </div>


                    </div>


                </ModalBody>
                <ModalFooter style={{ backgroundColor: "black" }}>
                    <button className="btn btn-warning" onClick={() => create()}>Confirm</button>
                    <button className="btn btn-danger" onClick={toggleHidden}>X</button>
                </ModalFooter>
                <form action=""></form>

            </Modal>
        </>
    )



}

export default ToggleInput;
