import {
  USER_SERVER_CALLBACK,
  USER_UPDATE_FIELDS,
  USER_INITIAL_STATE
} from '../constants';

export const user = (state = USER_INITIAL_STATE, action: any) => {
  switch (action.type) {
    case USER_SERVER_CALLBACK:
      return {
          ...action.updatedUser
      }
    case USER_UPDATE_FIELDS:
      return {
          ...action.updatedUser
        }
    default:
      return state
  }
}

export default {
  user
}