require 'rails_helper'

RSpec.describe '/api/v1/health', type: :request do

  describe 'HTML GET /api/v1/health' do
    let(:valid_headers) {
      {}
    }
    before do
      headers = { "ACCEPT" => "application/json" }
      get health_url, headers: headers
    end

    it 'returns 200' do
      expect(JSON.parse(response.body)).to eq({"status" => "ok"})
    end

    it 'returns 200' do
      expect(response.status).to eq 200
    end
  end
end
