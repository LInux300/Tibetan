class ContactUsMailer < ApplicationMailer

  def new_contact_us(new_contact_us)

    @message = "#{new_contact_us.message}"
    @email = "#{new_contact_us.email}"
    @url = '/'

    mail to: new_contact_us.email,
         subject: I18n.t('email.contact_us.subject'),
        #  content_type: "text/html",
         date: Time.now
        #  template_path: 'contact_us_mailer', # folder in views where are mail templates
                                          # by default its snakifyed controller name
        #  template_name: 'new_contact_us'

    #  mail(to: contact_us.email,
    #      subject: 'Welcome to My Awesome Site') do |format|
    #        format.html
    #        format.text
    #  end
  end

end
