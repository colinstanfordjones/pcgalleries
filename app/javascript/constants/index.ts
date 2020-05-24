// TODO dynamically set this up depending on environment vars, node, something.
export const HOSTNAME = "https://localhost:3000"

// User Constants
// API User Paths 
export const CREATE_USER_PATH = "/user/create"
export const LOGIN_PATH = "/login"
export const LOGOUT_PATH = "/logout"
// Declared User action names
export const SERVER_CALLBACK = "SERVER_CALLBACK"
export const UPDATE_FIELDS = "UPDATE_FIELDS"
// Status enum
export const USER_STATUS = {
  INIT: "INIT",
  LOGGED_IN: "LOGGED_IN",
  LOGGED_OUT: "LOGGED_OUT"
}

import * as PropTypes from 'prop-types'

export const APP_PROP_TYPE = {
  user: PropTypes.shape({
    handle: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    confirm_password: PropTypes.string
  }),
  login: PropTypes.func,
  logout: PropTypes.func,
  createUser: PropTypes.func,
  processFields: PropTypes.func,
  token: PropTypes.string,
  agent: PropTypes.string
}

export const USER_INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
  confirm_password: ""
}

// Navigation Constants
export const UPDATE_NAVIGATION_INDEX = "UPDATE_NAVIGATION_INDEX"
export const NAVIGATION_INITIAL_STATE = {
  index: 0,
  routes: [
    { key: 'login', title: 'Login' },
    { key: 'register', title: 'Register' },
  ],
}