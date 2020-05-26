
const Twilio = require('twilio-client');

const TwilioInitialize = ( voice ) =>  {
  // Fetch Twilio capability token from our Node.js server
  Twilio.Device.setup(voice.token, { debug: true, audioConstraints: voice.audioConstraints });

  // Configure event handlers for Twilio Device
  Twilio.Device.on('disconnect', function() {
    console.log('disconnect');
    voice.setState({
      onPhone: false,
      status: 'Call ended.'
    });
  });

  Twilio.Device.on('connect', function() {
    console.log('connect');
    voice.setState({
      onPhone: true,
      status: 'Call Start.'
    });
  });

  Twilio.Device.on('incoming', function(connection) {
    console.log('incoming');
    voice.setState({
      onPhone: true,
      status: 'Incoming Call'
    });

    connection.accept(voice.audioConstraints);
  });

  Twilio.Device.on('ready', function(device) {
    console.log('ready');
    console.log(device);
    voice.setState({
      onPhone: false,
      status: 'Ready'
    });
  });

  Twilio.Device.on('offline', function(device) {
    console.log('offline');
    console.log(device);
    voice.setState({
      onPhone: false,
      status: 'Disconnected'
    });
  });
}

// Handle Dial
const handleDial = (voice, user) => {
  Twilio.Device.connect({
    phone: user.phoneNumber,
    agent: user.agent
  }, voice.audioConstraints);
}

// Handle muting
const handleToggleMute = (voice) =>  {
  const muted = !voice.muted;

  voice.setState({muted: muted});
  Twilio.Device.activeConnection().mute(muted);
}

// Handle muting
const handleEndConnection = () => {
  Twilio.Device.disconnectAll();
}
