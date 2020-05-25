import { connect } from 'react-redux'

import { login, logout, createUser, processUserFields } from '../actions/User'
import { getAccounts, createAccount, updateAccount, processAccountFields } from '../actions/Accounts'

import Home from '../components/Home';

const mapStateToProps = ( state: any ) => {
  return state
}

const mapDispatchToProps = {
  login,
  logout,
  createUser,
  getAccounts,
  createAccount,
  updateAccount,
  processAccountFields,
  processUserFields
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)