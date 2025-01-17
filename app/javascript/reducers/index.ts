import { combineReducers } from 'redux';

import { user } from './user';
import { accounts, account } from './accounts';
import { voice } from './voice';

export default combineReducers({
    user,
    accounts,
    account
});
