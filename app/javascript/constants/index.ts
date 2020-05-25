// TODO dynamically set this up depending on environment vars, node, something.
export const HOSTNAME = `https://${process.env.PUBLIC_HOSTNAME}/api/v1`

// User Constants
// API User Paths 
export const CREATE_USER_PATH = "/signup"
export const UPDATE_USER_PATH = "/user"
export const LOGIN_PATH = "/login"
export const LOGOUT_PATH = "/logout"
export const GET_ACCOUNTS_PATH = '/accounts'
export const CREATE_ACCOUNT_PATH = '/accounts'
export const UPDATE_ACCOUNT_PATH = '/accounts'
// Declared User action names
export const USER_SERVER_CALLBACK = "USER_SERVER_CALLBACK"
export const USER_UPDATE_FIELDS = "USER_UPDATE_FIELDS"
// Declared User action names
export const ACCOUNTS_SERVER_CALLBACK = "ACCOUNTS_SERVER_CALLBACK"
export const ACCOUNT_SERVER_CALLBACK = "ACCOUNT_SERVER_CALLBACK"
export const ACCOUNT_UPDATE_FIELDS = "ACCOUNT_UPDATE_FIELDS"
// Status enum
export const USER_STATUS = {
  INIT: "INIT",
  LOGGED_IN: "LOGGED_IN",
  LOGGED_OUT: "LOGGED_OUT"
}

import * as PropTypes from 'prop-types'

export const APP_PROP_TYPE = {
  user: PropTypes.shape({
    id: PropTypes.number,
    handle: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    confirm_password: PropTypes.string
  }),
  us_states: PropTypes.shape({
    key: PropTypes.symbol,
    value: PropTypes.string
  }),
  login: PropTypes.func,
  logout: PropTypes.func,
  createUser: PropTypes.func,
  processFields: PropTypes.func,
  token: PropTypes.string,
  twilio_token: PropTypes.string,
  agent: PropTypes.string,

  accounts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    phone_number: PropTypes.string,
    email: PropTypes.string,
    address1: PropTypes.string,
    address2: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.symbol,
    zip: PropTypes.number,
    created_at: PropTypes.instanceOf(Date),
    updated_a: PropTypes.instanceOf(Date)
  })),
  getAccounts: PropTypes.func,
  updateAccounts: PropTypes.func,
  createAccounts: PropTypes.func,
}

export const USER_INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  token: ""
}

export const ACCOUNTS_INITIAL_STATE = []

export const ACCOUNT_INITIAL_STATE = {
  id: -1,
  first_name: "",
  last_name: "",
  phone_number: "",
  email: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zip: -1,
  created_at: "",
  updated_a: ""
}
