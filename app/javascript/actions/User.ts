import {
  LOGIN_PATH,
  LOGOUT_PATH,
  CREATE_USER_PATH,
  USER_SERVER_CALLBACK,
  USER_UPDATE_FIELDS,
  UPDATE_USER_PATH,
} from '../constants';

import { serverPost, serverDelete } from '.'

// User dispatch functions
export const processUserFields = (user: any, params: any) => (dispatch: any)  => {
  const updatedUser = {
    ...user,
    ...params
  }
  dispatch({ type: USER_UPDATE_FIELDS, updatedUser });
}

// User dispatch functions
export const processUserRequest = (dispatch: any, user: any)  => (response: any) => {
  const updatedUser = {
    ...user,
    ...response.data
  }
  dispatch({ type: USER_SERVER_CALLBACK, updatedUser });
}
// User dispatch functions
export const processUserSessionRequest = (dispatch: any, user: any)  => (response: any) => {
  console.log('New User Session');
  console.log(response);

  const jwt = response.headers['authorization'].split('Bearer ')[1];
  window.sessionStorage.setItem('jwt', jwt);
  const updatedUser = {
    ...response.data
  }
  console.log(updatedUser);

  dispatch({ type: USER_SERVER_CALLBACK, updatedUser });
}

// User dispatch functions
export const processUserLogoutRequest = (dispatch: any, user: any)  => (response: any) => {
  console.log('Destroy Session');
  console.log(response);

  const updatedUser = {
    ...response.data
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
  serverPost(processUserSessionRequest(dispatch, user), LOGIN_PATH, login_server_params)
}

export const logout = (user: any) => (dispatch: any) => {
  console.log("logout")
  serverDelete(processUserLogoutRequest(dispatch, user), LOGOUT_PATH, {})
}

export const createUser = (user: any) => (dispatch: any) => {
  console.log("create")
  const create_user_server_params = {
    user: {
      handle: user.handle,
      email: user.email,
      password: user.password,
      password_confirmation: user.password_confirmation
    }
  }
  serverPost(processUserSessionRequest(dispatch, user), CREATE_USER_PATH, create_user_server_params)
}

export const updateUser = (user: any) => (dispatch: any) => {
  console.log("create")
  const update_user_server_params = {
    user: {
      handle: user.handle,
      email: user.email,
      password: user.password,
      password_confirmation: user.password_confirmation
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