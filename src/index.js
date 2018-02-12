import React from 'react';
import ReactDOM from 'react-dom';

import {Router,browserHistory} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import createRoutes from './routes';

import css from './styles/main.css';
import createAppStore from './reducers';

let store=createAppStore()
const routes=createRoutes(store);

class App extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <Provider store={store}>
                <Router routes={routes} history={browserHistory} />
            </Provider>        
        );
    }
}


export default App;

ReactDOM.render(<App/>,document.getElementById('root'));