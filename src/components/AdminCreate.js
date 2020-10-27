
import AdminPanel from "./AdminPanel";
import React, { useState } from "react";
import { useMutation } from 'react-query';
import { modifyBookings } from '../services/BookingsApi'
import { useHistory } from "react-router-dom";



const intaialValue = {
  date: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  noPersons: "",
  time: "",
}

const Booking = () => {
  const navigate = useHistory();
  const [mutate] = useMutation(modifyBookings);
  const [reservation, setReservation] = useState(intaialValue);

  const onChange = e => {
    console.log("log somthing to the console ", e.target.value);
    setReservation({
      ...reservation,
      [e.target.id]: e.target.value
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    mutate(reservation)
    console.log("Submitting reservations...");
    navigate.push('/adminbookings')
  }
  return (<>
    <AdminPanel />
    <h1 className="change-font text-center mt-5">Make a reservation</h1>
    <div className="container-booking">
      <form onSubmit={handleFormSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="firstName">Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="First name"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Last name"
              onChange={onChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Email address"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="phone">Phone </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Phone"
              onChange={onChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="date">Date</label>
            <input type="date" className="form-control" id="date" onChange={onChange} required />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="time">Time</label>
            <select id="time" className="form-control" onChange={onChange} required >
              <option defaultValue >Dinner time</option>
              <option>18:00</option>
              <option>21:00</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="sizeparty">Party size</label>
            <input
              type="number"
              className="form-control"
              id="noPersons"
              min="1"
              max="90"
              placeholder="1 - 6"
              onChange={onChange}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-sm col-md-12">
          Make a reservation
              </button>

      </form>
    </div>
  </>
  )

};

export default Booking;