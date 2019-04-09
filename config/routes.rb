Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
 
  namespace :api do
    resources :posts do
      resources :answers 
    end
  end

end
