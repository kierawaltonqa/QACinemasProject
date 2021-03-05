import { Button, Form, FormControl } from 'react-bootstrap';
import data from '../../Resources/Movies.json';

const ReadSearch = ({ handleChange, query }) => {

    const findFilmData = ((query) => {
        data.map((film) => {
            return (
                <div>
                    <ul>
                        <li>
                            {film.title}
                        </li>
                    </ul>
                </div>
            )
        })
    })

    return (
        <Button variant="outline-success" onSubmit={findFilmData}>Search</Button>
        // <Form inline>
        //     <FormControl type="text" placeholder="Search" className="mr-sm-2" value={query} />
        //     <Button variant="outline-success" onSubmit={findFilmData}>Search</Button>
        // </Form>
    )
}
export default ReadSearch;