
// -----------------------------------------------------------------------------
// header
// -----------------------------------------------------------------------------

$("#h_user_account").click(function(event) {
  $(".alert-box").remove();
  var current_user = getUserInfo();
});

$("#user_account_edit_back").click(function(event) {
  window.location.href = '/';
  // $(".alert-box").remove();
  // var current_user = getUserInfo();
  // $('#user_account').addClass('show');
});


function getUserInfo() {
  url = '/get_user_info';
  $.ajax({
    type: "post",
    url: url,
  }).done(function(current_user) {
    console.log(current_user)
    $("#user_account_created_at").html("<b>" + current_user.created_at + "</b>");
    $("#user_account_updated_at").html("<b>" + current_user.updated_at + "</b>");
    $("#user_account_email").html("<b>" + current_user.email + "</b>");
    $("#user_account_first_name").html("<b>" + current_user.first_name + "</b>");
    $("#user_account_last_name").html("<b>" + current_user.last_name + "</b>");
    $("#user_account_encrypted_password").html("<b>" + current_user.encrypted_password + "</b>");
    $("#user_account_subscribed").html("<b>" + current_user.subscribed + "</b>");
    $("#user_account_sign_in_count").html("<b>" + current_user.sign_in_count + "</b>");
    $("#user_account_current_sign_in_at").html("<b>" + current_user.current_sign_in_at + "</b>");
    $("#user_account_last_sign_in_at").html("<b>" + current_user.last_sign_in_at + "</b>");
    $("#user_account").slideToggle("slow", "swing");
  }).fail(function() {
    alert('Error occured');
  });
}

// -----------------------------------------------------------------------------
// user_account
// -----------------------------------------------------------------------------
function userAccountEdit() {
  window.location.href = '/users/edit';
}
function userAccountSubscribe() {
  window.location.href = '/subscribers/new';
}

// -----------------------------------------------------------------------------
// contact us
// -----------------------------------------------------------------------------
$("#contact_us_form").submit(function(event) {
  // Stop form from submitting normally
  event.preventDefault();

  var $form = $(this),
    // term = $form.find("input[name='email']").val(),
    email = $form.find("input[id='contact_us_email']").val(),
    message = $form.find("textarea[id='contact_us_message']").val(),
    url = $form.attr("action");

  // Send the data using post
  if (!$.isEmptyObject(email)) {
    var posting = $.post(url, {contact_u: {email: email, message: message}});

    posting.done(function(data) {
      $('#contact_us_form').hide();
      // var content = $(data).find("#contact_response");
      var content = I18n.t('view.coutact_us.thank_you');
      $("#contact_response").empty().append(content);
    });
  }

});

// -----------------------------------------------------------------------------
// foundation
// -----------------------------------------------------------------------------
//  http://foundation.zurb.com/sites/docs/javascript.html#initializing



// -----------------------------------------------------------------------------
//  slider owl
// -----------------------------------------------------------------------------
// $("#owl-example").owlCarousel();
var owl = $("#owl-example");
owl.owlCarousel({
    // navigation : true
});


// -----------------------------------------------------------------------------
//  footer2
// -----------------------------------------------------------------------------
$("#f_external_links").click(function(event) {
  $("#external_links").slideToggle("slow", "swing");
  // console.log('external_links');
});
$("#f_info").click(function(event) {
  $("#info").slideToggle("slow", "swing")
});
$("#f_how_we_work").click(function(event) {
  $("#how_we_work").slideToggle("slow", "swing")
});
$("#f_faq").click(function(event) {
  $("#faq").slideToggle("slow", "swing")
});



// -----------------------------------------------------------------------------
//  user edit
// -----------------------------------------------------------------------------

$("#f_user_account_cancel_my_accout").click(function(event) {
  $("#user_account_cancel_my_accout").slideToggle("slow", "swing")
});

// -----------------------------------------------------------------------------
//  footer
// -----------------------------------------------------------------------------

// $('div.slideToggle a').unbind('click').click(function(){
$("#contact_us").click(function(event) {
  $("#footer_contact_us").slideToggle("slow", "swing")
});
