$(window).ready(function() {
});

var green = '#009A31',
    red = '#E8110F',
    blue = '#008CBA';
    green_dark = '#0A803B';
    green_light = '#8CC63F';
    red_dark = '#BF1E2D';
    red_light = '#FF3333';
    blue_dark = '#1EA8CF';
    blue_light = '#227FB0';

// -----------------------------------------------------------------------------
//  Iterate over json data
// -----------------------------------------------------------------------------

function recommended(child_2, type_of_food) {
  type_of_food += '<ul> <strong>' + child_2.name + '</strong><li>'
  $.each(child_2.children, function(i_3, child_3) {
    if (child_3.name == 'Recommended') {
      // console.log(child_3.name); // Recommended Occasional ...
      $.each(child_3.children, function(i_4, child_4) {
        // console.log(child_4.name); // Recommended Occasional ...
        type_of_food += child_4.name + ','
      });
    };
  });
  type_of_food += '</li></ul>';
  console.log(type_of_food);
  return type_of_food
};

function nutrition(type) {
  var food = '',
      meat = '',
      animalProducts = '';
  if (typeof dendrogram_data !== 'undefined') {
    $.each(dendrogram_data.children, function(i_1, child_1) {
      if (child_1.name == type) {
        console.log(child_1.name); // Water, Fire, Air
        $.each(child_1.children, function(i_2, child_2) {
          console.log(child_2.name); // Nuts & Seeds, Vegetables ...
          if (child_2.name == 'Meat') {
            meat = recommended(child_2, meat);
          } else if (child_2.name == 'From Animals') {
            animalProducts = recommended(child_2, animalProducts);
          } else {
            food = recommended(child_2, food);
          };
        });
      };
    });
  };
  return {
    meat: meat,
    animalProducts: animalProducts,
    food: food
  };
};

// -----------------------------------------------------------------------------
//  Tasks
// -----------------------------------------------------------------------------
$(function() {
   $("#tabs-1").tabs();
   $( "#accordion" ).accordion({
    heightStyle: "content"
   });
});

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

function getGraphColor (type_x) {
  if (type_x == 'Fire') {
    color = red
  } else if (type_x == 'Air') {
    color = green
  } else if (type_x == 'Water') {
    color = blue
  };
  return color
};

function typeToSmall(counter_all_max_min) {
  // min value
  var last = $(counter_all_max_min).last()[0];
  color = getGraphColor(last.type_x)
  pieChartSingle('3_be_fit', last, 230, 200, color);
  dec_inc = decreaseIncrease(getJsonFromAttributes(), last.type_x);

  var inner_html = '<p><strong>'
                   + I18n.t('view.attributes.helps_to_increase')
                   + '</strong><ul>'
  $.each(dec_inc.increase, function(i2, attribute) {
    // console.log(attribute.name + ': ' + attribute.effect)
    inner_html += '<li>' + attribute.name + ' - ' + attribute.effect + ' effect</li>'
  });
  inner_html += '</ul></p>'
  $("#3_be_fit_a").append(inner_html);
  return last
};

function typeToBig(counter_all_max_min) {
  // max value
  var first = $(counter_all_max_min).first()[0];
  color = getGraphColor(first.type_x)
  pieChartSingle('4_be_fit',first, 230, 200, color);
  dec_inc = decreaseIncrease(getJsonFromAttributes(), first.type_x);

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
  return first
};

if (typeof donutChart !== 'undefined' && $.isFunction(donutChart)) {
  var counter_all = JSON.parse(gon.last_answer_counter_all)

  showCharts(counter_all);

  // for new user without records
  if ( gon.last_answer_counter_all == '{"1":0,"2":0,"3":0}' ) {
    $( "#3_be_fit_a" ).append(I18n.t('view.6_topic.no_records'));
    $( "#4_be_fit_a" ).append(I18n.t('view.6_topic.no_records'));
  }
  else {
    var counter_all_max_min = couter_all_to_json_sort(counter_all);
    to_small = typeToSmall(counter_all_max_min);
    to_big = typeToBig(counter_all_max_min);
    console.log(to_small);

    food_for_you = nutrition(to_small.type_x)
    $("#accordion-1").append(food_for_you.meat);
    $("#accordion-2").append(food_for_you.animalProducts);
    $("#accordion-3").append(food_for_you.food);
  }

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
