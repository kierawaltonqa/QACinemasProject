import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, ModalFooter } from 'reactstrap';

const CardPayment = () => {

    const [dropHidden, setDropHidden] = useState(false);
    const [cardType, setcardType] = useState('Select...');
    const [cardName, setcardName] = useState('');
    const [cardNumber, setcardNumber] = useState('');
    const [cvv, setcvv] = useState('');
    const [expiary, setexpiary] = useState('');
    const [postcode, setpostcode] = useState('');
    const [toC, settoC] = useState(false);

    const hiddenState = () => {
        setDropHidden(!dropHidden);
    }

    const finalSubmit = () => {
        console.log(cardType);
        console.log(cardName);
        console.log(cardNumber);
        console.log(cvv);
        console.log(expiary);
        console.log(postcode);
        console.log(toC);
    }
    

    return (
        <>
        <div style={{ borderLeft: "20px" }} className="form-mb position-relative">
            <br />
            <div className="mb-3">
                <div className="row">
                    <div className="col-6">
                        <label for="exampleInputEmail1" className="form-label" htmlFor="">Card Type:</label>
                        <select onChange={({ target }) => setcardType(target.value)} className="form-control" direction="end" isOpen={dropHidden} toggle={() => hiddenState() }>
                                <option>Select...</option>
                                <option>Visa</option>
                                <option>Master Card</option>
                                <option>American Express</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="row">
                    <div className="col-6">
                        <label className="form-label" htmlFor="">Card Holder</label>
                        <input onChange={({ target }) => setcardName(target.value)} className="form-control" type="text" />
                    </div>
                    <div className="col-6">
                        <label className="form-label" htmlFor="">Card Number</label>
                        <input onChange={({ target }) => setcardNumber(target.value)} className="form-control" type="number" placeholder="0000-0000-0000-0000" />
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="row">
                    <div className="col-4">
                        <label className="form-label" htmlFor="">CVV</label>
                        <input onChange={({ target }) => setcvv(target.value)} className="form-control" type="number" placeholder="000" />
                    </div>
                    <div className="col-4">
                        <label className="form-label" htmlFor="">Expiary date</label>
                        <input onChange={({ target }) => setexpiary(target.value)} className="form-control" type="date" />
                    </div>
                    <div className="col-4">
                        <label className="form-label" htmlFor="">Post Code</label>
                        <input onChange={({ target }) => setpostcode(target.value)} className="form-control" type="text" />
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div style={{marginLeft:"20px"}} className="row">
                        <label  className="col-auto form-check-label" for="flexCheckDefault">I agree to the terms and conditions:</label>
                        <input onChange={() => settoC(!toC)}  className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </div>
            </div>
        </div>
        <ModalFooter style={{ backgroundColor: "blue" }}>
                <button className="btn btn-primary" onClick={finalSubmit} >Proceed</button>
                <button className="btn btn-danger" onClick={hiddenState} >X</button>
            </ModalFooter>
        </>
        
    )
}

export default CardPayment
