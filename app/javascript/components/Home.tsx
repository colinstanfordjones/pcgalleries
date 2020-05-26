import * as React from 'react'

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Login from './Login'
import Logout from './Logout'
import Register from './Register'

import Accounts from './Accounts'
import User from './User'

import { Container } from '@material-ui/core';

import { USER_ROLE, APP_PROP_TYPE } from '../constants';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Home = ({
  user,
  accounts,
  account,
  voice,
  login,
  logout,
  createUser,
  updateUser,
  getAccounts,
  createAccount,
  updateAccount,
  processUserFields,
  processAccountFields
}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  switch (user.role) {
    case USER_ROLE.SALES :
      return (
        <Container>
          Logged In : { user.email }
          <Logout user={ user } logout={ logout } />
          <Accounts
            user={ user }
            accounts={ accounts }
            account={ account }
            getAccounts={ getAccounts }
            processFields={ processAccountFields }
            createAccount={ createAccount }
            updateAccount={ updateAccount }/>
          <User user={ user } processFields={ processUserFields } updateUser={ updateUser }/>
        </Container>
      )
    case USER_ROLE.ADMIN :
      return (
        <Container>
          Logged In : { user.email }
          <Logout user={ user } logout={ logout } />
          <Accounts
            user={ user }
            accounts={ accounts }
            account={ account }
            getAccounts={ getAccounts }
            processFields={ processAccountFields }
            createAccount={ createAccount }
            updateAccount={ updateAccount }/>
          <User user={ user } processFields={ processUserFields } updateUser={ updateUser }/>
        </Container>
      )
    case USER_ROLE.USER :
      return (
        <Container>
          Logged In : { user.email }
          <Logout user={ user } logout={ logout } />
          <User user={ user } processFields={ processUserFields } updateUser={ updateUser }/>
        </Container>
      )
    default :
      return (
        <Container>
          <AppBar position="static">
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
              <Tab label="Login" {...a11yProps(0)} />
              <Tab label="Create Account" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <Login user={ user } processFields={ processUserFields } login={ login }/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Register user={ user } processFields={ processUserFields } createUser={ createUser }/> 
          </TabPanel>
        </Container>
    )
  }
}

Home.propTypes = APP_PROP_TYPE

export default Home
