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
//  footer
// -----------------------------------------------------------------------------

// $('div.slideToggle a').unbind('click').click(function(){
$( "#contact_us" ).click(function(event) {
  $( "#footer_contact_us" ).slideToggle("slow", "swing")
});



// function toogleDiv(div) {
//   console.log(div);
//   document.getElementById(div).toogle();
// }
// -----------------------------------------------------------------------------
//  20 Attributes
// -----------------------------------------------------------------------------
var attributes = [
  {
    "name" : I18n.t('attributes.1_atr.name'),
    'effects': [
      {"element": I18n.t('attributes.1_atr.1_element'),
        "effect": I18n.t('attributes.1_atr.1_effect'),
      'movement': I18n.t('attributes.1_atr.1_movement')},
      {"element": I18n.t('attributes.1_atr.2_element'),
        "effect": I18n.t('attributes.1_atr.2_effect'),
      'movement': I18n.t('attributes.1_atr.2_movement')},
      {"element": I18n.t('attributes.1_atr.3_element'),
        "effect": I18n.t('attributes.1_atr.3_effect'),
      'movement': I18n.t('attributes.1_atr.3_movement')},
    ]
  },
  {
    "name" : "ho2",
    'effects': [
      {"element":"Air", "effect":"Secondary", 'movement': 'Increasing'},
      {"element":"Fire", "effect":"Secondary", 'movement': 'Increasing'},
    ]
  },
];


var attributes = [];
for (i = 0; i < 2; i++) {
  attributes.push(
    {
      "name" : I18n.t('attributes.'+ i +'_atr.name'),
      'effects': [
        {"element": I18n.t('attributes.'+ i +'_atr.1_element'),
        "effect": I18n.t('attributes.'+ i +'_atr.1_effect'),
        'movement': I18n.t('attributes.'+ i +'_atr.1_movement')},
        {"element": I18n.t('attributes.'+ i +'_atr.2_element'),
        "effect": I18n.t('attributes.'+ i +'_atr.2_effect'),
        'movement': I18n.t('attributes.'+ i +'_atr.2_movement')},
        {"element": I18n.t('attributes.'+ i +'_atr.3_element'),
        "effect": I18n.t('attributes.'+ i +'_atr.3_effect'),
        'movement': I18n.t('attributes.'+ i +'_atr.3_movement')},
      ]
    }
  )
};

$.each(attributes, function(i, attribute) {
  console.log(attribute.name);
  $.each(attribute.effects, function(i2, effect) {
    console.log(effect.element);
  });
});


// -----------------------------------------------------------------------------
//
// -----------------------------------------------------------------------------
