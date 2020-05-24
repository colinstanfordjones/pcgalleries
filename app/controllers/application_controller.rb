class ApplicationController < ActionController::API
  include ActionController::MimeResponds

  def render_resource(resource)
    if resource.errors.empty?
      render json: resource
    else
      validation_error(resource)
    end
  end

  def validation_error(resource)
    render json: {
      errors: [
        {
          status: '400',
          title: 'Bad Request',
          detail: resource.errors,
          code: '100'
        }
      ]
    }, status: :bad_request
  end

  private
  def require_privileged
    redirect_to(root_path) unless user_signed_in? && current_user.privileged?
  end
end
