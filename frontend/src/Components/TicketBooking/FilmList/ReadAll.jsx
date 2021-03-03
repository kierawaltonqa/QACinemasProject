import React from 'react'
import films from "../../../Resources/Movies.json"
import { FormGroup, Label } from 'reactstrap'

const ReadAll = () => {


    return (


        <>
            <div className="container">
                {films.map((film) => (
                    <div >
                        <h4 style={{ color: 'gold' }}><center>{film.title}</center></h4>
                        {/* <center><img style={{height:"300px", width:"300px"}} src={film.img} alt=""/></center> */}
                        <div className="form-mb position-relative">
                            <center>
                                <input id="adulttickets" style={{ width: "90px" }} type="number" placeholder="Adult" />
                                <input style={{ width: "90px", margin: "10px" }} type="number" placeholder="Child" />

                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label" style={{ color: "dodgerblue", marginLeft: "8px", marginBottom: "4px" }}>Deluxe?</label>
                                </div>

                            </center>
                            <center>
                                <button className="btn btn-success">Confirm</button>
                            </center>
                            <hr />

                        </div>

                    </div>
                ))}
            </div>
        </>
    )
}

export default ReadAll
