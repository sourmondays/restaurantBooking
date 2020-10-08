import React from "react";
import { Button } from "reactstrap";

const AdminPanel = (props) => {
  return (
    <div>
      <h1 className="text-center mt-5">Admin Panel</h1>
      <div className=" text-center align-items-center mt-5">
        <Button className="btn-success">Booking</Button>{" "}
        <Button className="btn-success">Create</Button>{" "}
        <Button className="btn-success">Edit</Button>{" "}
        <Button className="btn-danger">Delete</Button>{" "}
      </div>
    </div>
  );
};

export default AdminPanel;
