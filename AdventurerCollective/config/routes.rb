Rails.application.routes.draw do
  resources :users, only: [:create, :new, :show]
  resource :session, only: [:create, :new, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :adventures
  end

  root to: 'sessions#new'
end
