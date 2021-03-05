import { useState } from 'react';
import data from '../../Resources/Movies.json';
import SearchBar from './SearchBar';
import List from './List';
import './Search.css';
import Header from './Header';

const SearchPage = () => {

    const [query, setQuery] = useState('');

    const handleQuery = (e) => {
        setQuery(e.target.value);
    }

    return (
        <div className="container" id="search-page">
            <Header />
            <div className="row">
                <SearchBar updateQuery={handleQuery} stateQuery={query} />
            </div>
            <div className="row-md">
                <List data={data} query={query} />
            </div>
        </div>

    )
}
export default SearchPage;