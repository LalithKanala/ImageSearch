import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID c84a3b4d0c0b9f4167212e1454b6a4bcdf35735ab7040f5fe687925532504446'
    }
});