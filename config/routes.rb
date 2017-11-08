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
      resources :quests, only: [:index, :show, :create]
      
      get "/users/:login/quests" => "quests#quest_log"
      get "/quests/:id/accept" => "quests#accept"
      get "/quests/:id/abandon" => "quests#abandon"

      get "/users/:login/achievements" => "achievements#show"
      get "/user" => "api#user"

      get "/repos" => "repositories#index"
      get "/repos/:repo_slug/webhook" => "repositories#webhook"
      post "/repos/:repo_slug/link" => "repositories#link"
      post "/repos/:repo_slug/unlink" => "repositories#unlink"

      get "*path" => "api#error"
    end
  end

  get "*path" => "static_pages#index"
end
