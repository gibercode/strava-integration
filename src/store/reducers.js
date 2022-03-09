import { combineReducers } from 'redux';
import auth from './auth/reducer'
import activity from './activities/reducer'

const reducers = combineReducers({
	auth,
	activity
});

export default reducers;
