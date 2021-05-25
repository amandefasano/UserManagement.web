import axios from 'axios';
/* import { baseUrl } from './env.js';*/

export function getAllUsers() {
    return  axios.get('http://localhost:8080/users')
            .then(response => response.data)
            .catch((error) => console.log(error));
}