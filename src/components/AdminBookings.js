import React from "react";
import AdminPanel from "./AdminPanel";
import { DatePicker, Space, Select, Button } from 'antd';

const Bookings = () => {
  //Datepicker 
  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  //Select 
  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <div>
      <AdminPanel />
      <div className="text-left mt-2 ml-5">
        <h1>Bookings</h1>
        <p>Here you can see all bookings for your restaurant and also see who booked at a specfic date.</p>
        <Space direction="horizontal">
          <DatePicker onChange={onChange} />
          <Select defaultValue="18.00" style={{ width: 120 }} onChange={handleChange}>
            <Option value="18.00">18.00</Option>
            <Option value="21.00">21.00</Option>
          </Select>
          <Button className="my-button" type="primary">Filter</Button>
        </Space>
      </div>

      <div className="text-center align-items-center mt-5 mb-5 ml-5 mr-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Phone</th>
              <th scope="col">People</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Mark Anderssson</th>
              <td>2020-11-12</td>
              <td>0765-006007</td>
              <td>6</td>
              <td>  <Button className="my-button" type="primary">Edit</Button></td>
              <td> <Button className="my-button" type="danger">Delete</Button></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Bookings;