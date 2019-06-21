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

const fetchSingleUser = (userId) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.data)
        .then(user => {
            return new User(user)

        })
}

const createUserRequest = (payload) => {
    return axios.post(`https://jsonplaceholder.typicode.com/users`)

}

export {
    fetchUsers,
    fetchSingleUser,
    createUserRequest
}