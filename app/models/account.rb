class Account < ApplicationRecord
  include AddressHelper
  include PhoneHelper

  has_many :notes
  belongs_to :sales_associate, :primary_key => "id", :foreign_key => "sales_associate_id", :class_name => "User"
end
