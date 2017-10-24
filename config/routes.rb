Rails.application.routes.draw do
  root "static_pages#index"

  namespace :api do
    namespace :v1 do
      get "user", to: "api#user"
    end
  end

  get "*path", to: "static_pages#index"
end
