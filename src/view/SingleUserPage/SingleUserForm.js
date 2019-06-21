import React from 'react';

export const SingleUserForm = (props) => {

    return (
        <form className="user-form">
            <label>Name:
            <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={`${props.name}`}
                />
            </label>

            <label>Email:
            <input
                    type="text"
                    name="email"
                    placeholder="email"
                    value={`${props.email}`}
                />
            </label>

            <button>Edit</button>
            <button onClick={props.onButtonClick}>Delete</button>

        </form>
    )
}