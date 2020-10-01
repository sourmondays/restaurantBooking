import React, { useState } from "react";
import {
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Button,
} from "reactstrap";

import Table from "./Table";

const Booking = () => {
  const [totalTables, setTotalTables] = useState([]);

  const [selection, setSelection] = useState({
    table: {
      name: null,
      id: null,
    },
    date: new Date(),
    time: null,
    size: 0,
  });

  const [bookings, setBookings] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [clock] = useState(["18:00", "21:00"]);

  const [reservationError, setReservationError] = useState(false);

  const getDate = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date =
      months[selection.date.getMonth()] +
      " " +
      selection.date.getDate() +
      " " +
      selection.date.getFullYear();
    let time = selection.time > 12 ? time + 12 + ":00" : time + ":00";
    console.log(time);
    const datetime = new Date(date + " " + time);
    return datetime;
  };

  const getEmptyTables = () => {
    let tables = totalTables.filter((table) => table.isAvaileble);
    return tables.length;
  };

  return (
    <div className="text-center align-items-center mt-5">
      <h1>Make a reservation</h1>
    </div>
  );
};

export default Booking;
