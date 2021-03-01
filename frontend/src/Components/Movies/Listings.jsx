import data from './Movies.json';
import ListingsFilm from './ListingsFilm';

const Listings = () => {
    return (
        <div className="container">
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