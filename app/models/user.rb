class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :accounts, :primary_key => "id", :foreign_key => "sales_associate_id", :class_name => "Account"

  enum role: { user: 'user', sales: 'sales', admin: 'admin' }

  after_initialize :set_default_role, if: :new_record?

  def self.phone_number(_ = nil)
    '+14152400492'
  end

  def set_default_role
    self.role ||= :user
  end

  def privileged?
    %i[admin sales].include?(self.role.to_sym)
  end

  def admin?
    %i[admin].include?(self.role.to_sym)
  end
end
