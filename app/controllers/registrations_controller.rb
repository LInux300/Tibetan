class RegistrationsController < Devise::RegistrationsController
  # https://github.com/plataformatec/devise/wiki/How-To:-Set-up-devise-as-a-single-user-system

  #  admin.rb remove registerable
  # before_action :one_admin_registered?

  protected

  # def update_resource(resource, params)
  #   resource.update_without_password(params)
  # end


  def after_sign_up_path_for(resource)
    '/subscribers/new'
  end

  def one_admin_registered?
    if ((Admin.count == 1) & (admin_signed_in?))
      redirect_to root_path
    elsif Admin.count == 1
      redirect_to new_admin_session_path
    end
  end

  # def sign_up_params
  #   params.require(:user).permit(:first_name, :middle_name, :last_name, :email, :password, :password_confirmation, :loginable_type, :student => [:reg_number], :professor => [:degree])
  # end

  def account_update_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :current_password)
  end
end
