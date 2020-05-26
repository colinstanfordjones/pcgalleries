import React from "react"

import createReactClass from 'create-react-class'

import { Container, Button } from '@material-ui/core';

const Twilio = require('twilio-client');

const LogBox = (props) => {
  render() {
    return (
      <Container>
        <div className="log">{props.text}</div>
        <p>{props.smallText}</p>
      </Container>
    );
  }
});

const Dial = (props) => {
  render() {
    return (
      <Button onClick={props.handleOnClick}>
        Dial: {props.phoneNumber}
      </Button>
    );
  }
});

const EndCall = (props) => {
  render() {
    return (
      <Button
        color={props.muted ? 'secondary': 'primary'}
        onClick={props.handleOnClick}
      >
        End Call
      </Button>
    );
  }
});

const MuteButton = () => {
  render() {
    return (
      <Button
        color={this.props.muted ? 'primary': 'secondary'}
        onClick={this.props.handleOnClick}
      >
        Mute
      </Button>
    );
  }
});

const Voice = ({ user }) => {
  getInitialState() {
    return {
      muted: false,
      status: 'Connecting...',
      onPhone: false,
      phoneNumber: user.phoneNumber,
      agent: user.agent,
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

  },

  render() {
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
}

export default Voice
