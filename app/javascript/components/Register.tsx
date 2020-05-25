import React from 'react'

import {  Button, Input, Container } from '@material-ui/core';
const Register = ({ user, processFields, createUser })  => {
  return (
    <Container>
      <Input
        value={user.handle}
        // @ts-ignore
        onChange={ (event: object) => processFields(user, { handle: event.target.value })}
        placeholder={'Name'}
      />
      <Input
        value={user.email}
        // @ts-ignore
        onChange={ (event: object) => processFields(user, { email: event.target.value })}
        placeholder={'Email'}
      />
      <Input
        value={user.password}
        // @ts-ignore
        onChange={ (event: object) => processFields(user, { password: event.target.value })}
        placeholder={'Password'}
        type={'password'}
      />
      <Input
        value={user.password_confirmation}
        // @ts-ignore
        onChange={ (event: object) => processFields(user, { password_confirmation: event.target.value })}
        placeholder={'Confirm Password'}
        type={'password'}
      />
      <Button
        variant='contained'
        onClick={ () => {
          createUser(user)
        }}
      />
    </Container>
  )
}

import { APP_PROP_TYPE } from '../constants';
Register.propTypes = APP_PROP_TYPE

export default Register