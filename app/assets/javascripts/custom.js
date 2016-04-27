
// -----------------------------------------------------------------------------
// contact us
// -----------------------------------------------------------------------------
$( "#contact_us_form" ).submit(function(event) {
  // Stop form from submitting normally
  event.preventDefault();

  var $form = $(this),
    // term = $form.find("input[name='email']").val(),
    email = $form.find("input[id='email']").val(),
    message = $form.find("textarea[id='message']").val(),
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
  console.log('external_links');
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
//  footer
// -----------------------------------------------------------------------------

// $('div.slideToggle a').unbind('click').click(function(){
$("#contact_us").click(function(event) {
  $("#footer_contact_us").slideToggle("slow", "swing")
});
