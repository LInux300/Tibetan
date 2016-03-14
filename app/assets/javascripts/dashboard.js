$(window).ready(function() {
    // donutChart('1_be_fit', JSON.parse(gon.last_answer_counter), 250, 400);
});


// -----------------------------------------------------------------------------
//  Tasks
// -----------------------------------------------------------------------------


// -----------------------------------------------------------------------------
//  Show Charts
// -----------------------------------------------------------------------------
var sort_by = function(field, reverse, primer) {
   var key = primer ?
       function(x) {return primer(x[field])} :
       function(x) {return x[field]};
   reverse = !reverse ? 1 : -1;
   return function (a, b) {
       return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
     }
}

function couter_all_to_json_sort(counter_all) {
  var counter_all_array = [];
  $.each(counter_all, function(answer_type, value) {
    counter_all_array.push(
      {
        'type': answer_type,
        'type_x': I18n.t('survey.0_answers_0.'+answer_type+'_type_x'),
        'value': value
    });
  });

  counter_all_array.sort(sort_by('value', true, parseInt));
  // counter_all_array.sort(sort_by('name', false, function(a){return a.toUpperCase()}));
  return counter_all_array
};

function showCharts(counter_all) {
  donutChart('1_be_fit', JSON.parse(gon.last_answer_counter), 250, 400);
  donutChart('2_be_fit', counter_all, 250, 400);
};

function typeToSmall(counter_all_min_max) {
  // min value
  pieChartSingle('3_be_fit', counter_all_min_max[2], 230, 200);
  dec_inc = decreaseIncrease(getJsonFromAttributes(), counter_all_min_max[2].type_x);

  var inner_html = '<p><strong>'
                   + I18n.t('view.attributes.helps_to_increase')
                   + '</strong><ul>'
  $.each(dec_inc.increase, function(i2, attribute) {
    // console.log(attribute.name + ': ' + attribute.effect)
    inner_html += '<li>' + attribute.name + ' - ' + attribute.effect + ' effect</li>'
  });
  inner_html += '</ul></p>'
  $( "#3_be_fit_a" ).append(inner_html);
};

function typeToBig(counter_all_min_max) {
  // max value
  pieChartSingle('4_be_fit', counter_all_min_max[0], 230, 200);
  dec_inc = decreaseIncrease(getJsonFromAttributes(), counter_all_min_max[0].type_x);
  var inner_html = '<p><strong>'
                   + I18n.t('view.attributes.helps_to_decrease')
                   + '</strong><ul>'
  $.each(dec_inc.increase, function(i2, attribute) {
    // console.log(attribute.name + ': ' + attribute.effect)
    inner_html += '<li>'
      + attribute.name
      + ' - '
      + attribute.effect
      + ' effect </li>'
  });
  inner_html += '</ul></p>'
  $( "#4_be_fit_a" ).append(inner_html);
};

if (typeof donutChart !== 'undefined' && $.isFunction(donutChart)) {
  var counter_all = JSON.parse(gon.last_answer_counter_all)

  showCharts(counter_all);

  var counter_all_min_max = couter_all_to_json_sort(counter_all);
  typeToSmall(counter_all_min_max);
  typeToBig(counter_all_min_max);

  donutChart('5_be_fit', counter_all, 250, 400);
  donutChart('6_be_fit', counter_all, 250, 400);
  donutChart('7_be_fit', counter_all, 250, 400);
  pieChart('8_be_fit', counter_all, 250, 400);



}

// -----------------------------------------------------------------------------
//  View Attributes
// -----------------------------------------------------------------------------
function getJsonFromAttributes() {
  var attributes = [];
  for (i = 0; i < 20; i++) {
    attributes.push(
      {
        "name" : I18n.t('view.attributes.'+ i +'_atr.name'),
        'effects': [
          {"element": I18n.t('view.attributes.'+ i +'_atr.1_element'),
          "effect": I18n.t('view.attributes.'+ i +'_atr.1_effect'),
          'movement': I18n.t('view.attributes.'+ i +'_atr.1_movement')},
          {"element": I18n.t('view.attributes.'+ i +'_atr.2_element'),
          "effect": I18n.t('view.attributes.'+ i +'_atr.2_effect'),
          'movement': I18n.t('view.attributes.'+ i +'_atr.2_movement')},
          {"element": I18n.t('view.attributes.'+ i +'_atr.3_element'),
          "effect": I18n.t('view.attributes.'+ i +'_atr.3_effect'),
          'movement': I18n.t('view.attributes.'+ i +'_atr.3_movement')},
        ]
      }
    )
  };
  return attributes
};

function decreaseIncrease(twenty_attributes, element) {
  var increase = [],
      decrease = [];

  $.each(twenty_attributes, function(i, attribute) {
    // console.log(attribute.name);
    $.each(attribute.effects, function(i2, effect) {
      // console.log(effect.element);
      // for strong element --> needs to be smaller
      if (effect.element == element && effect.movement == 'Decreasing') {
        //  console.log( attribute.name + " helps to decrease");
         decrease.push({'name':attribute.name, 'effect': effect.effect});
      };

      if (effect.element == element && effect.movement == 'Increasing') {
        //  console.log( attribute.name + " helps to increase");
         increase.push({'name':attribute.name, 'effect': effect.effect});
      };
    });
  });

  // console.log("Helps to Increase")
  // $.each(increase, function(i, attribute) {
  //   console.log(attribute.name + ': ' + attribute.effect)
  // })
  //
  // console.log("Helps to Decrease")
  // $.each(decrease, function(i, attribute) {
  //   console.log(attribute.name + ': ' + attribute.effect)
  // })
  return {
    decrease: decrease,
    increase: increase
  };
};
