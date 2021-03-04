import React, { useState } from 'react'
import ReadAll from '../FilmList/ReadAll'
import Sidebar from '../Sidebar/Sidebar'
import "../Resources/TicketBooking.css"

const TicketBooking = () => {


    const [movieName, setMovieName] = useState("")
    const [date, setDate] = useState(Date())
    const [time, setTime] = useState("")
    const [bookName, setBookName] = useState("")
    const [adultTic, setAdultTic] = useState(0)
    const [childTic, setChildTic] = useState(0)
    const [deluxe, setDeluxe] = useState("off")

    



    return (

        <>
            <div className="row">
                <div className="col-9">
                    <br />
                    <h2 style={{ color: "white", backgroundColor: "grey", marginLeft: "25px" }}><center>Ticket Booking:</center></h2>

                    <br />
                    <br />
                    <div className="">
                        <ReadAll adulttic={setAdultTic} childtic={setChildTic} deluxetic={setDeluxe}  />
                    </div>
                </div>
                <div className="col-3">
                    <Sidebar />
                </div>
            </div>
        </>

    )

}

export default TicketBooking
