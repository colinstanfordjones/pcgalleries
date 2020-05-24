require 'twilio-ruby'
require 'securerandom'

class StaticController < ActionController::Base
  before_action :setup_twilio
  
  def index
  end

  private
  def setup_twilio
    if current_user && current_user.email
      @client_name = current_user.email.gsub(/[^0-9A-Za-z]/, '')
    else
      @client_name = SecureRandom.uuid
    end

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
end
