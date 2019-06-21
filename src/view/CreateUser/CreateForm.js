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
                    name="name"
                    placeholder="Name"
                    value={`${props.userName}`}
                    onChange={props.onChange}
                />
            </label>
            <p>{props.errors.name}</p>


            <label>Email:
                <input
                    type="text"
                    name="email"
                    placeholder="email"
                    value={`${props.userEmail}`}
                    onChange={props.onChange}
                />
            </label>
            <p>{props.errors.email}</p>



            <input type="submit" value="Create" />
        </form>
    )
}