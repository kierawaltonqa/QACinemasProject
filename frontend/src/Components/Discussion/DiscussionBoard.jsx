import PostDiscussion from "./PostDiscussion";
import { useState } from 'react';
import ReadDiscussion from "./ReadDiscussion";
import './Discussion.css';

const DiscussionBoard = () => {

    const [message, setMessage] = useState('');

    const trigger = (data) => {
        setMessage(data);
    }

    return (
        <div className="container" >
            <div className="row-md">
                <hr />
                <h3 id="discussionboard-title">Discussion Board.</h3>
                <hr />
                <p id="discussionboard-subtitle">Post here to discuss and rate the films you have watched...</p>
                <br />
            </div>
            <div className="row">
                <div className="col-md-3">
                    <PostDiscussion trigger={trigger} />
                </div>
                <div className="col-md-9">
                    <div className="container">
                        <div className="alert alert-success">{message}</div>
                        <ReadDiscussion message={message} trigger={trigger} />
                    </div>
                </div>
            </div>
        </div>
    )

}
export default DiscussionBoard;