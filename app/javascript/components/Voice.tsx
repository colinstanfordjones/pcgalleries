import React from "react"

import { Container, Button } from '@material-ui/core';

const LogBox = ( text: any ) => {
  return (
    <Container>
      {text}
    </Container>
  );
}

const Dial = ( handleOnClick: any, number: string ) => {
  return (
    <Button onClick={ () => {
      handleOnClick(number)
     }}>
      Dial: {number}
    </Button>
  );
}

const EndCall = ( handleOnClick: any ) => {
  return (
    <Button
      onClick={ () => {
        handleOnClick()
      }}
    >
      End Call
    </Button>
  );
}

const MuteButton = ( handleOnClick: any ) => {
  return (
    <Button
      onClick={ () => {
        handleOnClick()
      }}
    >
      Mute
    </Button>
  );
}

const Voice = ({ phone, phoneNumber, handleToggleMute, handleEndConnection, handleDial }) => {
  return (
    <Container>
      { phone.onPhone ? <MuteButton handleOnClick={handleToggleMute} /> : null }
      { phone.onPhone ? <EndCall handleOnClick={handleEndConnection} /> : <Dial handleOnClick={handleDial} phoneNumber={phoneNumber} /> }
      <LogBox text={phone.status}/>
    </Container>
  );
}

export default Voice
