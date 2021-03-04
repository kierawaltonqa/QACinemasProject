import axios from 'axios';
import { CardLink, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react';
import { DISCUSSION_URL } from './CONSTS.json';
import data from '../../Resources/Movies.json';

const EditPost = ({ item, trigger }) => {

    const { name, movie, topic, discussion, rating } = item;
    // const [updateName, setUName] = useState(name);
    const [updateMovie, setUMovie] = useState(movie);
    const [updateTopic, setUTopic] = useState(topic);
    const [updateDiscussion, setUDiscussion] = useState(discussion);
    const [updateRating, setURating] = useState(rating);

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const Filter = require('bad-words')
    const filter = new Filter();

    const updatePost = (e) => {
        e.preventDefault();
        axios.patch(`${DISCUSSION_URL}/updateById/${item._id}`,
            { name, movie: updateMovie, topic: filter.clean(updateTopic), discussion: filter.clean(updateDiscussion), rating: updateRating })
            .then((response) => {
                toggle();
                trigger(`${response.data} about ${updateMovie} by ${name}`);
            })
            .catch((error) => {
                trigger(error.data);
            })
    }

    return (
        <>
            <CardLink className="btn btn-outline-dark" onClick={toggle}>Edit</CardLink>
            <Modal isOpen={modal}>
                <ModalHeader id="edit-header">Post By: {item.name}</ModalHeader>
                <form id="edit-form" onSubmit={updatePost}>
                    <ModalBody>
                        {/* <label>Posted by:</label>
                        <input type="text"
                            value={updateName}
                            className="form-control"
                            placeholder="enter your name"
                            onChange={({ target }) => setUName(target.value)} /> */}
                        <br />
                        <label>Film:</label>
                        <select name="film" class="form-control" placeholder="Select film"
                            onChange={({ target }) => setUMovie(target.value)}>
                            <option value="reset" disabled selected hidden>Please Choose...</option>
                            {
                                data.map((film) => (
                                    <option
                                        value={film.title}
                                    >
                                        {film.title}
                                    </option>
                                ))
                            }
                        </select>
                        {/* <input type="text"
                            value={updateMovie}
                            className="form-control"
                            placeholder="movie title"
                            onChange={({ target }) => setUMovie(target.value)} /> */}
                        <br />
                        <label>Topic:</label>
                        <input type="text"
                            value={updateTopic}
                            className="form-control"
                            placeholder="topic"
                            onChange={({ target }) => setUTopic(target.value)} />
                        <br />
                        <label>Discussion point:</label>
                        <input type="text"
                            value={updateDiscussion}
                            className="form-control"
                            placeholder="discussion point"
                            onChange={({ target }) => setUDiscussion(target.value)} />
                        <br />
                        <label>Rating:</label>
                        <input type="number"
                            value={updateRating}
                            className="form-control"
                            placeholder="rating"
                            onChange={({ target }) => setURating(target.value)} />
                    </ModalBody>
                    <ModalFooter id="edit-footer">
                        <button onClick={() => toggle} className="btn btn-outline-danger">Cancel</button>
                        <button onSubmit={updatePost} type="submit" className="btn btn-outline-success">Update</button>
                    </ModalFooter>
                </form>
            </Modal>
        </>
    )
}

export default EditPost;