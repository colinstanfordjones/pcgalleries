Rails.application.routes.draw do
  scope :api, defaults: { format: :json } do
    scope :v1 do
      devise_for :users,
        path: '',
        defaults: { format: :json },
        path_names: {
          sign_in: 'login',
          sign_out: 'logout',
          registration: 'signup',
          password: 'user'
        },
        controllers: {
          sessions: 'sessions',
          registrations: 'registrations',
          passwords: 'users'
        }

      resources :accounts, only: [:index, :create, :show, :update]
      resources :notes,    only: [:index, :create, :show, :update]
      resources :calls,    only: [:index, :create, :show, :update]
      resources :users,    only: [:index, :show, :update]

      resource :health,    only: %I[show]
    end
  end

  root to: "static#index"
end
