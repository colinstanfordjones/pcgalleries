import React from 'react'

import { Button } from '@material-ui/core';

const User = ({ user, updateUser }) => {
  return (
    <Button
      variant='contained'
      onClick={ () => {
        updateUser
      }}
    />
  )
}

import { APP_PROP_TYPE } from '../constants';
User.propTypes = APP_PROP_TYPE

export default User