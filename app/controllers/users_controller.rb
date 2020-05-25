class UsersController < ApplicationController
  before_action :authenticate_user!

  before_action :set_user, only: [:show, :update]
  before_action :user_params, only: [:update]

  # GET /users.json
  def index
    @user = User.find(current_user.id)
    render :show, status: :ok, location: @user
  end

  # GET /users/1.json
  def show
    render :show, status: :ok, location: @user
  end

  # PATCH/PUT /users/1.json
  def update
    @user = current_user

    if @user.update(params[:user])
      bypass_sign_in(@user, scope: :user)
      render :show, status: :ok, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id].to_i)
  end

  # Only allow a list of trusted parameters through.
  def user_params
    params.require(:user).permit(:handle, :email, :password, :password_confirmation)

    if params[:user][:password_confirmation].blank?
      params.require(:user).delete(:password)
      params.require(:user).delete(:password_confirmation)
    elsif params[:user][:password] != params[:user][:password_confirmation]
      params.require(:user).delete(:password)
      params.require(:user).delete(:password_confirmation)
    else
      params.require(:user).delete(:password_confirmation)
    end
  end
end
