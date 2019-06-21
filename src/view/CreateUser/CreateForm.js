import React from 'react';

export const CreateForm = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        props.onFormSubmit();
    };

    return (
        <form className="user-form" onSubmit={onSubmit} >
            <label >Name:
                <input
                    type="text"
                    name="userName"
                    placeholder="Name"
                    value={`${props.userName}`}
                    onChange={props.onChange}
                />
            </label>

            {/* {props.errorMessage} */}
            <label>Email:
                <input
                    type="text"
                    name="userEmail"
                    placeholder="email"
                    value={`${props.userEmail}`}
                    onChange={props.onChange}
                />
            </label>

            {props.errors.map((error, i) => <p key={i}>{error}</p>)}

            <input type="submit" value="Create" />
        </form>
    )
}