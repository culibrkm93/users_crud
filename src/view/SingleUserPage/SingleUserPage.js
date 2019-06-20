import React from 'react';
import { fetchSingleUser } from '../../service/fetchusers';

export class SingleUserPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
    }

    loadSingleUser() {
        const userId = this.props.match.params.id;
        fetchSingleUser(userId)
            .then(user => this.setState({ user }))
    }

    componentDidMount() {
        const userId = this.props.match.params.id;

        this.loadSingleUser(userId)
    }


    render() {
        const { user } = this.state;
        if (!user) {
            return <p>Loading...</p>
        }
        return (
            <div>
                <h1>{user.name}</h1>
                <p>{user.city}</p>
            </div>

        )
    }
}
