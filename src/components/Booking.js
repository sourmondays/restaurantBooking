import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from 'react-query';
import { modifyBookings } from '../services/BookingsApi'

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

   const [mutate] = useMutation(modifyBookings);

  const [reservation, setReservation] = useState(intaialValue);


  const onChange = e => {
    console.log("log somthing to the console ", e.target.value);
    setReservation({
      ...reservation,
      [e.target.id]: e.target.value
    })
<<<<<<< HEAD
  }
  const history = useHistory();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    mutate(reservation)
    console.log("Submitting reservations...");
    history.push('/thankyou')

  }
  return (<>
    <h1 className="text-center mt-5 " >Make a reservation</h1>
    <div className="container-booking">
      <form onSubmit={handleFormSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="firstName">Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="ex. Ann"
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
              placeholder="ex. Jonsson"
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
              placeholder="ex. ann.jonsson@hotmail.com"
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
              placeholder="ex. 0701236986"
              onChange={onChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="date">Date</label>
            <input type="date" className="form-control" id="date" required onChange={onChange} />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="time">Time</label>
            <select id="time" className="form-control" required onChange={onChange}>
              <option defaultValue >Choose time</option>
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
              max="6"
              placeholder="1 - 6 people"
              onChange={onChange}
              required
            />
          </div>

          <p className="form-group col-lg-12 text-right mr-5">Bigger party then 6? Call us 08-35353535</p>

        </div>
        <button type="submit" className="btn btn-primary btn-sm col-md-12">
          Make a Reservation
=======
}
const history = useHistory();
  
      const handleFormSubmit = (e) => {
        e.preventDefault();

        mutate(reservation)
        console.log("Submitting reservations...");
        history.push('/thankyou')
        
    }
  return (<>
          <h1 className="text-center mt-5 " >Make a reservation</h1>
      <div className="container-booking">
        <form onSubmit={handleFormSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstName">Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="ex. Ann"
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
                placeholder="ex. Jonsson"
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
                placeholder="ex. ann.jonsson@hotmail.com"
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
                placeholder="ex. 0701236986"
                onChange={onChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="date">Date</label>
              <input type="date" className="form-control" id="date" required onChange={onChange} />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="time">Time</label>
              <select id="time" className="form-control" required onChange={onChange}>
                <option  defaultValue >Choose time</option>
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
                max="6"
                placeholder="1 - 6 people"
                onChange={onChange}
                required
              />
            </div>
        
            <p className="form-group col-lg-12 text-right mr-5">Bigger party then 6? Call us 08-35353535</p>
          
          </div>
         <button type="submit" className="btn btn-primary btn-sm col-md-12">
            Make a Reservation
>>>>>>> c86d00a4aad6711af3fdabe47f4159dc7b045c1f
          </button>
      </form>
    </div>
  </>
  )

};

export default Booking;

