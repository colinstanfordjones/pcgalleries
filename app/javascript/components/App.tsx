import * as React from 'react';

import { Provider } from 'react-redux';

import Wrapper from '../container'
import Store from '../store'

class App extends React.Component {
  render () {
    return (
      <Provider store={Store}>
        <Wrapper/>
      </Provider>
    )
  }
}

import { APP_PROP_TYPE } from '../constants';
// @ts-ignore
App.propTypes = APP_PROP_TYPE

export default App
