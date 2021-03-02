import { Toast, ToastBody, ToastHeader } from "reactstrap";
import DeletePost from "./DeletePost";
import EditPost from "./EditPost";

const EachPost = ({ item, trigger }) => {
    return (
        <div className="p-6 my-2 rounded">
            <Toast>
                <ToastHeader><h5>{item.name}'s post about {item.movie}</h5>
                </ToastHeader>
                <ToastBody style={{ height: "auto" }}>
                    <p>{item.topic}...</p>
                    <p>{item.discussion}</p>
                    <p>Rating: {item.rating}</p>
                    <hr />
                    <DeletePost className="float-right" del={item._id} trigger={trigger} />
                    <EditPost className="float-right" item={item} trigger={trigger} />
                </ToastBody>
            </Toast>
        </div>

    )
}
export default EachPost;