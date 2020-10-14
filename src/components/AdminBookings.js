import React from "react";
import AdminPanel from "./AdminPanel";
import { DatePicker, Space, Select, Button } from 'antd';
import Axios from 'axios';
import { useQuery } from 'react-query';
import moment from 'moment';

const Bookings = () => {
  const getBookings = async () => {
    const res = await Axios.get('http://localhost:3001/bookings');
    console.log(res.data);
    return res.data;
  }

  const getBookingsDateAndTime = async () => {
    const res = await Axios.get('http://localhost:3001/bookings/date/2022-11-23/19:00');
    console.log(res.data);
    return res.data;
  }

  // http://localhost:3001/bookings/date/2022-11-23/19:00


  const deleteRow = async (id, e) => {
    Axios.delete(`http://localhost:3001/bookings/${id}`)
  }

  // axios.delete("url", { params: { id: itemId } }).then(response => {
  //   console.log(response);

  const { data, isLoading, error } = useQuery(['bookings'], getBookings, {
  });

  if (isLoading) {
    return (
      <h2>Loading...</h2>
    );
  }

  if (error) {
    return (
      <div className="alert alert-warning">
        <h2>Someting went wrong when trying to get all bookings.</h2>
        <p><strong>Error message:</strong> {error.message}</p>
      </div>
    )
  }

  //Datepicker 
  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  //Not possible to select dates before today
  function disabledDate(current) {
    return current && current < moment().subtract(1, 'day');
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
          <DatePicker format="YYYY-MM-DD" disabledDate={disabledDate} onChange={onChange} />
          <Select defaultValue="18.00" style={{ width: 120 }} onChange={handleChange}>
            <Option value="18.00">18.00</Option>
            <Option value="21.00">21.00</Option>
          </Select>
          <Button className="my-button" type="primary" onClick={getBookingsDateAndTime}>Filter</Button>
        </Space>
      </div>

      <div className="text-center align-items-center mt-5 mb-5 ml-5 mr-5">
        <table className="table">
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
          {data.data.bookings.map(bookings => (
            <tbody>
              <tr>
                <>
                  <th scope="row">{bookings.firstName}{" "}{bookings.lastName}</th>
                  <td>{bookings.date}</td>
                  <td>{bookings.phone}</td>
                  <td>{bookings.noPersons}</td>
                  <td>  <Button className="my-button" type="primary">Edit</Button></td>
                  <td> <Button className="my-button" type="danger" onClick={(e) => deleteRow(bookings._id)}>Delete</Button></td>
                </>
              </tr>
            </tbody>
          ))}
        </table>
      </div>

    </div>
  );
};

export default Bookings;