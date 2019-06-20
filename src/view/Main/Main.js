import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './Main.css'
import { UserPage } from '../UserPage/UserPage';
import { Homepage } from '../HomePage/HomePage'



export const Main = () => {
    return (
        <main>
            <Switch>
                <Route path={`/users`} component={UserPage} />
                <Redirect from='/' to='/users' />
                <Route path={`/`} component={Homepage} />
            </Switch>

        </main>
    )
}