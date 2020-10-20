import React, { useState, useEffect } from "react";
import AdminPanel from "./AdminPanel";
import { useQuery } from 'react-query';
import { DatePicker, Space, Select } from 'antd';
import moment from 'moment';
import Axios from 'axios';
import { showBookings } from '../services/BookingsApi'

const Bookings = () => {
    const [bookings, setBookings] = useState([])
    const { data, status } = useQuery('AllBookings', showBookings);
    console.log("Your api:", data);

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const response = await Axios.get('http://localhost:4000/bookings');
        console.log(response);

        setBookings(response.data.data.bookings)
    }

    // Delete a booking 
    const removeData = (_id) => {
        Axios.delete(`http://localhost:4000/bookings/${_id}`).then(res => {
            const del = bookings.filter(bookings => _id !== bookings._id)
            setBookings(del)
            console.log('res', res)
        })
    }

    //Not possible to select dates before today
    function onChange(date, dateString) {
        console.log(dateString, date);
    }

    function disabledDate(current) {
        return current && current < moment().subtract(1, 'day');
    }

    // Select time 
    const { Option } = Select;

    function onChangeTime(value) {
        console.log(`${value}`);
    }

    return (
        <>
            <AdminPanel />
            <div className="text-left mt-2 ml-5">
                <h1>Bookings</h1>
                <p>Here you can see all bookings for your restaurant and you can also see who booked at a specfic date.</p>
                <Space direction="horizontal">
                    <DatePicker disabledDate={disabledDate} onChange={onChange} />
                    <Select defaultValue="" style={{ width: 120 }} onChange={onChangeTime}>
                        <Option value="18:00">18:00</Option>
                        <Option value="21:00">21:00</Option>
                    </Select>
                    <button type="button" className="btn btn-primary btn-sm" >Filter</button>
                    <button type="button" className="btn btn-primary btn-sm" onClick={getData}>All bookings</button>
                    <button type="button" className="btn btn-primary btn-sm" >Bookings today</button>
                </Space>
            </div>

            {status === 'loading' && (
                <div className="text-center align-items-center mb-2 mt-2">
                    <p>Loading data...</p>
                </div>
            )}

            {status === 'error' && (
                <div className="text-center align-items-center mb-2 mt-2">
                    <p>Error when trying to get data.</p>
                </div>
            )}

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
                    {status === 'success' && (
                        <tbody >
                            {data.data.bookings.map((bookings, index) =>
                                <tr key={index}>
                                    <>
                                        <th scope="row">{bookings.firstName} {""} {bookings.lastName}</th>
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
                            )}
                        </tbody>
                    )}
                </table>
            </div>
        </>
    );
};

export default Bookings;