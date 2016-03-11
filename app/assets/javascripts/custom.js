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
  console.log('external_linkssdfsdf');
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
