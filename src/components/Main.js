import React from 'react';
import { Row, Col, Button } from "reactstrap";

const Main = props => {
    return (
        <div>
            <Row noGutters className="text-center align-items-center mt-5">
                <Col>
                    <h4 className="restaurant-header">Make your reservarion for a fancy dinner!</h4>
                </Col>

            </Row>
            <Row noGutters className="justify-content-center">
                <Button color="none" className="make-reservation-btn" onClick={_ => {
                    props.setPage(1)
                }}>
                    Make a reservation
                </Button>
            </Row>
        </div>
    )
}

export default Main; 