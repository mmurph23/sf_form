import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { ConnectedRouter as Router, routerReducer, routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'

import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { composeWithDevTools } from 'redux-devtools-extension'


import formReducer from './reducers/formReducer'

import formData from './data/formData'

export const history = createHistory();
const middleware = routerMiddleware(history);

const defaultState = {
	formData
}

const reducers = {
	form: formReducer,
	router: routerReducer
}

const reducer = combineReducers(reducers);
const store = createStore(reducer, defaultState, composeWithDevTools(applyMiddleware(middleware, thunk)));

export default store;


