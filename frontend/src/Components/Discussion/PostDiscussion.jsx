import { useState } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import axios from 'axios';
import { DISCUSSION_URL } from './CONSTS.json';

const PostDiscussion = ({ trigger }) => {

    const [name, setName] = useState('');
    const [movie, setMovie] = useState('');
    const [topic, setTopic] = useState('');
    const [discussion, setDiscussion] = useState('');
    const [rating, setRating] = useState(0);

    const createDiscussion = async (e) => {
        e.preventDefault();
        await axios.post(`${DISCUSSION_URL}/create`, { name, movie, topic, discussion, rating })
            .then((response) => {
                clearForm();
                trigger(response.data);
            }).catch((error) => {
                trigger(error.data)
            })
    }

    const clearForm = () => {
        setName('');
        setMovie('');
        setTopic('');
        setDiscussion('');
        setRating(0);
    }

    return (
        <div className="border-right" id="sidebar">
            <Card>
                <CardBody id="discussion-body">
                    <CardTitle id="discussion-card-title">Post A Discussion Point</CardTitle>
                    <hr id="hr" />
                    <form id="form" onSubmit={createDiscussion}>
                        <input type="text"
                            value={name}
                            className="form-control"
                            placeholder="enter your name"
                            onChange={({ target }) => setName(target.value)} />
                        <br />
                        <input type="text"
                            value={movie}
                            className="form-control"
                            placeholder="movie title"
                            onChange={({ target }) => setMovie(target.value)} />
                        <br />
                        <input type="text"
                            value={topic}
                            className="form-control"
                            placeholder="topic"
                            onChange={({ target }) => setTopic(target.value)} />
                        <br />
                        <input type="text"
                            value={discussion}
                            className="form-control"
                            placeholder="discussion point"
                            onChange={({ target }) => setDiscussion(target.value)} />
                        <br />
                        <label>Rating (/10):</label>
                        <input type="number"
                            value={rating}
                            className="form-control"
                            placeholder="rating"
                            onChange={({ target }) => setRating(target.value)} />
                        <br />
                        <button type="submit" className="btn btn-outline-success col-md-12">Post</button>
                    </form>
                </CardBody>
            </Card>
        </div>
    )
}
export default PostDiscussion;