
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchBarForNav = ({ query, handleChange, search }) => {


    return (

        <Form inline onSubmit={search}>
            <FormControl type="text" placeholder="film" className="mr-sm-2" value={query} onChange={handleChange} />
            <Button variant="outline-success">Search</Button>
        </Form>

    )

}

export default SearchBarForNav;