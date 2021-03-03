import { useState } from 'react';
import data from '../../Resources/Movies.json';

import SearchBarForNav from "./SearchBarForNav"

const SearchPage = () => {

    const [query, setQuery] = useState('');
    const [films, setFilms] = useState([data]);
    const [err, setErr] = useState('');

    const handleChange = ({ target }) => {
        setQuery(target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();


    }

    //prepopulate data into fimls array








    return (

        <>
            <SearchBarForNav handleChange={handleChange} query={query} search={handleSearch} />

        </>
    )

}

export default SearchPage;