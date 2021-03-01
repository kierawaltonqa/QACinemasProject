import data from './Movies.json';
import ListingsFilm from './ListingsFilm';

const Listings = () => {
    return (
        <div className="container">
            <div className="row-md" id="listingheader">
                <hr />
                <h3>Movies Available To Watch.</h3>
                <hr />
                <p>On this page you will find a summary of all of the films we have available for viewing at QA Cinemas. Select the details button under each film to view more about it.</p>
            </div>
            <div className="row">
                {
                    data.map((film) => (
                        <div className="col-md-3">
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
    )
}
export default Listings;