import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/homePage';
import PayPage from '../components/payPage';
import ProjectsPage from '../components/projectsPage';
import RegisterPage from '../components/registerPage';
import LoginPage from '../components/loginPage';

const AppRouter = () => (
    
    <div>
        <BrowserRouter>
            <Switch>
                <Route path='/' component={HomePage} exact={true} />
                <Route path='/pay' component={PayPage} exact={true} />
                <Route path='/projects' component={ProjectsPage} exact={true} />
                <Route path='/register' component={RegisterPage} exact={true} />
                <Route path='/login' component={LoginPage} exact={true} />
            </Switch>
        </BrowserRouter>
    </div>
);

export default AppRouter;