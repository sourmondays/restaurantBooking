// Config

const API_HOST = 'http://localhost:4000/admin'
const API_HOST_ORIGINAL = 'http://localhost:4000'
const API_HOST_ORIGINAL_ADMIN = 'http://localhost:4000/adminbookings'

const getToken = () => {
    return sessionStorage.getItem('access_token');
}

const setToken = (access_token) => {
    return sessionStorage.setItem('access_token', access_token);
}


module.exports = {
    API_HOST_ORIGINAL_ADMIN,
    API_HOST_ORIGINAL,
    API_HOST,
    getToken,
    setToken
}