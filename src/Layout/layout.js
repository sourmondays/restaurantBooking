import React from 'react'
import Restaurant from "../assets/restaurant3.png";

export const Layout = ({ children }) => (
    <div className="row max-width">
        <div className="col-lg background-image">
            <img src={Restaurant} className="img-fluid" alt="Responsive" />
        </div>

        <div className="col-lg booking-form">
            <div className="d-flex justify-content-center mt-5">
                {children}
            </div>
        </div>
    </div>

)
export default Layout; 
