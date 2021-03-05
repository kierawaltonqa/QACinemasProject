import React from "react";
import { useState } from "react";

const ContactForm = () => {
  //!warning 
  //   const printToScreen = (e) => {
  //     e.preventDefault();

  //     console.log({ body, subject });
  //     // console.log({ name, body, subject });
  //   };

  // const [name, setName] = useState("");
  //!
  const [body, setBody] = useState("");
  const [subject, setSubject] = useState("");

  return (
    <>

      <h1 className="beauty"> Contact Us </h1>
      <hr></hr>
      <div className="formdiv">
        <form>
          <br />

          <from>
            <label> Subject </label>
            <input
              className="form"
              type="text"
              subject="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <br />

            <label className="formcontroller" size="lg">
              Details
            </label>
            <input
              className="formDetails"
              type="text"
              body="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />

            <br />

            <div className="send">
              <a
                className="send"
                href={`mailto:abc@example.com?subject=${subject}&body=${body}`}
              >
                Send
              </a>
            </div>
          </from>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
