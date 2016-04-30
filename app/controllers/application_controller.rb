class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  layout :layout_by_resource


  def get_user_info
    # user = current_user ? User.find(current_user.id) : nil
    # user = current_user ? current_user : nil
    data = {
      email: current_user.email,
      created_at: current_user.created_at.strftime("%Y-%m-%d"),
      updated_at: current_user.created_at.strftime("%Y-%m-%d"),
      sign_in_count: current_user.sign_in_count,
      current_sign_in_at: current_user.current_sign_in_at.strftime("%d %b. %Y, %I:%M"),
      last_sign_in_at: current_user.last_sign_in_at.strftime("%d %b. %Y, %I:%M")
    }
    render json: data, status: :ok
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
