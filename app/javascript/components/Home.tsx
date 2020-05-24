import * as React from 'react'

import Login from './Login'
import Logout from './Logout'
import Register from './Register'

import { Container } from '@material-ui/core';

import { USER_STATUS, APP_PROP_TYPE } from '../constants';

const Home = ({ user, login, logout, createUser, processFields }) => {
  switch (user.status) {
    case USER_STATUS.LOGGED_IN :
      return (
        <Container>
          Logged In : { user.name }
          <Logout logout={ logout } />
        </Container>
      )
    default :
      return (
        <Container>
            <Register user={ user } processFields={ processFields } createUser={ createUser }/> 
            <Login user={ user } processFields={ processFields } login={ login }/>
        </Container>
    )
  }
}

Home.propTypes = APP_PROP_TYPE

export default Home
