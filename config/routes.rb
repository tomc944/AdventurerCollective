Rails.application.routes.draw do
  resources :users, only: [:create, :new, :show]
  resource :session, only: [:create, :new, :destroy]
  resources :current_users, only: :index

  namespace :api, defaults: {format: :json} do
    resources :adventures
  end

  root 'static_pages#root'
end
