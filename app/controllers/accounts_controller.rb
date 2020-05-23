class AccountsController < ApplicationController
  before_action :set_account, only: [:show, :edit, :update, :destroy]
  before_action :require_privileged

  # GET /accounts
  # GET /accounts.json
  def index
    if current_user.admin?
      @accounts = Account.all
    else
      @accounts = current_user.accounts
    end
  end

  # GET /accounts/1
  # GET /accounts/1.json
  def show
  end

  # GET /accounts/new
  def new
    @account = Account.new
  end

  # GET /accounts/1/edit
  def edit
  end

  # POST /accounts
  # POST /accounts.json
  def create
    @account = Account.new(account_params)

    @account.sales_associate = current_user
    respond_to do |format|
      if @account.save
        format.html { redirect_to @account, notice: 'Account was successfully created.' }
        format.json { render :show, status: :created, location: @account }
      else
        format.html { render :new }
        format.json { render json: @account.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /accounts/1
  # PATCH/PUT /accounts/1.json
  def update
    respond_to do |format|
      if @account.update(account_params)
        format.html { redirect_to @account, notice: 'Account was successfully updated.' }
        format.json { render :show, status: :ok, location: @account }
      else
        format.html { render :edit }
        format.json { render json: @account.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /accounts/1
  # DELETE /accounts/1.json
  def destroy
    @account.destroy
    respond_to do |format|
      format.html { redirect_to accounts_url, notice: 'Account was successfully destroyed.' }
      format.json { head :no_content }
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
