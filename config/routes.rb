Rails.application.routes.draw do
  devise_for :users
  resources :calls
  resources :accounts

  root to: "accounts#index"
end
