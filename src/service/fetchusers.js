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

const createUserRequest = (user) => {
    return axios.post(`https://jsonplaceholder.typicode.com/users`, {
        name: user.name,
        email: user.email
    })

}

const deleteRequest = (userId, user) => {
    return axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        name: user.name,
        email: user.email
    })
}

export {
    fetchUsers,
    fetchSingleUser,
    createUserRequest,
    deleteRequest
}