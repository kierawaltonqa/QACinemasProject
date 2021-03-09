import React, { useState } from 'react'
import { Alert, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import "../Resources/TicketBooking.css"
import axios from "axios";
import { BOOKING_URL } from "../Resources/CONST.json"


const ToggleInput = ({ filmname, basketid }) => {


    //* States for database
    const date1 = new Date();
    const [movieName, setMovieName] = useState(filmname)
    const [date, setDate] = useState(date1.toLocaleDateString())
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

    const toggleHidden = () => {

        setHidden(!hidden);
    }

    // Alert for no name or time
    const toggleAlert = () => {
        setTimeout( () => {
            setalertHidden(false);
        }, 3000);
    }

    // Alert for no ticket chosen
    const toggleTicketAlert = () => {
        setTimeout( () => {
            setnoTicket(false);
        }, 3000);
    }



    // CREATE METHOD

    const create = () => {
        if(adultTic + childTic == 0) {
            setnoTicket(true);
            toggleTicketAlert();
        }else{ 
        var deluxeAnswer = "No";
        if(deluxe == true){
            deluxeAnswer = "Yes"
        }
        else{
            deluxeAnswer = "No"
        }
        let totalCost = (deluxe ? (adultTic * 14) + (childTic * 10) 
        : (adultTic * 8) + (childTic * 4));
        axios.post(`${BOOKING_URL}/create`, { moviename: movieName, date, time, bookername: bookName, adultseats: adultTic, childseats: childTic, deluxe : deluxeAnswer, totalCost})
            .then(async (res) => {
                getBasket(res.data)
                toggleHidden(!hidden);
            })
            .catch((err) => {
                console.log(err);
                setalertHidden(true);
                toggleAlert();
            });
    }}

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


    //! TEST
    const testing = () => {
        console.log(movieName);
        console.log(date);
        console.log(time);
        console.log(bookName);
        console.log(adultTic);
        console.log(childTic);
        console.log(deluxe);
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
                    <Alert isOpen={alertHidden} color="danger" style={{textAlign:"center"}}>Please enter your name and chosen screen time!</Alert>
                    <Alert isOpen={noTicket} color="danger" style={{textAlign:"center"}}>Please select at least one ticket!</Alert>

                    <div className="form-mb position-relative">
                        <div className="mb-3" >
                            <label htmlFor="" style={{ fontSize: "17px" }}>Ticket Holder Name:</label>
                            <br />
                            <input style={{ width: "180px" }} type="text" placeholder="Enter Name:" onChange={({ target }) => setBookName(target.value)} />
                        </div>
                        <hr style={{ backgroundColor: "black" }} />
                        <div>
                            <label htmlFor="" style={{ fontSize: "17px" }}>Screen Time:</label>
                            <br />
                            <input style={{ width: "90px" }} type="time" placeholder="Screen Time" onChange={({ target }) => setTime(target.value)} />
                        </div>
                        <br />
                        <div>
                        </div>
                        <label htmlFor="" style={{ fontSize: "17px" }}>Tickets:</label>

                        <div className="row" style={{marginLeft:"0px"}}>
                            <input style={{ width: "90px", marginRight: "4px" }} type="number" placeholder="£8  Adult" onChange={({ target }) => setAdultTic(target.value)} />
                        </div>
                        <input style={{ width: "90px", }} type="number" placeholder="£4  Child" onChange={({ target }) => setChildTic(target.value)} />

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
