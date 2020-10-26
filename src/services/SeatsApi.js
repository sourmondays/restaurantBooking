import Axios from 'axios';

const requestConfig = {}

const get = async (endpoint) => {
    const res = await Axios.get('http://localhost:4000' + endpoint, requestConfig)
    console.log(res.data.data.seats[0].maxSeats);
    return res.data
}


const post = async (endpoint, data) => {
    const res = await Axios.post('http://localhost:4000' + endpoint, data, requestConfig);
    return res.data
}

// Export modify seats 
export const modifySeats = async (seats) => {
    return post(`/seats`, seats)
}

// Export get seats
export const showSeats = async () => {
    return get(`/seats`)
}
