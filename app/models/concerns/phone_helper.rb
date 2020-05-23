require 'active_support/concern'

module PhoneHelper
  extend ActiveSupport::Concern

  included do
    before_validation :format_phone_number, on: [:create, :update]
    validates :phone_number, phone: true

    def format_phone_number
      self.phone_number = Phonelib.parse(phone_number)
    end
  end

  module ClassMethods
    def format_phone_number(phone_number)
      Phonelib.parse(phone_number)
    end
  end
end
