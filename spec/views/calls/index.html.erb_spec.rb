require 'rails_helper'

RSpec.describe "calls/index", type: :view do
  before(:each) do
    assign(:calls, [
      Call.create!(),
      Call.create!()
    ])
  end

  it "renders a list of calls" do
    render
  end
end
