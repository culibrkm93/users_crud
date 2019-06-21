import React from 'react';
import './CreateUser.css'
import { CreateForm } from './CreateForm';

export class CreateUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            errors: {},

        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }


    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        const { errors } = this.state;
        delete errors[name]
        this.setState({
            [name]: value,
            errors
        });
    }

    isFormValid() {
        const { name, email } = this.state;

        let errors = {};
        if (name.length < 3 || name.length > 30) {
            errors.name = "Name value is invalid!";
        }

        if (!email.includes("@")) {
            errors.email = "Email value is invalid!";
        }

        const hasErrors = Object.keys(errors).length;
        if (hasErrors) {
            this.setState({ errors });
        }

        return !hasErrors;
    }

    onFormSubmit() {
        if (!this.isFormValid()) {
            return;
        }


        console.log('submitting');

    }

    render() {
        const { name, email, errors } = this.state;
        const { onChange, onFormSubmit } = this;

        return (
            <CreateForm
                userName={name}
                userEmail={email}
                onChange={onChange}
                onFormSubmit={onFormSubmit}
                errors={errors}
            />
        )

    }
}