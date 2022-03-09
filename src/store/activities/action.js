import { actionObject } from '../../utils';
import { USER_ACTIVITIES } from './action-types';

export const setUserActivity = data => actionObject(USER_ACTIVITIES, data);
