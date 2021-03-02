import { Toast, ToastBody, ToastHeader } from "reactstrap";
import DeletePost from "./DeletePost";
import EditPost from "./EditPost";

const EachPost = ({ item, trigger }) => {
    return (
        <div className="p-6 my-2 rounded">
            <Toast id="toast">
                <ToastHeader id="toastheader"><h5>{item.name}'s post about {item.movie}</h5>
                </ToastHeader>
                <ToastBody style={{ height: "auto" }}>
                    <p id="film-header">Film:</p>
                    <p id="film-point">{item.movie}</p>
                    <p id="topic-header">Topic:</p>
                    <p id="topic-point">{item.topic}</p>
                    <p id="discussion-header">Discussion point:</p>
                    <p id="discussion-point">{item.discussion}</p>
                    <p id="rating">Rating: {item.rating}</p>
                    <hr />
                    <DeletePost className="float-right" del={item._id} trigger={trigger} />
                    <EditPost className="float-right" item={item} trigger={trigger} />
                </ToastBody>
            </Toast>
        </div>

    )
}
export default EachPost;