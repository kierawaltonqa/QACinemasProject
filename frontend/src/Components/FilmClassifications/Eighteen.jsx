
import { useState } from "react";
import { Toast, Button } from 'react-bootstrap'


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
                    <div className="col-md-13">
                        <Toast onClose={() => setShow18(false)} show={show18} >
                            <Toast.Header>

                                <strong className="mr-auto">18</strong>

                            </Toast.Header>
                            <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                        </Toast>

                    </div>
                </div>
            </div>

        </>
    );




}

export default Eighteen;