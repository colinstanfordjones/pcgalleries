require 'twilio-ruby'

class CallsController < ApplicationController
  before_action :authenticate_user!, only: [:index, :edit, :update, :show]
  before_action :set_call, only: [:show, :edit, :create, :update]
  before_action :initialize_client

  # GET /calls
  def index
    dial
    render html: 'dialing'
  end

  # GET /calls/1.json
  def show
  end

  # POST /calls.xml
  def create
    twiml = Twilio::TwiML::VoiceResponse.new do |r|
      r.dial(number: call_params["phone"], caller_id: User.agent_number(call_params["agent"]))
    end

    render xml: twiml.to_s
  end

  # PATCH/PUT /calls/1.json
  def update
    respond_to do |format|
      if true # @call.update(call_params)
        format.json { render :show, status: :ok, location: @call }
      else
        format.json { render json: @call.errors, status: :unprocessable_entity }
      end
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_call
    @call = nil # Call.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def call_params
    call_params = %I[
      id 
      AccountSid 
      ApiVersion 
      ApplicationSid 
      CallSid 
      CallStatus 
      Called 
      Caller 
      Direction 
      From 
      To 
      phone 
      agent
    ]
    params.permit(*call_params)
  end

  def dial
    @client.calls.create(twiml: "
        <Response>
          <Dial><Client>#{@client_name}</Client></Dial>
        </Response>",
      to: '+14152400492',
      from: '+14152400492'
    )
  end

  def initialize_client
    if user_signed_in?
      @client_name = current_user.email.gsub(/[^0-9A-Za-z]/, '')
    else
      @client_name = SecureRandom.uuid
    end

    @client = Twilio::REST::Client.new(ENV['ACCOUNT_SID'], ENV['SID_AUTH_TOKEN'])
  end
end
