
import { useState } from "react";
import { Toast, Button } from 'react-bootstrap'
import '../../Resources/Toast.css';


const Eighteen = () => {

    const [show18, setShow18] = useState(false);
    const toggleShow18 = () => setShow18(!show18);

    return (
        <>

            <div className="row">
                <div className="col-md-2">

                    <Button onClick={() => toggleShow18()}>Show 18</Button>
                </div>



                <div className="container">
                    <div className="col-md-5">




                        <Toast onClose={() => setShow18(false)} show={show18} id="toastPopUp" >
                            <Toast.Header>

                                <strong className="mr-auto">18</strong>

                            </Toast.Header>
                            <Toast.Body><a href="https://www.bbfc.co.uk/rating/18">additional info</a></Toast.Body>
                        </Toast>
                    </div>
                </div>


            </div>


        </>
    );




}

export default Eighteen;