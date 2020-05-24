 require 'rails_helper'

# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to test the controller code that
# was generated by Rails when you ran the scaffold generator.
#
# It assumes that the implementation code is generated by the rails scaffold
# generator. If you are using any extension libraries to generate different
# controller code, this generated spec may or may not pass.
#
# It only uses APIs available in rails and/or rspec-rails. There are a number
# of tools you can use to make these specs even more expressive, but we're
# sticking to rails and rspec-rails APIs to keep things simple and stable.

RSpec.describe "/api/v1/calls", type: :request do
  login_user
  # Call. As you add validations to Call, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
  }

  let(:invalid_attributes) {
  }

  describe "GET /index" do
    it "renders a successful response" do
      # get calls_url
      # expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      make_call = { id: 1 }
      get call_url(make_call)
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new Call" do
        expect {
          post calls_url, params: { call: valid_attributes }
        }.to change(Call, :count).by(0)
      end

      it "Responds with Twilio XML" do
        twiml = Twilio::TwiML::VoiceResponse.new do |r|
          r.dial( caller_id: User.agent_number())
        end

        post calls_url, params: { call: valid_attributes }
        expect(response.body).to eq(twiml.to_s)
      end
    end

    context "with invalid parameters" do
      it "does not create a new Call" do
        expect {
          post calls_url, params: { call: invalid_attributes }
        }.to change(Call, :count).by(0)
      end

      it "renders a successful response (i.e. to display the 'new' template)" do
        post calls_url, params: { call: invalid_attributes }
        expect(response).to be_successful
      end
    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      let(:new_attributes) {
        skip("Add a hash of attributes valid for your model")
      }

      it "updates the requested call" do
        make_call = { id: 1 } # Call.create! valid_attributes
        patch call_url(make_call), params: { call: new_attributes }
        call.reload
        skip("Add assertions for updated state")
      end

      it "redirects to the call" do
        make_call = { id: 1 } # Call.create! valid_attributes
        patch call_url(make_call), params: { call: new_attributes }
        call.reload
        expect(response).to redirect_to(call_url(call))
      end
    end

    context "with invalid parameters" do
      it "renders a successful response (i.e. to display the 'edit' template)" do
        make_call = { id: 1 } # Call.create! valid_attributes
        patch call_url(make_call), params: { call: invalid_attributes }
        expect(response).to be_successful
      end
    end
  end
end
