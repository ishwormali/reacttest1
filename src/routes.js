import React from 'react';
import {Router,Route,IndexRedirect} from 'react-router';
import DefaultApp from './components/default.js';

import TodoApp from './todolist';


const createRoutes=store=>{
    return (
        <Router>
            <Route path='/todo' component={TodoApp} />
            <Route path="*" component={DefaultApp} />   
        </Router>
        
    )
};


export default createRoutes;