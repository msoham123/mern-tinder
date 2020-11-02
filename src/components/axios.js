import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://merntinder-backend.herokuapp.com',
});

export default instance;