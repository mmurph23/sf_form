import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { ConnectedRouter as Router, routerReducer, routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'

import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { composeWithDevTools } from 'redux-devtools-extension'

import App from './App'
import store, { history } from './store.js'

import { reducer as formReducer } from 'redux-form'

{/*const history = createHistory();
const middleware = routerMiddleware(history);

const reducers = {
	form: formReducer,
	router: routerReducer
}

const reducer = combineReducers(reducers);
const store = createStore(reducer, composeWithDevTools(applyMiddleware(middleware, thunk))); */}


ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<div>
				<App />
			</div>
		</Router>
	</Provider>,
	document.getElementById('root')
);