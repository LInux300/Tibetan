class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  layout :layout_by_resource


  def get_user_info
    user = current_user ? current_user : nil
    Rails.logger.debug(user.inspect)
    user = current_user ? User.find(current_user.id) : nil
    render json: user, status: :ok
  end

  protected

  def layout_by_resource
    if devise_controller?
      "simple"
    else
      "application"
    end
  end

end
