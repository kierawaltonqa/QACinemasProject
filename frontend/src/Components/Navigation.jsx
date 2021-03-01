import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Form, FormControl, Button } from 'react-bootstrap';


const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md" id="navbar">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href='/' >Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/about' >About</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Movies
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Film Listings
                                </DropdownItem>
                                <DropdownItem>
                                    New Releases
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="/FilmClass"> Film Classification</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Bookings
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Screens
                                </DropdownItem>
                                <DropdownItem>
                                    Tickets
                                </DropdownItem>
                                <DropdownItem>
                                    Payment
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink href='/discussion' >Discussion</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}
export default Navigation;