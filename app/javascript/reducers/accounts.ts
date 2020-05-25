import {
  ACCOUNTS_INITIAL_STATE,
  ACCOUNT_INITIAL_STATE,
  ACCOUNTS_SERVER_CALLBACK,
  ACCOUNT_SERVER_CALLBACK,
  ACCOUNT_UPDATE_FIELDS
} from '../constants';

export const accounts = (state = ACCOUNTS_INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ACCOUNTS_SERVER_CALLBACK:
      return []
    default:
      return state
  }
}

export const account = (state = ACCOUNT_INITIAL_STATE, action: any) => {
  switch (action.type) {
      case ACCOUNT_SERVER_CALLBACK:
        return {
          ...action.account
        }

    case ACCOUNT_UPDATE_FIELDS:
      return {
          ...action.account
        }
    default:
      return state
  }
}

export default {
  accounts,
  account
}
