import { connect } from 'react-redux'

import { login, logout, createUser, processFields, updateNavigation } from '../actions'

import Home from '../components/Home';

const mapStateToProps = (state: any) => {
  return state
}

const mapDispatchToProps = {
  login,
  logout,
  createUser,
  processFields,
  updateNavigation
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)