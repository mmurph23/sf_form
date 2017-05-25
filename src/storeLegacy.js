import { createStore, combineReducers, applyMiddleware } from 'redux'
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import form from './data/formData'
import rootReducer from './reducers/index'

const defaultState = {
	form,
};


const initialState = {
			dealerName: '', 
			email: '',
			phone: '',
			url: '',
			contactMethodSelection: '',
			contactMethods: ['email', 'phone'],
			issueTypeSelection: '',
			issueTypes: ['Defect','Customization','Configuration'],
			issueTitle: '',
			petSelections: [],
			selectedPets: [],
			ageOptions: [],
			ownerAgeRangeSelection: '',
			siblingOptions: [],
			siblingSelection: [],
			currentPetCount: 0,
			description: ''
		};


const browserHistory = createBrowserHistory();
const historyRouterMiddleware = routerMiddleware(browserHistory);

export const store = createStore(
	combineReducers({
		...rootReducer,
		router: routerReducer
	}),
	applyMiddleware(historyRouterMiddleware)
);

export const history = syncHistoryWithStore(browserHistory, store);

/*export const history = syncHistoryWithStore(browserHistory, store); */


