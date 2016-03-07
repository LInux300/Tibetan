// $(function() {
//   var $yeti = $('#yeti');
//   var $transitionList = $('#transitionList');
//
//   $('#transitioner').click(function() {
//     MotionUI.animateIn($yeti, $transitionList.val());
//   });
// });

// $(document).ready(function() {
// });

// jQuery(function(){
// });

// $("#owl-example").owlCarousel();
var owl = $("#owl-example");
owl.owlCarousel({
    // navigation : true
});

// $('div.slideToggle a').unbind('click').click(function(){
$( "#contact_us" ).click(function(event) {
  $( "#footer_contact_us" ).slideToggle("slow", "swing")
});


    // function toogleDiv(div) {
    //   console.log(div);
    //   document.getElementById(div).toogle();
    // }
