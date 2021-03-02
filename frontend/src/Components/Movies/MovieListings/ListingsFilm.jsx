import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from 'reactstrap';
import ListingsDetails from './ListingsDetails';

const ListingsFilm = (props) => {

    return (

        <Card id="L-card">
            <CardImg src={props.poster} id="L-img" />
            <CardBody>
                <CardTitle id="L-title">

                    <h5>{props.title}</h5>
                    <hr />
                </CardTitle>
                <CardSubtitle>
                    <p>Runtime: {props.runtime}</p>
                    <p>Rating: {props.rating}</p>
                </CardSubtitle>
                <hr />
                <div className="col-md-12">
                    <ListingsDetails id={props.id}
                        title={props.title}
                        runtime={props.runtime}
                        rating={props.rating}
                        poster={props.poster}
                        director={props.director}
                        actors={props.actors} />
                </div>
            </CardBody>
        </Card>

    )

}
export default ListingsFilm;