import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { LoginScreen } from '../auth/LoginScreen';
import { CalendarScreen } from '../calendar/CalendarScreen';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={LoginScreen} />
                <Route exact path="/" component={CalendarScreen} />

                <Redirect to="/"/>
            </Switch>    
        </BrowserRouter>
    )
}
