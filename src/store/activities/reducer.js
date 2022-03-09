import { USER_ACTIVITIES } from './action-types';

const initialState = {
  userActivities: []
}

const activities = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_ACTIVITIES:
      return { ...state, ...payload }

    default:
      return state;
  }
}

export default activities