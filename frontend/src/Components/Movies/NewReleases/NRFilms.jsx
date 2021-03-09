import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from 'reactstrap';
import NRDetails from './NRDetails';

const NRFilms = (props) => {

    return (
        <Card id="NR-card">
            <a id="clickcard" href=" http://localhost:3000/listings" >

            </a>
            <CardImg src={props.poster} id="NR-img" />
            <CardBody>
                <CardTitle id="NR-title">

                    <h5>{props.title}</h5>
                    <hr />
                </CardTitle>
                <CardSubtitle>
                    <p>Runtime: {props.runtime}</p>
                    <p>Rating: {props.rating}</p>
                </CardSubtitle>

                <hr />
                <div className="col-md-12">
                    <NRDetails id={props.id}
                        title={props.title}
                        runtime={props.runtime}
                        rating={props.rating}
                        poster={props.poster}
                        director={props.director}
                        actors={props.actors} />
                </div>
            </CardBody>
        </Card >
    )
}
export default NRFilms;