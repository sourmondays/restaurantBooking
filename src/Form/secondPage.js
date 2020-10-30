import React from 'react';
import PropTypes from 'prop-types';
import Input from './input';
import { useMutation } from 'react-query';
import { modifyBookings } from '../services/BookingsApi';

const SecondPage = ({ step, setStep, user, setUser }) => {
    const [mutate] = useMutation(modifyBookings);

    const handleUser = ({ target }) => {
        setUser({
            type: 'DATE_TIME_PEOPLE_INFO',
            payload: { [target.name]: target.value },
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        mutate(user)

        console.log("Submitting...");

        setStep(step + 1)
    }

    return (
        <>
            <h2 className="text-booking">Reserve a table at our restaurant</h2>

            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <label className="label" htmlFor="firstName">First name</label>
                    <Input
                        type="text"
                        className="form-control"
                        placeholder="Your name"
                        name="firstName"
                        value={user.firstName}
                        onChange={(e) => handleUser(e)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="label" htmlFor="lastName">Last name</label>
                    <Input
                        type="text"
                        className="form-control"
                        name="lastName"
                        placeholder="Your last name"
                        value={user.lastName}
                        onChange={(e) => handleUser(e)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="label" htmlFor="phone">Phone number</label>
                    <Input
                        type="phone"
                        className="form-control"
                        placeholder="Your phone"
                        name="phone"
                        minLength="8"
                        maxLength="20"
                        value={user.phone}
                        onChange={(e) => handleUser(e)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="label" htmlFor="email">Email address</label>
                    <Input
                        type="email"
                        className="form-control"
                        placeholder="Your email address"
                        name="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                        value={user.email}
                        onChange={(e) => handleUser(e)}
                        required
                    />
                </div>

                <div>
                    <div className="align-center">
                        <button type="submit" className="btn btn-light btn-sm col-md-12 mb-5">
                            Make reservation
               </button>

                    </div>
                </div>
            </form>
        </>
    )
}
SecondPage.propTypes = {
    step: PropTypes.number,
    setStep: PropTypes.func,
    user: PropTypes.object,
    setUser: PropTypes.func,
}
export default SecondPage; 
