import axios from 'axios';
import { User } from '../entities/User'

const fetchUsers = () => {
    return axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.data)
        .then(users => {
            return users.map(user => {
                return new User(user)
            })
        })
}

export {
    fetchUsers
}