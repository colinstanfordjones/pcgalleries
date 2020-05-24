require "rails_helper"

RSpec.describe CallsController, type: :routing do
  login_user

  describe "routing" do
    it "routes to #index" do
      expect(get: "/api/v1/calls").to route_to("calls#index", "format"=>:json)
    end

    it "routes to #show" do
      expect(get: "/api/v1/calls/1").to route_to("calls#show", "format"=>:json, id: "1")
    end

    it "routes to #create" do
      expect(post: "/api/v1/calls").to route_to("calls#create", "format"=>:json)
    end

    it "routes to #update via PUT" do
      expect(put: "/api/v1/calls/1").to route_to("calls#update", "format"=>:json, id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/api/v1/calls/1").to route_to("calls#update", "format"=>:json,  id: "1")
    end
  end
end
