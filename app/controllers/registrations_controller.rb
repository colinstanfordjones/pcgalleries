class RegistrationsController < Devise::RegistrationsController
  respond_to :json

  def create
    build_resource(sign_up_params)

    resource.save
    render_resource(resource)
  end

  private
  # Only allow a list of trusted parameters through.
  # Name of the method is specific to Devise.
  def sign_up_params
    params.require(:user).permit(:email, :handle, :password)
  end
end
