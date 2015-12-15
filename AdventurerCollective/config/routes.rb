Rails.application.routes.draw do
  resources :users, only: [:create, :new]
  resources :sessions, only: [:create, :new, :destroy]

  root to: 'sessions#new'
end
