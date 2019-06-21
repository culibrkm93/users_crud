import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './Main.css'
import { UsersPage } from '../UsersPage/UsersPage';
import { SingleUserPage } from '../SingleUserPage/SingleUserPage'
import { CreateUser } from '../CreateUser/CreateUser';



export const Main = () => {
    return (
        <main>
            <Switch>
                <Route path={`/users/create`} component={CreateUser} />
                <Route path={`/users/:id`} component={SingleUserPage} />
                <Route path={`/users`} component={UsersPage} />
                <Redirect from='/' to='/users' />
            </Switch>

        </main>
    )
}