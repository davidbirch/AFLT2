AFLT2::Application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :posts
    end
  end
  root "pages#home"
end
