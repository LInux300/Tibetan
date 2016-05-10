require 'test_helper'

class UserMailerTest < ActionMailer::TestCase
  test "user_reset_password" do
    mail = UserMailer.user_reset_password
    assert_equal "User reset password", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
