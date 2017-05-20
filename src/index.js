import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import ConfirmContainer from './containers/ConfirmContainer.js';
import FormContainer from './containers/FormContainer';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import store from './store';

{ /*

const router = (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={App}>
			 <IndexRoute component={FormContainer}></IndexRoute>
			 <Route path='/confirm' component={ConfirmContainer}></Route>
			</Route>
		</Router>
	</Provider>
);

ReactDOM.render(router, document.getElementById('root'));

*/ }

const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={FormContainer}/>
        <Route path="/confirm" component={ConfirmContainer}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)