class User < ApplicationRecord
  validates :email, uniqueness: true

  devise :database_authenticatable,
         :registerable, :recoverable, :rememberable,
         :jwt_authenticatable,
         jwt_revocation_strategy: JwtBlacklist

  has_many :accounts, :primary_key => "id", :foreign_key => "sales_associate_id", :class_name => "Account"

  enum role: { user: 'user', sales: 'sales', admin: 'admin' }

  after_initialize :set_default_role, if: :new_record?

  def self.agent_number(_ = nil)
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

  def update(params)
    reset_password(params[:password], params[:password_confirmation])
    super *params
  end
end
