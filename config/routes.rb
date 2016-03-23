Rails.application.routes.draw do

  match '/imagination',     to: 'imagination#index', via: 'post'
  resources "imagination", only: [:index]

  resources :contact_us
  resources :survey_answers
  match '/dashboard',     to: 'dashboard#index', via: 'post'
  resources "dashboard", only: [:index]

  match '/examination',     to: 'examination#index', via: 'post'
  resources "examination", only: [:index]

  match '/nutrition',     to: 'nutrition#index', via: 'post'
  resources "nutrition", only: [:index]

  # get 'dashboard/index'
  # get 'nutrition/index'
  # get 'examination/index'

  # devise_for :admins
  devise_for :admins, controllers: { registrations: "registrations"}

  devise_for :users
  #devise_for :users, path: "auth", path_names: { sign_in: 'login', sign_out: 'logout', password: 'secret', confirmation: 'verification', unlock: 'unblock', registration: 'register', sign_up: 'cmon_let_me_in' }

  # This line mounts Refinery's routes at the root of your application.
  # This means, any requests to the root URL of your application will go to Refinery::PagesController#home.
  # If you would like to change where this extension is mounted, simply change the
  # configuration option `mounted_path` to something different in config/initializers/refinery/core.rb
  #
  # We ask that you don't use the :as option here, as Refinery relies on it being the default of "refinery"
  mount Refinery::Core::Engine, at: Refinery::Core.mounted_path

  # You can have the root of your site routed with "root"
  root 'welcome#index'

  devise_scope :user do
    get "sign_in", to: "devise/sessions#new"
    get "sign_out", to: "devise/sessions#destroy"
  end

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
