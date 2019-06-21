import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'


export const Header = () => {
    return (
        <header>
            <h1>BIT USERS</h1>
            <div className="header-nav">
                <span><Link to={`/users`}>Users</Link></span>
                <span><Link to={`/users/create`}>Create User</Link></span>
            </div>
        </header>
    )
}