const initializeTwilio = () =>  {
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
  const handleDial = () => {
    Twilio.Device.connect({
      phone: this.state.phoneNumber,
      agent: this.state.agent
    }, this.state.audioConstraints);
  },

  // Handle muting
  const handleToggleMute = () =>  {
    var muted = !this.state.muted;

    this.setState({muted: muted});
    Twilio.Device.activeConnection().mute(muted);
  },

  // Handle muting
  handleEndConnection() {
    Twilio.Device.disconnectAll();
  },