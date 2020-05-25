import React from 'react'

import { Button, Container } from '@material-ui/core'

const Accounts = ({ user, accounts, account, getAccounts, createAccount, updateAccount }) => {
  return (
    <Container>
      <Button
        variant={ 'contained' }
        onClick={ () => {
           getAccounts(accounts)
        }}
      />
    </Container>
  )
}

import { APP_PROP_TYPE } from '../constants';
Accounts.propTypes = APP_PROP_TYPE

export default Accounts
