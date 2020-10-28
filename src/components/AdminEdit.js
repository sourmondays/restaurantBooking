import AdminPanel from "./AdminPanel";
import React, { useState, useEffect } from "react";
import Axios from 'axios';
import config from '../modules/config'
import { useHistory } from "react-router-dom";

export default function AdminEdit(props) {
    const navigate = useHistory();
    const [BookingList, setBooking] = useState([]);
    const [data, setData] = useState({
        date: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        noPersons: "",
        time: "",
    });


    useEffect(() => {
        const _id = props.match.params.id;
        console.log("Logged data in edit:", _id);

        Axios.get(config.API_HOST_ORIGINAL + '/adminbookings/' + _id, {
            headers: {
                'Authorization': 'Bearer ' + config.getToken()
            }
        }).then(res => {
            setData(res.data.data.bookings)
            console.log("Logged res data in edit:", res.data);
            console.log("Logged res.data.data.bookings", res.data.data.bookings);
            console.log(res.data.data.bookings.firstName);

        }).catch(err => console.error(err))
    }, []);

    function submit(e) {
        e.preventDefault();
        const _id = props.match.params.id;
        Axios.put(config.API_HOST_ORIGINAL + `/adminbookings/` + _id, data, {
            headers: {
                'Authorization': 'Bearer ' + config.getToken()
            }
        }).then(res => {
            console.log(res.data);
            const myData = [...BookingList, res.data]
            setBooking(myData)

        }).catch(err => console.error(err))
        navigate.push('/adminbookings')
    }

    function handle(e) {
        const newData = { ...data }
        newData[e.target.id] = e.target.value;
        console.log("Logging new data", newData);
        setData(newData);
    }

    return (<>
        <AdminPanel />
        <h1 className="change-font text-center mt-5">Edit booking</h1>
        <div className="container-booking">

            <form onSubmit={(e) => submit(e)}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstName">Name</label>
                        <input
                            onChange={(e) => handle(e)}
                            value={data.firstName}
                            type="text"
                            className="form-control"
                            id="firstName"
                            required
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            onChange={(e) => handle(e)}
                            value={data.lastName}
                            type="text"
                            className="form-control"
                            id="lastName"
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={(e) => handle(e)}
                            value={data.email}
                            type="text"
                            className="form-control"
                            id="email"
                            required
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="phone">Phone </label>
                        <input
                            onChange={(e) => handle(e)}
                            value={data.phone}
                            type="text"
                            className="form-control"
                            id="phone"
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="time">Time</label>
                        <select id="time" className="form-control" onChange={(e) => handle(e)} value={data.time} required >
                            <option defaultValue >Choose time</option>
                            <option>18:00</option>
                            <option>21:00</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="sizeparty">Party size</label>
                        <input
                            onChange={(e) => handle(e)}
                            value={data.noPersons}
                            type="number"
                            className="form-control"
                            id="noPersons"
                            min="1"
                            max="6"
                            required
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary btn-sm col-md-12">
                    Edit booking
              </button>
            </form>
        </div>
    </>
    )

};