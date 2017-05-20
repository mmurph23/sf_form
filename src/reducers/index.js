import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import form from './formReducer';

const rootReducer = combineReducers({form, routing: routerReducer});

export default rootReducer;