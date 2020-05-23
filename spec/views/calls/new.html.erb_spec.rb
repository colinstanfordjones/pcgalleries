require 'rails_helper'

RSpec.describe "calls/new", type: :view do
  before(:each) do
    assign(:call, Call.new())
  end

  it "renders new call form" do
    render

    assert_select "form[action=?][method=?]", calls_path, "post" do
    end
  end
end
