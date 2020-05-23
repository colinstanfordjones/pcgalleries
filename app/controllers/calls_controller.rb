require 'twilio-ruby'

class CallsController < ActionController::Base
  protect_from_forgery unless: -> { true }

  before_action :set_call, only: [:show, :edit, :update, :destroy]
  before_action :initialize_client

  # GET /calls
  # GET /calls.json
  def index
    dial
    render html: 'dialing'
  end

  # GET /calls/1
  # GET /calls/1.json
  def show
  end

  # GET /calls/new
  def new
    @call = Call.new
  end

  # GET /calls/1/edit
  def edit
  end

  # POST /calls
  # POST /calls.json
  def create
    twiml = Twilio::TwiML::VoiceResponse.new do |r|
      r.dial(number: call_params["phone"], caller_id: call_params["agent"])
    end

    render xml: twiml.to_s
  end

  # PATCH/PUT /calls/1
  # PATCH/PUT /calls/1.json
  def update
    respond_to do |format|
      if @call.update(call_params)
        format.html { redirect_to @call, notice: 'Call was successfully updated.' }
        format.json { render :show, status: :ok, location: @call }
      else
        format.html { render :edit }
        format.json { render json: @call.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /calls/1
  # DELETE /calls/1.json
  def destroy
    @call.destroy
    respond_to do |format|
      format.html { redirect_to calls_url, notice: 'Call was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_call
    @call = Call.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def call_params
    params.permit(:AccountSid, :ApiVersion, :ApplicationSid, :CallSid, :CallStatus, :Called, :Caller, :Direction, :From, :To, :phone, :agent)
  end

  def dial
    @client.calls.create(twiml: '
        <Response>
          <Dial><Client>colin</Client></Dial>
        </Response>',
      to: '+14152400492',
      from: '+14152400492'
    )
  end

  def initialize_client
    @client = Twilio::REST::Client.new(ENV['ACCOUNT_SID'], ENV['SID_AUTH_TOKEN'])
  end
end
