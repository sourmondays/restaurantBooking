import Axios from 'axios';

const requestConfig = {}

const get = async (endpoint) => {
    const res = await Axios.get('http://localhost:4000' + endpoint, requestConfig);
    console.log(res.data);

    return res.data
}

const post = async (endpoint, data) => {
    const res = await Axios.post('http://localhost:4000' + endpoint, data, requestConfig);
    return res.data
}

const postLogin = async (endpoint, data) => {
    const res = await Axios.post('http://localhost:4000/admin' + endpoint, data, requestConfig);
    return res.data
}

// Export post login 
export const loginAdmin = async (login) => {
    return postLogin(`/login`, login)
}


// Export post bookings 
export const modifyBookings = async (reservations) => {
    return post(`/bookings`, reservations)
}

// Export get all bookings 
export const showBookings = async () => {
    return get(`/bookings`)
}
