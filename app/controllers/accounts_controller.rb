class AccountsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_account, only: [:show, :edit, :update, :destroy]
  before_action :require_privileged

  # GET /accounts.json
  def index
    if current_user.admin?
      @accounts = Account.all
    else
      @accounts = current_user.accounts
    end
  end

  # GET /accounts/1.json
  def show
  end

  # POST /accounts.json
  def create
    @account = Account.new(account_params)

    @account.sales_associate = current_user
    respond_to do |format|
      if @account.save
        format.json { render :show, status: :created, location: @account }
      else
        format.json { render json: @account.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /accounts/1.json
  def update
    respond_to do |format|
      if @account.update(account_params)
        format.json { render :show, status: :ok, location: @account }
      else
        format.json { render json: @account.errors, status: :unprocessable_entity }
      end
    end
  end


  private
  # Use callbacks to share common setup or constraints between actions.
  def set_account
    account = Account.find(params[:id])
    redirect_to(accounts_url) unless current_user.admin? || account.sales_associate == current_user
    @account = account
  end

  # Only allow a list of trusted parameters through.
  def account_params
    params_syms = %I[
      id
      first_name
      last_name email
      phone_number
      address1
      address2
      city
      state
      zip
    ]

    params.require(:account).permit(*params_syms).reject{ |_, v| v.blank? }
  end
end
