import React from 'react'
import { Card, CardBody, CardTitle, CardFooter } from "reactstrap"
import "../Resources/TicketBooking.css"

const Sidebar = ({ basketid }) => {


    return (
        <div className=" border-right" id="bookingside" style={{ backgroundColor: "black" }}>
            <Card style={{ backgroundColor: "gold" }}>
                <CardBody style={{ backgroundColor: "gold" }}>
                    <CardTitle><h2>My Basket:</h2></CardTitle>
                    <hr />
                    <div>
                        <div className="row">
                            <div className="col-6">
                                <h6 style={{ backgroundColor: "" }}><b>Ticket Holder Name:</b></h6>
                            </div>
                            <div className="col-6">
                                <p >{basketid.bookername}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <h6 style={{ backgroundColor: "" }}><b>Movie Title:</b></h6>
                            </div>
                            <div className="col-6">
                                <p>{basketid.moviename}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <h6 style={{ backgroundColor: "" }}><b>Adult Tickets:</b></h6>
                            </div>
                            <div className="col-6">
                                <p>{basketid.adultseats}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <h6 style={{ backgroundColor: "" }}><b>Child Tickets:</b></h6>
                            </div>
                            <div className="col-6">
                                <p>{basketid.childseats}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <h6 style={{ backgroundColor: "" }}><b>Deluxe Seats:</b></h6>
                            </div>
                            <div className="col-6">
                                <p>{basketid.deluxe}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <h6 style={{ backgroundColor: "" }}><b>Screening Time:</b></h6>
                            </div>
                            <div className="col-6">
                                <p>{basketid.time}</p>
                            </div>
                        </div>
                    </div>
                </CardBody>
                <CardFooter className="text-muted">

                </CardFooter>
            </Card>
        </div>
    )
}

export default Sidebar
