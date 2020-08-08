Rails.application.routes.draw do
  
  
  resources :codes
  resources :tags
  resources :categories
  get 'home/index'
  devise_for :users
  # You have to create home controller with index action
  root to: "home#index"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
