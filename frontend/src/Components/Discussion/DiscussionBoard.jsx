import PostDiscussion from "./PostDiscussion";
import { useState } from 'react';
import ReadDiscussion from "./ReadDiscussion";

const DiscussionBoard = () => {

    const [message, setMessage] = useState('');

    const trigger = (data) => {
        setMessage(data);
    }

    return (
        <div className="row">
            <div className="col-md-3">
                <PostDiscussion trigger={trigger} />
            </div>
            <div className="container">
                <div className="col-md-9">
                    <div className="alert alert-success">{message}</div>
                    <ReadDiscussion message={message} trigger={trigger} />
                </div>
            </div>
        </div>
    )

}
export default DiscussionBoard;