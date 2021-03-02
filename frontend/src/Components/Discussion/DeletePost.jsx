import axios from "axios";
import { CardLink } from "reactstrap";
import { DISCUSSION_URL } from './CONSTS.json';

const DeletePost = ({ del, trigger }) => {

    const deletePost = (e) => {
        e.preventDefault();
        axios.delete(`${DISCUSSION_URL}/delete/${del}`)
            .then((response) => {
                trigger(`successfully deleted!`);
            }).catch((error) => {
                trigger(`error deleting post`)
            })
    }

    return (
        <CardLink className="btn btn-outline-danger" onClick={deletePost}>X</CardLink>
    )
}
export default DeletePost;