import React from "react";
import { row, col, button } from "reactstrap";

const Booking = () => {
  const handleFirstName = (e) => {
    console.log(e.target.value);
  };

  const handleLastName = (e) => {
    console.log(e.target.value);
  };

  const handleEmail = (e) => {
    console.log(e.target.value);
  };

  const handlePhone = (e) => {
    console.log(e.target.value);
  };
  const handleDate = (e) => {
    console.log(e.target.value);
  };

  const handlePeople = (e) => {
    console.log(e.target.value);
  };

  const handTime = (e) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send info to db to save the booking
  };
  return (
    <div className="text-center align-items-center m-5">
      <h1>Make a reservation</h1>
      <div className="container-booking">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="firstName">Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                onChange={handleFirstName}
                placeholder="ex. Ann"
              />
            </div>
            <div className="form-group col-md-6">
              <label for="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                onChange={handleLastName}
                id="lastName"
                placeholder="ex. Jonsson"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                onChange={handleEmail}
                placeholder="ex. ann.jonsson@hotmail.com"
              />
            </div>
            <div className="form-group col-md-6">
              <label for="phone">Phone </label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                onChange={handlePhone}
                placeholder="ex. 0701236986"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="date">Date</label>
              <input
                type="date"
                className="form-control"
                id="date"
                onChange={handleDate}
              />
            </div>
            <div className="form-group col-md-4">
              <label for="time">Time</label>
              <select id="time" className="form-control" onChange={handTime}>
                <option selected>Choose time</option>
                <option>18:00</option>
                <option>21:00</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label for="sizeparty">Party size</label>
              <select
                id="time"
                className="form-control"
                onChange={handlePeople}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-primary col-md-12">
            Make a Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
