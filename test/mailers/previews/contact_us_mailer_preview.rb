# Preview all emails at http://localhost:3000/rails/mailers/contact_us_mailer
class ContactUsMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/contact_us_mailer/new_contact_us_2

  def new_contact_us
    contact_us = ContactU.last
    ContactUsMailer.new_contact_us(contact_us)
  end

end
