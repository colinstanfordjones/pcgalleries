require 'rails_helper'

RSpec.describe "calls/show", type: :view do
  before(:each) do
    @call = assign(:call, Call.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
