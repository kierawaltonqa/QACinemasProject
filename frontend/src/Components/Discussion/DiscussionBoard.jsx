import PostDiscussion from "./PostDiscussion";
import { useState } from 'react';

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
        </div>
    )

}
export default DiscussionBoard;