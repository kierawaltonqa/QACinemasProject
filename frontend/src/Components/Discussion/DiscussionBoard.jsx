import PostDiscussion from "./PostDiscussion";
import { useState } from 'react';
import ReadDiscussion from "./ReadDiscussion";
import './Discussion.css';
import penguin from '../../Resources/penguin2.jpg'

const DiscussionBoard = () => {

    const [message, setMessage] = useState('');

    const trigger = (data) => {
        setMessage(data);
    }

    return (
        <div className="container" >
            <div className="row">
                <div className="col-md-3">
                    <br />
                    <img src={penguin} alt="penguin" id="penguin" />
                </div>
                <div className="col-md-9">
                    <hr />
                    <h2 id="discussionboard-title">Discussion Board.</h2>
                    <hr />

                    <h4 id="discussionboard-subtitle">Post here to discuss and rate the films you have watched...</h4>
                    <br />
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <PostDiscussion trigger={trigger} />
                </div>
                <div className="col-md-9">
                    <div className="container">
                        <div id="alert" className="alert alert-success">{message}</div>
                        <ReadDiscussion message={message} trigger={trigger} />
                    </div>
                </div>
            </div>
        </div>
    )

}
export default DiscussionBoard;