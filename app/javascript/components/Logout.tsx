import React from 'react'

import { Button } from '@material-ui/core';

const Logout = ({ logout }) => {
  return (
    <Button
      variant='contained'
      onClick={ () => {
        logout
      }}
    />
  )
}

import { APP_PROP_TYPE } from '../constants';
Logout.propTypes = APP_PROP_TYPE

export default Logout