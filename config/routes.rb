Rails.application.routes.draw do
  root 'welcome#index'

  post 'create_comment', to: 'welcome#create_comment'

  namespace :api do
    resources :features, only: [:index, :create] do
      resources :comments, only: [:create]
    end
  end
end
