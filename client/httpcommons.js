import axios from 'axios';
export default axios.create({
    baseURL: 'http://localhost4000/api',
    headers: {
        "Content-type": "application/json"
    }
});