import axios from 'axios';
/* import { baseUrl } from './env.js';*/

export function getAllUsers() {
    console.log("dans getAllUsers");
    return  axios.get('http://localhost:8080/TestsUserManagement/controller/users')
            .then(response => response.data)
            .catch((error) => console.log(error));
}