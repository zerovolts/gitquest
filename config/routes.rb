Rails.application.routes.draw do
  root "static_pages#index"

  get "/auth/:provider/callback" => "sessions#create"
  get "/signout" => "sessions#destroy"
  get "/current-user" => "sessions#user"

  post "/webhooks/:provider/callback" => "webhooks#callback"
  post "/webhooks" => "webhooks#create"
  get "/webhooks/repos/:repo_slug" => "webhooks#show"

  namespace :api do
    namespace :v1 do
      resources :achievements, only: [:index]
      get "/users/:login/achievements" => "achievements#show"
      get "user" => "api#user"

      get "*path" => "api#error"
    end
  end

  get "*path" => "static_pages#index"
end
