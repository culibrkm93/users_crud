import React from 'react'
import { fetchUsers } from '../../service/fetchusers';
import { Link } from 'react-router-dom'
import './UsersPage.css'

export class UsersPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }

    }


    loadUsers() {
        fetchUsers()
            .then(users =>
                this.setState({ users: users }))
    }

    componentDidMount() {
        this.loadUsers()

    }



    render() {
        const { users } = this.state;

        return (
            <table>
                <tbody>
                    <tr className="table-header">
                        <td><b>ID</b></td>
                        <td><b>Name</b></td>
                        <td><b>Email</b></td>
                        <td><b>City</b></td>
                    </tr>
                    {users.map((user, i) => {
                        return (
                            < tr key={i} className="user-cells">
                                <td>{user.id}</td>
                                <td><Link to={`/users/${user.id}`}>{user.name}</Link></td>
                                <td>{user.email}</td>
                                <td>{user.city}</td>
                            </tr>)
                    })}
                </tbody>
            </table>
        )

    }
}