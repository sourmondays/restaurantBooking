import React from 'react'
import { Link } from "react-router-dom";

const notFound = () => {
    return (
        <>
            <div className="middle d-flex justify-content-center">
                <h1 className="fof">404</h1>
            </div>
            <div className="middle button d-flex justify-content-center">
                <Link to="/" ><button type="button" className="btn btn-dark btn-sm  ">Back</button></Link>
            </div>
        </>
    )
}

export default notFound;