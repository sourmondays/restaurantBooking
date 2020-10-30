import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from './input';
import { Link } from 'react-router-dom';
import config from '../modules/config';
import Axios from 'axios';

const FirstPage = ({ step, setStep, user, setUser }) => {
    const [seats, setSeats] = useState();
    const [firstSeating, setFirstSeating] = useState();
    const [secondSeating, setSecondSeating] = useState();
    const [seatsTwo, setSeatsTwo] = useState();
    const [disabled, setDisabled] = useState();
    const [disabledtwo, setDisabledTwo] = useState();

    const handleUser = ({ target }) => {
        setUser({
            type: 'DATE_TIME_PEOPLE_INFO',
            payload: { [target.name]: target.value },

        })
        console.log(target.value);
    }


    // Get maxSeats
    const maxSeats = async () => {
        await Axios.get(config.API_HOST_ORIGINAL + '/seats', {
        }).then(seats => {
            seats.data.data.seats.forEach(seats => {
                setSeats(seats.maxSeats)
                setSeatsTwo(seats.maxSeats)
                setFirstSeating(seats.firstSeating)
                setSecondSeating(seats.secoundSeating)
            })
        })
    }

    maxSeats()

    const handleTarget = async (e) => {
        const date = e.target.value;
        console.log('Works fine with date', date);

        await Axios.get(config.API_HOST_ORIGINAL + `/bookings/date/` + date, {

        }).then(bookings => {
            let _1SeatsBooked = 0;
            let _2SeatsBooked = 0;
            bookings.data.data.bookings.forEach(booking => {

                if (booking.time === firstSeating) {
                    //Seats booked for first seating
                    _1SeatsBooked += booking.noPersons;

                    let _1SeatsLeft = seats - _1SeatsBooked;
                    console.log('Logged seats that remains 🌻:', _1SeatsLeft);


                    if (_1SeatsLeft > 0) {
                        setDisabled(false)
                    } else {
                        setDisabled(true)
                    }
                } else if (booking.time === secondSeating) {
                    //Seats booked for last seating
                    _2SeatsBooked += booking.noPersons;

                    let _2SeatsLeft = seatsTwo - _2SeatsBooked;
                    console.log('Logged seats that remains 🦑:', _2SeatsLeft);

                    if (_2SeatsLeft > 0) {
                        setDisabledTwo(false)
                    } else {
                        setDisabledTwo(true)
                    }
                }
            })
        })
    }

    const handleContinue = (e) => {
        e.preventDefault()
        setStep(step + 1)
    }

    return (
        <>
            <h2 className="text-booking">Reserve a table at our restaurant</h2>
            <form className="change-size" onSubmit={handleContinue} >
                <div className="form-group">
                    <label className="label" htmlFor="date" >Date</label>
                    <Input
                        className="form-control" id="date"
                        type="date"
                        name="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={user.date}
                        onChange={(e) => handleUser(e) || handleTarget(e)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="label" htmlFor="time">Time</label>
                    <select name="time" required className="form-control" onChange={(e) => handleUser(e)}>
                        <option defaultValue>Choose time</option>
                        <option
                            value={'18:00'}
                            disabled={disabled ? true : false}
                        >18:00</option>
                        <option
                            value={'21:00'}
                            disabled={disabledtwo ? true : false}
                        >21:00</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="label" htmlFor="sizeparty">Party size</label>
                    <Input
                        type="number"
                        className="form-control"
                        placeholder="Party size"
                        name="noPersons"
                        value={user.noPersons}
                        onChange={(e) => handleUser(e)}
                        min="1"
                        max="6"
                        required
                    />
                </div>

                <div className="form-group ml-4">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
                    <label className="form-check-label" htmlFor="exampleCheck1">I agree to the &nbsp; <Link to="/privacy"> Privacy Policy/GDPR</Link></label>
                </div>

                <button type="submit" className="btn btn-light btn-sm col-md-12 mt-2 mb-5">
                    Continue
               </button>
            </form>
        </>
    )
}
FirstPage.propTypes = {
    step: PropTypes.number,
    setStep: PropTypes.func,
    user: PropTypes.object,
    setUser: PropTypes.func,
}
export default FirstPage; 