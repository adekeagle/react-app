import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AdminPage from '../pages/AdminPage';
import ContactPage from '../pages/ContactPage';
import ProductListPage from '../pages/ProductListPage';
import ProductPage from '../pages/ProductPage';
import LoginPage from '../pages/LoginPage';
import ErrorPage from '../pages/ErrorPage';

const Page = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact component={ HomePage } />
                <Route path="/products" exact component={ ProductListPage } />
                <Route path="/product/:id" exact component={ ProductPage } />
                <Route path="/contact" exact component={ ContactPage } />
                <Route path="/admin" exact component={ AdminPage } />
                <Route path="/login" exact component={ LoginPage } />
                <Route component={ ErrorPage } />
            </Switch>
        </React.Fragment>
     );
}
 
export default Page;