import { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import ReadSearch from './ReadSearch';
import data from '../../Resources/Movies.json';
import SearchBar from './SearchBar';
import List from './List';
import './Search.css';

const SearchPage = () => {

    const [query, setQuery] = useState('');

    const handleQuery = (e) => {
        setQuery(e.target.value);
    }

    return (
        <div className="container">
            <div className="row-md">
                <SearchBar updateQuery={handleQuery} stateQuery={query} />
            </div>
            <div className="row-md">
                <List data={data} query={query} />
            </div>
        </div>

    )
}
export default SearchPage;