import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import React, { useState } from 'react';

import image from '../../Resources/Logo/lost.jpg'


const EachBlog = ({ item }) => {


    const [modal, setModal] = useState(false);


    const toggle = () => setModal(!modal);

    return (
        
        <>
        

        <div style={{color: 'gold'}}>
            <img
    width={64}
    height={64}
    className="mr-3"
    src={image}
    alt="Generic placeholder"
  />
        <h1> {item.title} </h1>
        <p> {item.lilInfo} </p>
          <Button color="warning" onClick={toggle}> <strong>Read More</strong> </Button>
          <hr/>
          <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>{item.title}</ModalHeader>
            <ModalBody> 
            <p> Blog Published on  {item.lastUpdated}</p>
        <p>{item.blogText} </p>
        <hr/> 
        <p> written by </p>
        <strong> {item.author} </strong>
     
            </ModalBody>    
            <ModalFooter>
              <Button color="secondary" onClick={toggle}>Close</Button>
            </ModalFooter>
          </Modal>
        </div>
       </>
      );
    }
export default EachBlog;