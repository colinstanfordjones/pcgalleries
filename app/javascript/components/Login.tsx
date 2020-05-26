import React from 'react'

import { Button, Input, Container } from '@material-ui/core'
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

const Login = ({ user, processFields, login }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Input
          placeholder={'Email'}
          value={ user.email }
          // @ts-ignore
          onChange={ (event: object) => processFields(user, { email: event.target.value })}
        />
      </Grid>
      <Grid item xs={12}>
        <Input
          placeholder={'Password'}
          value={ user.password }
          type={'password'}
          // @ts-ignore
          onChange={ (event: object) => processFields(user, { password: event.target.value } )}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant={ 'contained' }
          onClick={ () => {
            login(user)
          }}>
          Login
        </Button>
      </Grid>
    </Grid>
  )
}

import { APP_PROP_TYPE } from '../constants';
Login.propTypes = APP_PROP_TYPE

export default Login