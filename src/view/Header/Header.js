import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'


export const Header = () => {
    return (
        <header>
            <h1>BIT USERS</h1>
            <div class="header-nav">
                <span><Link to={`/`}>Home</Link></span>
                <span><Link to={`/`}>Users</Link></span>
                <span><Link to={`/`}>Single User</Link></span>
            </div>
        </header>
    )
}