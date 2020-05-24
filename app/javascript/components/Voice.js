import React from "react"
import PropTypes from "prop-types"
import createReactClass from 'create-react-class'

import { Button } from '@material-ui/core';

const Twilio = require('twilio-client');

var LogBox = createReactClass({
  render: function() {
    return (
      <div>
        <div className="log">{this.props.text}</div>
        <p>{this.props.smallText}</p>
      </div>
    );
  }
});

var Dial = createReactClass({
  render: function() {
    return (
      <Button color='primary' onClick={this.props.handleOnClick}>
        Dial: {this.props.phoneNumber}
      </Button>
    );
  }
});

var EndCall = createReactClass({
  render: function() {
    return (
      <Button color={this.props.muted ? 'secondary': 'primary'} onClick={this.props.handleOnClick}>
        End Call
      </Button>
    );
  }
});

var MuteButton = createReactClass({
  render: function() {
    return (
      <Button color={this.props.muted ? 'primary': 'secondary'} onClick={this.props.handleOnClick}>
        Mute
      </Button>
    );
  }
});

var VoiceApp = createReactClass({
  getInitialState() {
    return {
      muted: false,
      status: 'Connecting...',
      onPhone: false,
      phoneNumber: this.props.phoneNumber,
      agent: this.props.agent,
      countryCode: '1',
      audioConstraints: null,
      isValidNumber: false
    }
  },

  // Initialize after component creation
  componentDidMount() {
    const self = this;
    var audioConstraints = navigator.mediaDevices.getUserMedia({
      audio: true
    }).then(stream => self.audioElement.srcObject = stream)
    .catch(err => console.log(err.name + ": " + err.message));

    self.setState({
      audioConstraints: audioConstraints,
    });

    // Fetch Twilio capability token from our Node.js server
    Twilio.Device.setup(self.props.token, { debug: true, audioConstraints: self.state.audioConstraints });


    // Configure event handlers for Twilio Device
    Twilio.Device.on('disconnect', function() {
      self.setState({
        onPhone: false,
        status: 'Call ended.'
      });
    });

    Twilio.Device.on('connect', function() {
      self.setState({
        onPhone: true,
        status: 'Call Start.'
      });
    });

    Twilio.Device.on('incoming', function(connection) {
      self.setState({
        onPhone: true,
        status: 'Incoming Call'
      });

      connection.accept(self.state.audioConstraints);
    });

    Twilio.Device.on('ready', function(device) {
      self.setState({
        onPhone: false,
        status: 'Ready'
      });
    });

    Twilio.Device.on('offline', function(device) {
      console.log(device);
      self.setState({
        onPhone: false,
        status: 'Disconnected'
      });
    });
  },

  // Handle Dial
  handleDial() {
    Twilio.Device.connect({
      phone: this.state.phoneNumber,
      agent: this.state.agent
    }, this.state.audioConstraints);
  },

  // Handle muting
  handleToggleMute() {
    var muted = !this.state.muted;

    this.setState({muted: muted});
    Twilio.Device.activeConnection().mute(muted);
  },

  // Handle muting
  handleEndConnection() {
    Twilio.Device.disconnectAll();
  },

  render() {
    var self = this;

    return (
      <div>
        <div className="controls">
          { this.state.onPhone ? <MuteButton handleOnClick={this.handleToggleMute} muted={this.state.muted} /> : null }
          { this.state.onPhone ? <EndCall handleOnClick={this.handleEndConnection} /> : <Dial handleOnClick={this.handleDial} phoneNumber={this.state.phoneNumber} /> }
        </div>

        <LogBox text={this.state.status}/>
      </div>
    );
  }
});

class Voice extends React.Component {
  render () {
    return (
      <React.Fragment>
        <VoiceApp token={this.props.token} phoneNumber={this.props.phoneNumber} agent={this.props.agent} />
      </React.Fragment>
    );
  }
}

Voice.propTypes = {
  token: PropTypes.string,
  phoneNumber: PropTypes.string,
  agent: PropTypes.string
};

export default Voice
