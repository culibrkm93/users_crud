import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'


export const Header = () => {
    return (
        <header>
            <h1>BIT USERS</h1>
            <div className="header-nav">
                <span><Link to={`/`}>Home</Link></span>
                <span><Link to={`/`}>Users</Link></span>
                <span><Link to={`/`}>Create User</Link></span>
            </div>
        </header>
    )
}