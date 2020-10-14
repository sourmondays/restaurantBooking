import React from 'react'
import { Button,Row,Col} from 'antd'
import { Link } from "react-router-dom";

const notFound = () => {
    return (
        <>
            <Row justify="center" align="middle">
      <Col span={4}>
          <h1 className="header">404</h1>
          
            <Col>
            <Link to="/" ><Button type="primary">Back</Button></Link>
            </Col>
      </Col>

    </Row>
       
        </>
    )
}

export default notFound;