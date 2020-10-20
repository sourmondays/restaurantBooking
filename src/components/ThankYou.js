import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
    return ( 
        <>
        <div className=" mt-5 text-center">
  <h2 className="text-center">Thank you for booking a table <span role="img" aria-label="happy face">😀</span></h2>
  <Link to="/">
  <button className="btn btn-primary btn-sm">Go back to the Resturant</button>
  </Link>
  </div>
  </>
     );
}
 
export default ThankYou;

