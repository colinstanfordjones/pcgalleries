require 'rails_helper'

RSpec.describe 'POST /api/v1/signup', type: :request do
  let(:url) { '/api/v1/signup' }
  let(:params) do
    {
      user: {
        email: 'new@test.com',
        password: 'password',
        handle: 'Fake'
      }
    }
  end

  context 'when user is unauthenticated' do
    before { post url, params: params }

    it 'returns 200' do
      expect(response.status).to eq 200
    end

    it 'returns a new user' do
      expect(response.body).to match_schema('user')
    end
  end

  context 'when user already exists' do
    before do
      FactoryBot.create :user, email: params[:user][:email]
      post url, params: params
    end

    it 'returns bad request status' do
      expect(response.status).to eq 400
    end

    it 'returns validation errors' do
      expect(response.body).to match_schema('api_error')
    end
  end
end