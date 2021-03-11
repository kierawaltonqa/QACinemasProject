import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from 'reactstrap';
import NRDetails from './NRDetails';
import { useState } from 'react';

const NRFilms = (props) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <Card id="NR-card">
            <a id="clickcard" onClick={toggle} href={toggle}>

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
                    <NRDetails
                        modal={modal}
                        setModal={setModal}
                        toggle={toggle}
                        id={props.id}
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