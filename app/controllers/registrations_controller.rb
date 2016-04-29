class RegistrationsController < Devise::RegistrationsController
  # https://github.com/plataformatec/devise/wiki/How-To:-Set-up-devise-as-a-single-user-system
  before_action :one_admin_registered?

  # def sign_up_params
  #   devise_parameter_sanitizer.sanitize(:sign_up)
  # end

  # def sign_up_params
  #   params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
  # end

  # def account_update_params
  #   params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :current_password)
  # end
  #
  # def account_show_params
  #   params.require(:user).permit(:email, :sign_in_count, :current_sign_in_at)
  # end


  protected

  def one_admin_registered?
    if ((Admin.count == 1) & (admin_signed_in?))
      redirect_to root_path
    elsif Admin.count == 1
      redirect_to new_admin_session_path
    end
  end

end
