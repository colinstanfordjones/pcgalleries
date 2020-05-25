require 'rails_helper'

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

RSpec.describe '/api/v1/users', type: :request do
  login_user
  # User. As you add validations to user, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    {
      handle: "Second",
      email: "test1@test.com",
      password: "newpass",
      password_confirmation: "newpass"

    }
  }

  let(:invalid_attributes) {
    {
      email: "test1@test.com",
      password: "invalid",
      password_confirmation: "newpass"
    }
  }

  describe 'GET /index' do
    it 'renders a successful response' do
      get users_url, as: :json
      expect(response).to be_successful
    end
  end

  describe 'GET /show' do
    it 'renders a successful response' do
      get user_url(@user), as: :json
      expect(response).to be_successful
    end
  end

  describe 'PATCH /update' do
    context 'with valid parameters' do
      it 'updates the requested user' do
        patch user_url(@user),
              params: { user: valid_attributes }, as: :json
        @user.reload
        expect(@user.email).to eq(valid_attributes[:email])
        expect(@user.password).to eq(valid_attributes[:password])
      end

      it 'renders a JSON response with the user' do
        patch user_url(@user),
              params: { user: valid_attributes }, as: :json
        expect(response).to have_http_status(:ok)
        expect(response.content_type).to eq('application/json; charset=utf-8')
      end
    end

    context 'with invalid parameters' do
      it 'renders a JSON response with errors for the user' do
        User.create(valid_attributes)
        patch user_url(@user),
              params: { user: invalid_attributes }, as: :json
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json; charset=utf-8')
      end
    end
  end
end
