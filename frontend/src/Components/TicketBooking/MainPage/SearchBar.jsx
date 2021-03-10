import React from 'react'
import { FormControl } from 'react-bootstrap'
import { Form } from 'reactstrap'

const SearchBar = ({ query, setquery }) => {
    return (
        <div >
            <Form inline  >
                <FormControl type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    onChange={setquery}
                    value={query}
                    style={{backgroundColor:"ActiveBorder"}}
                />
            </Form>

        </div>
    )
}

export default SearchBar
