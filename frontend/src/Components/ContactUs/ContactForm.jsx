import React from 'react'
import {Form, Button} from 'react-bootstrap'
import { useState } from 'react';

const ContactForm = () => {

    const printToScreen = (e) => {
        e.preventDefault();

        console.log({name, email,subject})
   
    }

    const sendEmail = (e) => {
       e.preventDefault();
       return window.location = mailto : "xyz@abc.com";
       

    }

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')

  

     return(
        <>
        <di className="container" className="title">
        <form>

        <label>Name</label>
        <input 
        type="text"
        name="name"
        value={name}
       onChange={e => setName(e.target.value)} />       


<br/>
       
<label>Email</label>
        <input 
        type="text"
        email="email"
        value={email}
       onChange={e => setEmail(e.target.value)} />       


<br/>
<label>Subject</label>
        <input 
        type="text"
        subject="subject"
        value={subject}
       onChange={e => setSubject(e.target.value)} />       




<br/>

{/* <a class="mailto" href="mailto:contact@test.com">Send</a> */}

<button onclick={sendEmail}>Send e-mail</button>





        </form>
        
        </di>
        </>
     );
}

export default ContactForm
