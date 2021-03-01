import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from 'reactstrap';

const ListingsFilm = (props) => {
    return (

        <Card>
            <CardImg src={props.poster} />
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <CardSubtitle>
                    <p>Runtime: {props.runtime}</p>
                    <p>Rating: {props.rating}</p>
                </CardSubtitle>
                <div className="col-md-12">
                    <button className="btn btn-outline-info" >Details</button>
                </div>
            </CardBody>
        </Card>

    )

}
export default ListingsFilm;