import { applyMiddleware, createStore } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import form from './data/formData'
import rootReducer from './reducers/index'

const defaultState = {
	form,
};


const store = createStore(rootReducer, defaultState);

/*export const history = syncHistoryWithStore(browserHistory, store); */

export default store;