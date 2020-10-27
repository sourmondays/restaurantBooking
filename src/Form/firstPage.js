import React from 'react';
import PropTypes from 'prop-types';
import Input from './input';
import { Link } from 'react-router-dom';

const FirstPage = ({ step, setStep, user, setUser }) => {

    const handleUser = ({ target }) => {
        setUser({
            type: 'DATE_TIME_PEOPLE_INFO',
            payload: { [target.name]: target.value },
        })
    }

    const handleContinue = (e) => {
        e.preventDefault()
        setStep(step + 1)
    }

    return (
        <>
            <h2 className="text-booking">Reserve a table at our restaurant</h2>
            <form onSubmit={handleContinue} >
                <div className="form-group">
                    <label className="label" htmlFor="date" >Date</label>
                    <Input
                        className="form-control" id="date"
                        type="date"
                        name="date"
                        value={user.date}
                        onChange={(e) => handleUser(e)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="label" htmlFor="time">Time</label>
                    <select name="time" required className="form-control" onChange={(e) => handleUser(e)}>
                        <option defaultValue>Choose time</option>
                        <option value={'18:00'} >18:00</option>
                        <option value={'21:00'} >21:00</option>
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
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" required />
                    <label className="form-check-label" for="exampleCheck1">I agree to the &nbsp; <Link to="/privacy"> Privacy Policy/GDPR</Link></label>
                </div>

                <button type="submit" className="btn btn-light btn-sm col-md-12 mt-2">
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