class LoginFailure < Devise::FailureApp
  def http_auth_body
    {
      errors: [
        {
          status: '400',
          title: 'Bad Request',
          detail: { login: [i18n_message] },
          code: '100'
        }
      ],
      status: :bad_request
    }.to_json
  end
end
