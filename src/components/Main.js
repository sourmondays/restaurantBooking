import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'antd';

const Main = (props) => {
  return (
    <div>
      <div className="text-center align-items-center mt-5">

        <h4 className="restaurant-header">
          Make your reservation for a fancy dinner!
          </h4>
      </div>

      <div className="text-center align-items-center mt-2">
        <Link to="/booking">
          <Button type="primary">Make a reservation</Button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
