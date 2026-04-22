Rails.application.routes.draw do
  root "pages#home"

  get "about", to: "pages#about"
  get "menu", to: "pages#menu"
  get "contact", to: "pages#contact"

  resources :contact_messages, only: [:create]
end