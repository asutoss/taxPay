import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/homePage';
import PayPage from '../components/payPage';
import ProjectsPage from '../components/projectsPage';

const AppRouter = () => (
    
    <div>
        <BrowserRouter>
            <Switch>
                <Route path='/' component={HomePage} exact={true} />
                <Route path='/pay' component={PayPage} exact={true} />
                <Route path='/projects' component={ProjectsPage} exact={true} />
            </Switch>
        </BrowserRouter>
    </div>
);

export default AppRouter;