import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import form from './formReducer';

const rootReducer = combineReducers({formReducer, routing: routerReducer});

export default rootReducer;