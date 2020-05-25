import React from 'react'

import { Button, Input, Container } from '@material-ui/core'

const Login = ({ user, processFields, login }) => {
  return (
    <Container>
      <Input
        placeholder={'Email'}
        value={ user.email }
        // @ts-ignore
        onChange={ (event: object) => processFields(user, { email: event.target.value })}
      />
      <Input
        placeholder={'Password'}
        value={ user.password }
        type={'password'}
        // @ts-ignore
        onChange={ (event: object) => processFields(user, { password: event.target.value } )}
      />
      <Button
        variant={ 'contained' }
        onClick={ () => {
           login(user)
        }}
      />
    </Container>
  )
}

import { APP_PROP_TYPE } from '../constants';
Login.propTypes = APP_PROP_TYPE

export default Login