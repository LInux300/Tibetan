class UserMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.user_reset_password.subject
  #
  def user_reset_password
    @greeting = "Hi"

    mail to: "to@example.org"
  end

  # def reset_password_instructions
  #   # devise method
  # end

end
