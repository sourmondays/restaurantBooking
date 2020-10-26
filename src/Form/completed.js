import React from 'react';
import PropTypes from 'prop-types';

const Completed = ({ user }) => (
    <div >
        <p className="completed">
            Welcome, <b>{`${user.firstName} ${user.lastName}`}</b>{' '}
        </p>
        <h3 className="completed2">Your reservation: </h3>
        <p className="completed3">
            Date: {`${user.date}`} <br />
            Time: {`${user.time}`} <br />
            Number of persons: {`${user.noPersons}`} <br />
            {`${user.email}`} <br />
            {`${user.phone}`} <br />

        </p>
        <p className="completed4"> You have successfully made a reservation!</p>
    </div>
)

Completed.propTypes = {
    user: PropTypes.object,
}
export default Completed
