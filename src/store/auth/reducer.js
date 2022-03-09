import { USER_DATA } from './action-types';

const initialState = {
	userData: {}
}

const auth = (state = initialState, { type, payload }) => {
	switch (type) {
		case USER_DATA:
			return { ...state, ...payload}

		default:
			return state;
	}
}

export default auth