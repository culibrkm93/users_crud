import React from 'react';
import './CreateUser.css'
import { CreateForm } from './CreateForm';

export class CreateUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            userEmail: "",
            errors: [],

        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }


    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    isFormValid() {
        const { userEmail, userName } = this.state;

        let errors = [];
        if (userName.length < 3 || userName.length > 30) {
            errors.push("Name length is invalid!");
        }

        if (userEmail.length < 3 || userEmail.length > 30 || userEmail.includes("@") === false) {
            errors.push("Email value is invalid!");
        }

        return errors;
    }

    onFormSubmit() {
        const errors = this.isFormValid();
        if (errors.length) {
            this.setState({ errors });
            return;
        } else {
            this.setState({ errors: [] });
        }

        console.log(errors);
        console.log('submitting');

    }

    render() {
        const { userName, userEmail, errors } = this.state;

        return (
            <CreateForm
                userName={userName}
                userEmail={userEmail}
                onChange={this.onChange}
                onFormSubmit={this.onFormSubmit}
                errors={errors}
            />
        )

    }
}