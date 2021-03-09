import axios from "axios";
import { CardLink, Modal, ModalBody, ModalFooter } from "reactstrap";
import { DISCUSSION_URL } from './CONSTS.json';
import { useState } from 'react';

const DeletePost = ({ item, trigger }) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const deletePost = (e) => {
        e.preventDefault();
        axios.delete(`${DISCUSSION_URL}/delete/${item._id}`)
            .then((response) => {
                trigger(`successfully deleted post about ${item.movie} by ${item.name} `);
            }).catch((error) => {
                trigger(`error deleting post`)
            })
    }

    return (
        <>
            <CardLink className="btn btn-outline-danger" onClick={toggle}>X</CardLink>
            <Modal isOpen={modal} id="delete-modal">
                <ModalBody id="delete-modal-body">
                    <h4>Are you sure that you want to delete this post?</h4>
                </ModalBody>
                <ModalFooter id="delete-footer">
                    <button onClick={toggle} className="btn btn-outline-danger">No, Go Back</button>
                    <button onClick={deletePost} type="submit" className="btn btn-outline-success">Yes, Delete</button>
                </ModalFooter>
            </Modal>
        </>
    )
}
export default DeletePost;