import data from '../../../Resources/Movies.json';
import ListingsFilm from './ListingsFilm';
import '../Movies.css';
import Footer from '../../FooterFolder/Footer';

const Listings = () => {
    return (
        <>
            <div className="container">
                <div className="row-md" id="listingheader">
                    <hr id="hr" />
                    <h3>Movies Available To Watch.</h3>
                    <hr id="hr" />
                    <p>On this page you will find a summary of all of the films we have available for viewing at QA Cinemas. Select the details button under each film to view more about it.</p>
                </div>
                <div className="row">
                    {
                        data.map((film) => (
                            <div className="col-md-3">
                                <br />
                                <ListingsFilm
                                    key={film.id}
                                    title={film.title}
                                    runtime={film.runtime}
                                    rating={film.rating}
                                    poster={film.img}
                                    director={film.director}
                                    actors={film.actors}
                                />
                            </div>
                        ))
                    }

                </div>
            </div>
            <Footer />
        </>
    )
}
export default Listings;