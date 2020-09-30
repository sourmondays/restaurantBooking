import React from 'react';

import { Navbar, NavbarBrand } from "reactstrap";


export default props => {
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand className="navbar-header" onClick={_ => {
                    props.setPage(0);
                }}>
                    Restaurant booking
            </NavbarBrand>
            </Navbar>
        </div>
    )

}