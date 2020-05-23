require 'rails_helper'

RSpec.describe "calls/edit", type: :view do
  before(:each) do
    @call = assign(:call, Call.create!())
  end

  it "renders the edit call form" do
    render

    assert_select "form[action=?][method=?]", call_path(@call), "post" do
    end
  end
end
