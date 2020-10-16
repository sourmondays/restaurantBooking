import Axios from 'axios';

const requestConfig = {}

const post = async (endpoint, data) => {
    const res = Axios.post('http://localhost:4000' + endpoint, data, requestConfig);
    return res.data
}

// Export 
export const modifySeats = async (seats) => {
    return post(`/seats`, seats)
}