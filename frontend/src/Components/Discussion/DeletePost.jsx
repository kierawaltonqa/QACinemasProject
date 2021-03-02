import axios from "axios";
import { CardLink } from "reactstrap";
import { DISCUSSION_URL } from './CONSTS.json';

const DeletePost = ({ item, trigger }) => {

    // const time = new Date().toLocaleString;

    const deletePost = (e) => {
        e.preventDefault();
        axios.delete(`${DISCUSSION_URL}/delete/${item._id}`)
            .then((response) => {
                trigger(`successfully deleted post about ${item.movie} by ${item.name} `);
            }).catch((error) => {
                trigger(`error deleting post`)
            })
    }

    return (
        <CardLink className="btn btn-outline-danger" onClick={deletePost}>X</CardLink>
    )
}
export default DeletePost;