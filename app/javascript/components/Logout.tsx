import React from 'react'

import { Button } from '@material-ui/core';

const Logout = ({ user, logout }) => {
  return (
    <Button
      variant='contained'
      onClick={ () => {
        logout(user)
      }}
    >
      Logout
    </Button>
  )
}

import { APP_PROP_TYPE } from '../constants';
Logout.propTypes = APP_PROP_TYPE

export default Logout
