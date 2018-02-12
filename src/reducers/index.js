import {combineReducers} from 'redux';
import {createStore} from 'redux';

import todoApp from '../todolist/reducers';

const appReducers=combineReducers({todoApp:todoApp});

export default ()=>{
 return createStore(appReducers);    
};