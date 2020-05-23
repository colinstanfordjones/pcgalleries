require 'twilio-ruby'

class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :authenticate_user!
  before_action :setup_twilio

  private
  def setup_twilio
    @client_name = 'colin'

    @account_sid = ENV['ACCOUNT_SID']
    @auth_token = ENV['SID_AUTH_TOKEN']
    @app_name = ENV['APP_SID']

    # set up
    token = Twilio::JWT::ClientCapability.new @account_sid, @auth_token

    # Allow incoming calls, and give the client a name.
    incoming_scope = Twilio::JWT::ClientCapability::IncomingClientScope.new @client_name
    outgoing_scope = Twilio::JWT::ClientCapability::OutgoingClientScope.new @app_name

    token.add_scope(incoming_scope)
    token.add_scope(outgoing_scope)

    @twilio_token = token.to_s
  end

  def require_privileged
  end
end
