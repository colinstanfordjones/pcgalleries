import { SERVER_CALLBACK, UPDATE_FIELDS, USER_INITIAL_STATE } from '../constants';

const reducer = (state = USER_INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SERVER_CALLBACK:
      return {
          ...action.user
      }
    case UPDATE_FIELDS:
      return {
          ...action.user
        }
    default:
      return state
  }
}

export default reducer