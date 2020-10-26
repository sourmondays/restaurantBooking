/**
 * Cofig file
 */

const API_HOST_ORIGINAL = 'http://localhost:4000'

const getToken = () => {
    return sessionStorage.getItem('access_token');
}

const setToken = (access_token) => {
    return sessionStorage.setItem('access_token', access_token);
}


module.exports = {
    API_HOST_ORIGINAL,
    getToken,
    setToken
}