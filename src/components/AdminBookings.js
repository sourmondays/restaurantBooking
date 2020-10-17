import React, { useState, useEffect } from "react";
import AdminPanel from "./AdminPanel";
import { DatePicker, Space, Select } from 'antd';
import Axios from 'axios';
import moment from 'moment';

const Bookings = () => {
  const [bookings, setBookings] = useState([])
  const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'))
  const [datetoday, setDateToday] = useState(moment().format('YYYY-MM-DD'))
  const [time, setTime] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await Axios.get('http://localhost:4000/bookings');
    console.log(response);

    setBookings(response.data.data.bookings)
  }

  const removeData = (_id) => {
    Axios.delete(`http://localhost:4000/bookings/${_id}`).then(res => {
      const del = bookings.filter(bookings => _id !== bookings._id)
      setBookings(del)
      console.log('res', res)
    })
  }

  const getBookingsDateAndTime = async () => {
    const response = await Axios.get(`http://localhost:4000/bookings/date/${date}/${time}`);
    console.log(response.data);
    setDate(response);
    setTime(response);
    setBookings(response.data.data.bookings);
  }

  const getBookingsDate = async () => {
    const response = await Axios.get(`http://localhost:4000/bookings/date/${datetoday}`);
    console.log(response.data);
    setDateToday(response);
    setBookings(response.data.data.bookings);
  }

  //Datepicker 
  function onChange(date, dateString) {
    console.log(dateString);
    setDate(date)
    setDate(dateString)
  }

  //Not possible to select dates before today
  function disabledDate(current) {
    return current && current < moment().subtract(1, 'day');
  }

  //Select time
  const { Option } = Select;

  function onChangeTime(value) {
    console.log(value);
    setTime(`${value}`)
  }

  return (
    <>
      <AdminPanel />
      <div className="text-left mt-2 ml-5">
        <h1>Bookings</h1>
        <p>Here you can see all bookings for your restaurant and you can also see who booked at a specfic date.</p>
        <Space direction="horizontal">
          <DatePicker setDate={setDate} disabledDate={disabledDate} onChange={onChange} selected={date} />
          <Select selected={time} defaultValue="" style={{ width: 120 }} onChange={onChangeTime}>
            <Option value="18:00">18:00</Option>
            <Option value="21:00">21:00</Option>
          </Select>
          <button type="button" className="btn btn-primary btn-sm" onClick={getBookingsDateAndTime}>Filter</button>
          <button type="button" className="btn btn-primary btn-sm" onClick={getData}>All bookings</button>
          <button type="button" className="btn btn-primary btn-sm" onClick={getBookingsDate} >Bookings today</button>
        </Space>
      </div>

      <div className="text-center align-items-center mt-5 mb-5 ml-5 mr-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Phone</th>
              <th scope="col">People</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          {bookings.map((bookings, index) => (
            <tbody key={index}>
              <tr>
                <>
                  <th scope="row">{bookings.firstName}{" "}{bookings.lastName}</th>
                  <td >{bookings.date}</td>
                  <td >{bookings.time}</td>
                  <td >{bookings.phone}</td>
                  <td >{bookings.noPersons}</td>
                  <td><button type="button" className="btn btn-primary btn-sm">Edit</button></td>
                  <td>
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => removeData(bookings._id)}>Delete</button>
                  </td>
                </>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default Bookings;