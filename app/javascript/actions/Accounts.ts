import {
  ACCOUNTS_SERVER_CALLBACK,
  ACCOUNT_SERVER_CALLBACK,
  ACCOUNT_UPDATE_FIELDS,
  GET_ACCOUNTS_PATH,
  CREATE_ACCOUNT_PATH,
  UPDATE_ACCOUNT_PATH
} from '../constants';

import { serverPost, serverGet } from '.'

// User dispatch functions
export const processAccountFields = (app: any, params: any) => (dispatch: any)  => {
  console.log('Processing Account Fields');
  const updateParams = {
    ...app.account,
    ...params
  }
  dispatch({ type: ACCOUNT_UPDATE_FIELDS, updateParams });
}

// User dispatch functions
export const processAccountsRequest = (dispatch: any, app: any)  => (response: any) => {
  console.log('Processing Account Request');
  const updatedAccounts = {
    ...app.accounts,
    ...response.data
  }
  dispatch({ type: ACCOUNTS_SERVER_CALLBACK, updatedAccounts });
}

// User dispatch functions
export const processAccountRequest = (dispatch: any, app: any)  => (response: any) => {
  console.log('Processing Account Request');
  const updatedAccount = {
    ...app.account,
    ...response.data
  }
  dispatch({ type: ACCOUNT_SERVER_CALLBACK, updatedAccount });
}

export const getAccounts = (accounts: any) => (dispatch: any) => {
  console.log("create")
  serverGet(processAccountsRequest(dispatch, accounts), GET_ACCOUNTS_PATH, {})
}

export const createAccount = (account: any) => (dispatch: any) => {
  console.log("create")
  serverPost(processAccountRequest(dispatch, account), CREATE_ACCOUNT_PATH, {})
}

export const updateAccount = (account: any) => (dispatch: any) => {
  console.log("create")
  serverPost(processAccountRequest(dispatch, account), UPDATE_ACCOUNT_PATH, {})
}

export default {
  processAccountFields,
  getAccounts,
  createAccount,
  updateAccount
}