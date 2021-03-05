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

import SearchPage from './Search/SearchPage';


const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar style={{ color: 'gold', backgroundColor: 'black', fontSize: '19px' }} bg="dark" expand="md" className="goldenHours" >

                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem >
                            <NavLink style={{ color: 'gold' }} href='/' >Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ color: 'gold' }} href='/about' >About</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar >
                            <DropdownToggle style={{ color: 'gold' }} nav caret>
                                Movies
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink style={{ color: 'black' }} href="/listings">Film Listings</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink style={{ color: 'black' }} href="/newreleases">New Releases</NavLink>
                                </DropdownItem>
                                <DropdownItem>

                                    <NavLink style={{ color: 'black' }} href="/FilmClass"> Film Classification</NavLink>


                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle style={{ color: 'gold' }} nav caret>
                                Bookings
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="/screens">
                                    Screens
                                </DropdownItem>
                                <DropdownItem href="/bookings">
                                    Tickets
                                </DropdownItem>
                                <DropdownItem>
                                    Payment
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink style={{ color: 'gold' }} href='/discussion' >Discussion</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ color: 'gold' }} href='/contact' >Contact</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/search' >Search</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>

                {/* <Form inline>
                    <FormControl  type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form> */}

                {/* <SearchPage /> */}

            </Navbar>
        </div>
    )
}
export default Navigation;