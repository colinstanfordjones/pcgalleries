import { combineReducers } from 'redux';

import { user } from './user';
import { accounts, account } from './accounts';

export default combineReducers({
    user,
    accounts,
    account
});
