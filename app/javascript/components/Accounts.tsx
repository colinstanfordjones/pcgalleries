import React from 'react'

import { Button, Container } from '@material-ui/core'

const AccountList = (props) => {
  console.log(props.accounts)
  console.log("!!!")

  var account_list = Object.values(props.accounts)

  const listAccounts = account_list.map((account) =>
    <li>
      { account.first_name }
      { account.last_name }
      { account.phone_number }
    </li>
  );
  return (
    <ul>{listAccounts}</ul>
  );
}

const Accounts = ({ user, accounts, account, getAccounts, createAccount, updateAccount }) => {
  return (
    <Container>
      <AccountList user={user} accounts={accounts} account={account}/>,
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
