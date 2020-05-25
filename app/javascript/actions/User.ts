import {
  LOGIN_PATH,
  LOGOUT_PATH,
  CREATE_USER_PATH,
  USER_SERVER_CALLBACK,
  USER_UPDATE_FIELDS,
  UPDATE_USER_PATH,
} from '../constants';

import { serverPost, serverGet } from '.'

// User dispatch functions
export const processUserFields = (user: any, params: any) => (dispatch: any)  => {
  console.log('Processing Field');
  console.log(user)
  console.log(params)
  const updatedUser = {
    ...user,
    ...params
  }
  dispatch({ type: USER_UPDATE_FIELDS, updatedUser });
}

// User dispatch functions
export const processUserRequest = (dispatch: any, user: any)  => (response: any) => {
  console.log('Processing Request');
  const updatedUser = {
    ...user,
    ...response
  }
  dispatch({ type: USER_SERVER_CALLBACK, updatedUser });
}

export const login = (user: any) => (dispatch: any) => {
  console.log("login")
  console.log(user)
  const login_server_params = {
    user: {
      email: user.email,
      password: user.password
    }
  }
  serverPost(processUserRequest(dispatch, user), LOGIN_PATH, login_server_params)
}

export const logout = (user: any) => (dispatch: any) => {
  console.log("logout")
  serverGet(processUserRequest(dispatch, user), LOGOUT_PATH, {})
}

export const createUser = (user: any) => (dispatch: any) => {
  console.log("create")
  const create_user_server_params = {
    user: {
      handle: user.handle,
      email: user.email,
      password: user.password,
      confirm_password: user.confirm_password
    }
  }
  serverPost(processUserRequest(dispatch, user), CREATE_USER_PATH, create_user_server_params)
}

export const updateUser = (user: any) => (dispatch: any) => {
  console.log("create")
  const update_user_server_params = {
    user: {
      handle: user.handle,
      email: user.email,
      password: user.password,
      confirm_password: user.confirm_password
    }
  }
  serverPost(processUserRequest(dispatch, user), UPDATE_USER_PATH, update_user_server_params)
}

export default {
  login,
  logout,
  createUser,
  processUserFields
}