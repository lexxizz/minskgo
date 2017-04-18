import React from 'react';
import {Router, Route} from 'react-router';
import Application from '../components/Application';
import MainPage from '../components/MainPage';
import Preview from '../components/Preview';

export default (

        <Route path="/" component={MainPage} >
            <Route path="/test" component={Preview} />
        </Route>

);