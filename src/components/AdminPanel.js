import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const AdminPanel = (props) => {
  return (
    <div>
      <h1 className="text-center mt-5">Admin Panel</h1>

      <div className=" text-center align-items-center mt-5">
        <Link to="/adminbooking">
          <Button className="btn-success mr-2">Create</Button>
        </Link>
        <Link to="/adminbookings">
          <Button className="btn-success mr-2">Bookings</Button>
        </Link>
        <Link to="/adminedit">
          <Button className="btn-success mr-2">Edit</Button>
        </Link>
        <Link to="/admindelte">
          <Button className="btn-danger">Delete</Button>
        </Link>
      </div>
    </div>
  );
};

export default AdminPanel;
