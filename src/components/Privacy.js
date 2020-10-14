import React from 'react'
import { Button } from 'antd'
import { Link } from "react-router-dom";

const Privacy = () => {
    return (
        <>
            <div>
                <h1 className="header">Privacy Policy</h1>
                <p className="GDPRinfo">
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </p>
                <div>
                <Link to="/" ><Button type="primary">Back</Button></Link>
                    
                </div>
            </div>
        </>
    )
}

export default Privacy