import { actionObject } from '../../utils';
import { USER_DATA } from './action-types';

export const setUserData = data => actionObject(USER_DATA, data);
