class ApplicationMailer < ActionMailer::Base
  default from: I18n.t('email.from')
  layout 'mailer'
end
