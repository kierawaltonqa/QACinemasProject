import { Button, Form, FormControl } from 'react-bootstrap';
import searchpenguin from '../../Resources/penguin-search.jpg';

const SearchBar = ({ updateQuery, stateQuery }) => {
    return (
        <>
            <div className="col-md-3">
                <br />
                <Form inline>
                    <FormControl type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        onChange={updateQuery}
                        value={stateQuery} />
                    <Button type="submit" variant="outline-success">Search</Button>
                    {/* onSubmit={updateQuery}  */}
                </Form>
                <br />
            </div>
            <div className="col-md-9">
                <img src={searchpenguin} alt="search-penguin" id="search-penguin" />
            </div>
        </>
    )
}
export default SearchBar;