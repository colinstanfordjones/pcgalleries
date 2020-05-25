class RegistrationsController < Devise::SessionsController
  respond_to :json

  def create
    @user = User.new(user_params)

    if @user.save
      # auth_options should have `scope: :api_user`
      resource = warden.authenticate!(auth_options)
      if resource.blank?
        render status: 401, 
                json: { response: "Access denied." } and return
      end

      sign_in(resource_name, resource)
      respond_with resource, location:
        after_sign_in_path_for(resource) do |format|
          format.json { render json: @user.to_json }
      end
    else
      render json: {
        errors: [
          {
            status: '400',
            title: 'Bad Request',
            detail: { registration: @user.errors },
            code: '100'
          }
        ]
      }.to_json, status: :bad_request
    end
  end

private
  def current_token
    request.env['warden-jwt_auth.token']
  end

  # Only allow a list of trusted parameters through.
  # Name of the method is specific to Devise.
  # Only allow a list of trusted parameters through.
  def user_params
    params.require(:user).permit(:handle, :email, :password, :password_confirmation)
  end
end
