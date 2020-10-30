import React from 'react'
import { Button, Space } from 'antd'
import { Link } from "react-router-dom";

const notFound = () => {
    return (
        <>
            <div className="middle">

                <Space direction="vertical">
                    <h1 className="fof">404</h1>
                    <Link to="/" ><Button className="fof-btn" type="primary">Back</Button></Link>
                </Space>

            </div>

        </>
    )
}

export default notFound;