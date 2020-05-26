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
// Declared Accounts action names
export const ACCOUNTS_SERVER_CALLBACK = "ACCOUNTS_SERVER_CALLBACK"
export const ACCOUNT_SERVER_CALLBACK = "ACCOUNT_SERVER_CALLBACK"
export const ACCOUNT_UPDATE_FIELDS = "ACCOUNT_UPDATE_FIELDS"
// Declared Phone action names
export const PHONE_SERVER_CALLBACK = "PHONE_SERVER_CALLBACK"
export const PHONE_UPDATE_FIELDS = "PHONE_UPDATE_FIELDS"
// Status enum
export const USER_ROLE = {
  ADMIN: "admin",
  SALES: "sales",
  USER: "user"
}

import * as PropTypes from 'prop-types'

export const APP_PROP_TYPE = {
  user: PropTypes.shape({
    id: PropTypes.number,
    handle: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
    password: PropTypes.string,
    password_confirmation: PropTypes.string,
    token: PropTypes.string,
  }),
  login: PropTypes.func,
  logout: PropTypes.func,
  createUser: PropTypes.func,
  processFields: PropTypes.func,
  
  accounts: PropTypes.object,
  getAccounts: PropTypes.func,
  updateAccounts: PropTypes.func,
  createAccounts: PropTypes.func,

  us_states: PropTypes.shape({
    key: PropTypes.symbol,
    value: PropTypes.string
  }),

  voice: PropTypes.shape({
    phone_number: PropTypes.string,
    agent: PropTypes.string,
    token: PropTypes.string,
  })
}

export const USER_INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
  token: ""
}

export const ACCOUNTS_INITIAL_STATE = {}

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
