import React from "react";
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Main = (props) => {
  return (
    <div>
      <Row noGutters className="text-center align-items-center mt-5">
        <Col>
          <h4 className="restaurant-header">
            Make your reservation for a fancy dinner!
          </h4>
        </Col>
      </Row>
      <Row noGutters className="justify-content-center">
        <Link to="/booking">
          <Button color="none" className="make-reservation-btn btn btn-dark">
            Make a reservation
          </Button>
        </Link>
        {/*  ta bort denna sen */}
        <Link to="/adminpanel">
          <Button color="none" className="make-reservation-btn btn btn-dark">
            Login as Admin
          </Button>
        </Link>
        {/*  ta bort denna sen */}
      </Row>
    </div>
  );
};

export default Main;
