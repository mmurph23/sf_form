import * as types from './index';

export const loadForm = (fields) => {
	return {
		type: types.LOAD_FORM,
		fields
	}
}