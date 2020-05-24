import axios from 'axios';

import {
  HOSTNAME,
  LOGIN_PATH,
  LOGOUT_PATH,
  CREATE_USER_PATH,
  SERVER_CALLBACK,
  UPDATE_FIELDS,
  UPDATE_NAVIGATION_INDEX
} from '../constants';

// User reducer functions
export const serverCallback = (user: any) => ({
  type: SERVER_CALLBACK,
  user
})

export const updateFields = (user: any) => ({
  type: UPDATE_FIELDS,
  user
})

// Navigation reducer functions
export const updateNavigationIndex = (index: any) => ({
  type: UPDATE_NAVIGATION_INDEX,
  index
})

// TODO this will parse a response and return a new user
const processResponse = (user: any, response: any) => {
  return user;
}

const generateRequest = (user: any) => {
  console.log('Generating Request');
  const login_server_params = {
    user: {
      email: user.email,
      password: user.password
    }
  }
  return login_server_params;
}

// User dispatch functions
export const processFields = (user: any, params: any) => (dispatch: any)  => {
  console.log('Processing Field');
  console.log(user)
  const updatedUser = {
    ...user,
    ...params
  }
  dispatch(updateFields(updatedUser));
}

// Navigation dispatch functions
export const updateNavigation = (index: any) => (dispatch: any) => {
  dispatch(updateNavigationIndex(index));
}

export const login = (user: any) => (dispatch: any) => {
  console.log("login!!")
  console.log(user)
  const request_params = generateRequest(user)
  axios.patch(`${HOSTNAME}${LOGIN_PATH}`, request_params)
    .then((response: any) => {
      console.log(response.data)
      const server_response = processResponse(user, response.data)
      dispatch(serverCallback(server_response));
    })
    .catch((reason: any) => {
      console.log(reason)

      dispatch(serverCallback(user));
    })
}

export const logout = (user: any) => (dispatch: any) => {
  console.log("logout")
  console.log(dispatch)
  axios.get(`${HOSTNAME}${LOGOUT_PATH}`)
    .then((response: any) => {
      console.log(response)
      const server_response = processResponse(user, response.data)
      dispatch(serverCallback(server_response));
    })
    .catch((reason: any) => {
      console.log(reason)
      dispatch(serverCallback(user));
    })
}
export const createUser = (user: any) => (dispatch: any) => {
  console.log("create")
  const request_params = generateRequest(user)
  axios.get(`${HOSTNAME}${CREATE_USER_PATH}`)
    .then((response: any) => {
      console.log(response)
      const server_response = processResponse(user, response.data)
      dispatch(serverCallback(server_response));
    })
    .catch((reason: any) => {
      console.log(reason)
      dispatch(serverCallback(user));
    })
}

export default {
  serverCallback,
  updateFields,
  processFields,
  updateNavigationIndex,
  updateNavigation,
  login,
  logout,
  createUser
}