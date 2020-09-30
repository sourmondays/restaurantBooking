import React from 'react';

function Navigation() {
    return (
        <div>

            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Restaurant booking</a>
            </nav>

        </div>
    )
}

export default Navigation;


// export default props => {
//     return (
//         <div>
//             <Navbar color="light" light expand="md">
//                 <NavbarBrand className="navbar-header" onClick={_ => {
//                     props.setPage(0);
//                 }}>
//                     Restaurant booking
//             </NavbarBrand>
//             </Navbar>
//         </div>
//     )

// }