Rails.application.routes.draw do
  resources :users, only: [:create, :new]
  resources :users, defaults: {format: :json}, only: :show

  resource :session, only: [:create, :new, :destroy]
  resources :current_user, defaults: {format: :json}, only: :index

  namespace :api, defaults: {format: :json} do
    resources :adventures do
      resources :images, only: [:create, :show, :index]
    end
    resources :user_adventures, only: [:create, :index]
  end

  root 'static_pages#root'
end
