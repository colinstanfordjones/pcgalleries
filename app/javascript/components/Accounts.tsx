import React from 'react'

import { Button, Input, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Fab from '@material-ui/core/Fab';
import CallSharpIcon from '@material-ui/icons/CallSharp';
import CallEndSharpIcon from '@material-ui/icons/CallEndSharp';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  }
}));

const Account = ({ account, processFields }) => {
  const classes = useStyles();
  return(<ExpansionPanel>
    <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon />}
      aria-label="Expand"
      aria-controls="additional-actions2-content"
      id={`additional-actions${account.id}-header`}
    >
      <FormControlLabel
        aria-label="Account"
        onClick={(event) => event.stopPropagation()}
        onFocus={(event) => event.stopPropagation()}
        control={<Checkbox />}
        label={ `${account.first_name}  ${account.last_name}` }
      />
      <Typography color="textSecondary">
        <Fab  variant="extended" color="secondary" aria-label="add">
          <CallSharpIcon  className={classes.extendedIcon} />
          { account.phone_number }
        </Fab>
      </Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Container>
        <Input
          placeholder={'First Name'}
          value={ account.first_name }
          // @ts-ignore
          onChange={ (event: object) => processFields(account, { first_name: event.target.value })}
        />
        <Input
          placeholder={'Last Name'}
          value={ account.last_name }
          // @ts-ignore
          onChange={ (event: object) => processFields(account, { last_name: event.target.value })}
        />
        <Input
          placeholder={'Email'}
          value={ account.email }
          // @ts-ignore
          onChange={ (event: object) => processFields(account, { email: event.target.value })}
        />
        <Input
          placeholder={'Phone Number'}
          value={ account.phone_number }
          type={'phone_number'}
          // @ts-ignore
          onChange={ (event: object) => processFields(account, { phone_number: event.target.value } )}
        />
        <Input
          placeholder={'Address 1'}
          value={ account.address1 }
          // @ts-ignore
          onChange={ (event: object) => processFields(account, { address1: event.target.value })}
        />
        <Input
          placeholder={'Address 2'}
          value={ account.address2 }
          // @ts-ignore
          onChange={ (event: object) => processFields(account, { address2: event.target.value })}
        />
        <Input
          placeholder={'City'}
          value={ account.city }
          // @ts-ignore
          onChange={ (event: object) => processFields(account, { city: event.target.value })}
        />
        <Input
          placeholder={'State'}
          value={ account.state }
          // @ts-ignore
          onChange={ (event: object) => processFields(account, { state: event.target.value })}
        />
        <Input
          placeholder={'Zip'}
          value={ account.zip }
          // @ts-ignore
          onChange={ (event: object) => processFields(account, { zip: event.target.value })}
        />
      </Container>
    </ExpansionPanelDetails>
  </ExpansionPanel>)
}


const Accounts = ({ accounts, account, getAccounts, createAccount, updateAccount, processFields }) => {
  const classes = useStyles();
  const list = Object.values(accounts);

  const listAccounts = list.map((acct: any) => {
      return(< Account processFields={ processFields } account={ acct } />)
    }
  );
  return (
    <div className={classes.root}>
      { listAccounts }
      <Button
        variant='contained'
        // @ts-ignore
        onClick={ () => 
          { getAccounts(accounts) }
        }>
        Get Accounts
      </Button>
    </div>
  );
}

import { APP_PROP_TYPE } from '../constants';
Accounts.propTypes = APP_PROP_TYPE

export default Accounts
