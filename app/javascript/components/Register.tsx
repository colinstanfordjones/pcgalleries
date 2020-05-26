import React from 'react'

import {  Button, Input, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Register = ({ user, processFields, createUser })  => {
  const styles = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Input
          value={user.handle}
          // @ts-ignore
          onChange={ (event: object) => processFields(user, { handle: event.target.value })}
          placeholder={'Name'}
        />
      </Grid>
      <Grid item xs={12}>
        <Input
          value={user.email}
          // @ts-ignore
          onChange={ (event: object) => processFields(user, { email: event.target.value })}
          placeholder={'Email'}
        />
      </Grid>
      <Grid item xs={12}>
        <Input
          value={user.password}
          // @ts-ignore
          onChange={ (event: object) => processFields(user, { password: event.target.value })}
          placeholder={'Password'}
          type={'password'}
        />
      </Grid>
      <Grid item xs={12}>
        <Input
          value={user.password_confirmation}
          // @ts-ignore
          onChange={ (event: object) => processFields(user, { password_confirmation: event.target.value })}
          placeholder={'Confirm Password'}
          type={'password'}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant='contained'
          onClick={ () => {
            createUser(user)
          }}>
          Register
        </Button>
      </Grid>
    </Grid>
  )
}

import { APP_PROP_TYPE } from '../constants';
Register.propTypes = APP_PROP_TYPE

export default Register