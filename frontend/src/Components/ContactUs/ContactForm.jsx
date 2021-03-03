import React from 'react'
import { useState } from 'react';

const ContactForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const printValues = e => {
        e.preventDefault();
        console.log(username,password);
    }
    
    return (
        <>
        <form onSubmit={printValues}>
        <label> Username:</label>
            <input name="username" 
            type="text" 
            value={username} 
            onChange={e => setUsername(e.target.value)}/>

        <label> Password: </label>
            <input type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}/>
        <br/>
        <button>Submit</button>
        </form>

        <h1> {printValues} </h1>
    </>
    );
}

export default ContactForm
