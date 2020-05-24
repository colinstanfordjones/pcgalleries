require 'rails_helper'

RSpec.describe 'POST /api/v1/login', type: :request do
  let(:user) { FactoryBot.create(:user) }
  let(:url) { '/api/v1/login' }
  let(:params) do
    {
      user: {
        email: user.email,
        password: user.password
      }
    }
  end

  context 'when params are correct' do
    before do
      user.save
      post url, params: params
    end

    it 'returns 200' do
      expect(response).to have_http_status(200)
    end

    it 'returns JTW token in authorization header' do
      expect(response.headers['Authorization']).to be_present
    end

    it 'returns valid JWT token' do
      token_from_request = response.headers['Authorization'].split(" ").last
      decoded_token = JWT.decode(token_from_request, ENV["DEVISE_JWT_SECRET_KEY"], true)

      expect(decoded_token[0]["sub"]).to be_present
    end
  end

  context 'when login params are incorrect' do
    before do
      user.save
      post url
    end

    it 'returns unathorized status' do
      expect(response.status).to eq 401
    end

    it 'returns validation errors' do
      expect(response.body).to match_schema('api_error')
    end
  end
end

RSpec.describe 'DELETE /api/v1/logout', type: :request do
  let(:url) { '/api/v1/logout' }

  it 'returns 204, no content' do
    delete url
    expect(response).to have_http_status(204)
  end
end
