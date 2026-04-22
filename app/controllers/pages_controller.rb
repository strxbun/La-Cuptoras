class PagesController < ApplicationController
  def home
  end

  def about
  end

  def menu
  end

  def contact
    @contact_message = ContactMessage.new
  end
end