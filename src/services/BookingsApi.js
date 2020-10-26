import Axios from 'axios';

const requestConfig = {}

const post = async (endpoint, data) => {
    const res = await Axios.post('http://localhost:4000' + endpoint, data, requestConfig);
    return res.data
}

// Export post bookings 
export const modifyBookings = async (reservations) => {
    return post(`/bookings`, reservations)
}

