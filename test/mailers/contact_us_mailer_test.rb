require 'test_helper'

class ContactUsMailerTest < ActionMailer::TestCase
  test "new_contact_us_2" do
    mail = ContactUsMailer.new_contact_us_2
    assert_equal "New contact us 2", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
