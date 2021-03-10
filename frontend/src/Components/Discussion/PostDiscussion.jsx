import { useState } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import axios from 'axios';
import { DISCUSSION_URL } from './CONSTS.json';
// import penguinimg from '../../Resources/penguinwtf2.png';
import data from '../../Resources/Movies.json';

const PostDiscussion = ({ trigger }) => {

    const [name, setName] = useState('');
    const [movie, setMovie] = useState("reset");
    const [topic, setTopic] = useState('');
    const [discussion, setDiscussion] = useState('');
    const [rating, setRating] = useState(0);

    const Filter = require('bad-words')
    // const filter = new Filter();
    var customFilter = new Filter({ placeHolder: '*' });

    const createDiscussion = async (e) => {
        e.preventDefault();
        await axios.post(`${DISCUSSION_URL}/create`, { name: customFilter.clean(name), movie, topic: customFilter.clean(topic), discussion: customFilter.clean(discussion), rating })
            .then((response) => {
                clearForm();
                trigger(response.data);
            }).catch((error) => {
                trigger(error.data)
            })
    }


    const clearForm = () => {
        setName('');
        setTopic('');
        setDiscussion('');
        setRating(0);
        setMovie("reset");
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
                        <label>Select the Movie</label>
                        <select name="film" class="form-control" placeholder="Select film"
                            onChange={({ target }) => setMovie(target.value)}
                            value={movie}>
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
                            max="10"
                            min="1"
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