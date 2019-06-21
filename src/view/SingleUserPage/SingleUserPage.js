import React from 'react';
import { fetchSingleUser } from '../../service/fetchusers';
import { deleteRequest } from '../../service/fetchusers';
import { SingleUserForm } from './SingleUserForm';

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

    onButtonClick = (e) => {
        const userId = this.props.match.params.id;
        deleteRequest(userId, this.state.user)
    }


    render() {
        const { user } = this.state;
        if (!user) {
            return <p>Loading...</p>
        }
        return (
            <SingleUserForm name={user.name} email={user.email} onButtonClick={this.onButtonClick} />

        )
    }
}
