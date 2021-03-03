
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchBarForNav = ({ query, handleQuery, search }) => {


    return (

        <Form inline >
            <FormControl type="text" placeholder="film" className="mr-sm-2" value={query} onChange={handleQuery} />
            <Button variant="outline-success">Search</Button>
        </Form>

    )

}

export default SearchBarForNav;