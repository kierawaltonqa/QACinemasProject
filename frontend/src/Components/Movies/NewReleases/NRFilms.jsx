import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from 'reactstrap';
const NRFilms = (props) => {

    return (
        <Card id="NR-card">
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
            </CardBody>
        </Card>
    )
}
export default NRFilms;