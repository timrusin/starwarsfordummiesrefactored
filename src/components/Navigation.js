import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Navigation.css'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from "reactstrap";

const Navigation = ()=>{
    const [ navExpand, setNavExpand ] = useState(false)

    return(
    <Navbar className="nav-bar" color="warning" expand="sm" fixed="top" light>
        <NavbarBrand href="/">
        <span className="star-wars">StarWars</span> 
        <span className="dummies">for dummies</span>
        </NavbarBrand>
        <NavbarToggler onClick={()=> setNavExpand(!navExpand)}/>
        <Collapse navbar isOpen={ navExpand }>
            <Nav className="me-auto" navbar>
                <NavItem>
                    <NavLink href="/movies">
                        Movies
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/characters">
                        Characters
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/planets">
                        Planets
                    </NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
    )
}
export default Navigation