import React from 'react'
import { fetchUsers } from '../../service/fetchusers'

export class UserPage extends React.Component {

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
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>City</td>
                    </tr>
                    {users.map((user, i) => {
                        return (< tr key={i} >
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.city}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        )

    }
}