import * as types from '../actions/index';

function formReducer (state = {dealerName: '',
			email: '',
			phone: '',
			url: '',
			contactMethods: [],
			contactMethodSelection: '',
			issueTypeSelection: '',
			issueTitle: '',
			selectedPets: [],
			ownerAgeRangeSelection: '',
			siblingSelection: [],
			currentPetCount: 0,
			description: ''
		}, action) {
	switch (action.type) {
		case 'ADD_NAME':
			return {...state}
	}

	return state;
}

export default formReducer;