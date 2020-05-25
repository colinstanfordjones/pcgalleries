import * as React from 'react'

import Login from './Login'
import Logout from './Logout'
import Register from './Register'

import Accounts from './Accounts'
import User from './User'

import { Container } from '@material-ui/core';

import { USER_ROLE, APP_PROP_TYPE } from '../constants';

const Home = ({ user, accounts, account, login, logout, createUser, updateUser, getAccounts, createAccount, updateAccount, processUserFields, processAccountFields }) => {
  switch (user.role) {
    case USER_ROLE.SALES :
      return (
        <Container>
          Logged In : { user.email }
          <Logout user={ user } logout={ logout } />
          <Accounts
            user={ user }
            accounts={ accounts }
            account={ account }
            getAccounts={ getAccounts }
            processFields={ processAccountFields }
            createAccount={ createAccount }
            updateAccount={ updateAccount }/>
          <User user={ user } processFields={ processUserFields } updateUser={ updateUser }/>
        </Container>
      )
    case USER_ROLE.ADMIN :
      return (
        <Container>
          Logged In : { user.email }
          <Logout user={ user } logout={ logout } />
          <Accounts
            user={ user }
            accounts={ accounts }
            account={ account }
            getAccounts={ getAccounts }
            processFields={ processAccountFields }
            createAccount={ createAccount }
            updateAccount={ updateAccount }/>
          <User user={ user } processFields={ processUserFields } updateUser={ updateUser }/>
        </Container>
      )
    case USER_ROLE.USER :
      return (
        <Container>
          Logged In : { user.email }
          <Logout user={ user } logout={ logout } />
          <User user={ user } processFields={ processUserFields } updateUser={ updateUser }/>
        </Container>
      )
    default :
      return (
        <Container>
            <Register user={ user } processFields={ processUserFields } createUser={ createUser }/> 
            <Login user={ user } processFields={ processUserFields } login={ login }/>
        </Container>
    )
  }
}

Home.propTypes = APP_PROP_TYPE

export default Home
