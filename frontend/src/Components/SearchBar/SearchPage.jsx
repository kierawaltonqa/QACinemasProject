import { useState } from 'react';
import data from '../../Resources/Movies.json';
import List from './List';

import SearchBarForNav from "./SearchBarForNav"

const SearchPage = () => {

    const [query, setQuery] = useState('');
    // const [films, setFilms] = useState([data]);


    const handleQuery = (e) => {
        setQuery(e.target.value);
    }

    //prepopulate data into fimls array








    return (

        <>
            <SearchBarForNav handleChange={handleQuery} query={query} />
            <List list={data} query={query} />

        </>
    )

}

export default SearchPage;