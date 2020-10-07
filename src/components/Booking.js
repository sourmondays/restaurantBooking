import React from "react";
import { row, col, button } from "reactstrap";

const Booking = () => {
  return (
    <div className="text-center align-items-center m-5">
      <h1>Make a reservation</h1>
      <div className="container-booking">
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="firstName">Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="ex. Ann"
              />
            </div>
            <div className="form-group col-md-6">
              <label for="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
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
                placeholder="ex. ann.jonsson@hotmail.com"
              />
            </div>
            <div className="form-group col-md-6">
              <label for="phone">Phone </label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                placeholder="ex. 0701236986"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="date">Date</label>
              <input type="date" className="form-control" id="date" />
            </div>
            <div className="form-group col-md-4">
              <label for="time">Time</label>
              <select id="time" className="form-control">
                <option selected>Choose time</option>
                <option>18:00</option>
                <option>21:00</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label for="sizeparty">Party size</label>
              <input
                type="number"
                className="form-control"
                id="sizeParty"
                min="1"
                max="6"
                placeholder="1 - 6 people"
              />
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
