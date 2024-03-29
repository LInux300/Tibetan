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
    yellow = 'edc21b';

// -----------------------------------------------------------------------------
//  Iterate over nutrition format var json
// -----------------------------------------------------------------------------

function recommended(child_2, type_of_food) {
  type_of_food += '<ul> <strong>' + child_2.name + '</strong><li>'
  $.each(child_2.children, function(i_3, child_3) {
    if (child_3.x_recommended == '0') {
      // console.log(child_3.name); // Recommended Occasional ...
      $.each(child_3.children, function(i_4, child_4) {
        // console.log(child_4.name); // Recommended Occasional ...
        type_of_food += child_4.name + ','
      });
    };
  });
  type_of_food += '</li></ul>';
  // console.log(type_of_food);
  return type_of_food
};

function nutrition(type) {
  var hints = '',
      food = '',
      meat = '',
      animalProducts = '';
  hints = type + I18n.t('view.6_topic.7_subtopic.1_section.to_small.1_p')
    + I18n.t('view.6_topic.7_subtopic.1_section.to_small.'+type);
  if (typeof dendrogram_data !== 'undefined') {
    $.each(dendrogram_data.children, function(i_1, child_1) {
      if (child_1.name == type) {
        // console.log(child_1.name); // Water, Fire, Air
        $.each(child_1.children, function(i_2, child_2) {
          // console.log(child_2.name); // Nuts & Seeds, Vegetables ...
          if (child_2.x_type == 'M') {
            meat = recommended(child_2, meat);
          } else if (child_2.x_type == 'A') {
            animalProducts = recommended(child_2, animalProducts);
          } else {
            food = recommended(child_2, food);
          };
        });
      };
    });
  };
  return {
    hints: hints,
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
//  C3   bar chart all records  for user
// -----------------------------------------------------------------------------
// var data = JSON.parse(dataSource);
// chart-percentage
function c3_percentage(graph_data) {
  var chart= c3.generate({
    bindto: '#chart_percentage',
    transition: {
      duration: 500
    },
    data: {
      x: 'time',
      rows: graph_data,
      names: {
        data1: I18n.t('view.6_topic.type_1'),
        data2: I18n.t('view.6_topic.type_2'),
        data3: I18n.t('view.6_topic.type_3'),
        data4: I18n.t('view.6_topic.type_1'),
        data5: I18n.t('view.6_topic.type_2'),
        data6: I18n.t('view.6_topic.type_3'),
        time: I18n.t('view.6_topic.time')
      },
      show: ['data4', 'data5', 'data6'],
      hide: ['time','data1','data2', 'data3'],
      type: 'bar',
      types: {
          data4: 'area-spline',
          data5: 'area-spline',
          data6: 'area-spline',
      },
      groups: [
        ['data4','data5', 'data6']
      ],
      colors: {
        data4: green,
        data5: red,
        data6: blue,
      }
    },
    axis: {
        x: {
            type: 'category' // this needed to load string x value
        },
        y: {
          max: 100,
          padding: {top: 0, bottom: 0},
          label: { // ADD
            text: I18n.t('view.6_topic.6_subtopic.graph_y_title'),
            position: 'outer-middle'
           }
        }
    },
    zoom: {
        enabled: true,
        extent: [1, 100]
    },
    legend: {
        show: true
    },
    tooltip: {
        contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
            return "<font color='" + green + "'> Air: " + d[0].value + "% </font>" +
                "<br>" +
                "<font color='" + red + "'> Fire: " + d[1].value + "% </font>" +
                "<br>" +
                "<font color='" + blue + "'> Water: " + d[2].value + "% </font>";
        }
    }
  });

};

function c3_bar(graph_data) {
  // console.log(graph_data);
  // var graph_data = [
  //     ['data1', 'data2', 'data3', 'data4', 'data5', 'data6', 'x'],
  //     [90, 120, 300, 90, 120, 300, '2013-01-22'],
  //     [40, 160, 240, 40, 160, 240,'2013-02-12'],
  //     [50, 200, 290, 50, 200, 290, '2013-03-02'],
  //     [120, 160, 230, 120, 160, 230, '2013-03-15'],
  //     [80, 130, 300, 80, 130, 300, '2013-04-02'],
  //     [0, 220, 320, 0, 220, 320, '2013-04-12']
  // ];
  // console.log(graph_data);
  var chart = c3.generate({
    data: {
      x: 'time',
      rows: graph_data,
      names: {
        data1: I18n.t('view.6_topic.type_1'),
        data2: I18n.t('view.6_topic.type_2'),
        data3: I18n.t('view.6_topic.type_3'),
        data4: I18n.t('view.6_topic.type_1'),
        data5: I18n.t('view.6_topic.type_2'),
        data6: I18n.t('view.6_topic.type_3'),
        time: I18n.t('view.6_topic.time')
      },
      hide: ['time','data4','data5', 'data6'],
      show: ['data1', 'data2', 'data3'],
      type: 'bar',
      types: {
          data4: 'spline',
          data5: 'spline',
          data6: 'spline',
      },
      groups: [
          ['data1','data2', 'data3'],
          ['data4','data5', 'data6']
      ],
      // selection: {
      //   enabled: true
      // },
      colors: {
        data1: green,
        data2: red,
        data3: blue,
        data4: green,
        data5: red,
        data6: blue,
      }
      // color: function (color, d) {
      //   // d will be 'id' when called for legends
      //   return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
      // }
    },
    axis: {
        x: {
            // localtime: true,
            type: 'category', // this needed to load string x value
            tick: {
              outer: false,
              rotate: 60
              // culling: {
              //   max: 10
              // }
            }
          }
        },
        y: {
          label: { // ADD
            text: I18n.t('view.6_topic.6_subtopic.graph_y_title_2'),
            position: 'outer-middle'
          }
    },
    // axis: {
    //     x: {
    //         type: 'timeseries',
    //         // max: 1,
    //         // min: -10.
    //         extent: [5, 10],
    //         // if true, treat x value as localtime (Default)
    //         // if false, convert to UTC internally
    //         // localtime: false,
    //         tick: {
    //             // count: 5,
    //             format: '%m-%d',
    //             // fit: true,
    //             // centered: true,
    //             fit: true
    //             // values: [1, 2, 4, 8, 16, 32, 40]
    //             // culling: true,
    //             // format: function (x) { return x.getFullYear(); }
    //
    //         }
    //     }
    // },
    // grid: {
    //     y: {
    //         lines: [{value: 0}]
    //     }
    // },
    zoom: {
        enabled: true,
        extent: [1, 100]
    },
    legend: {
        show: true
    },
    tooltip: {
        format: {
            title: function (d) {
              d = d + 1;
              return 'Examination ' + d;
            },
            value: function (value, ratio, id) {
                var format = id === 'data1' ? d3.format(',') : d3.format('');
                return format(value);
            }
//            value: d3.format(',') // apply this format to both y and y2
        }
    }
    // tooltip: {
    //     contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
    //         return "<font color='" + green + "'> Air: " + d[0].value + "</font>" +
    //             "<br>" +
    //             "<font color='" + red + "'> Fire: " + d[1].value + "</font>" +
    //             "<br>" +
    //             "<font color='" + blue + "'> Water: " + d[2].value + "</font>";
    //     }
    // }
  });
  // chart.hide(['time']);
};

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

function showCharts(last_answer_counter_all, last_answer_counter) {
  donutChart('1_be_fit', last_answer_counter, 250, 400);
  donutChart('2_be_fit', last_answer_counter_all, 250, 400);
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
  // first value is the biggest one
  var first = $(counter_all_max_min).first()[0];
  color = getGraphColor(first.type_x)
  pieChartSingle('4_be_fit',first, 230, 200, color);
  dec_inc = decreaseIncrease(getJsonFromAttributes(), first.type_x);

  var inner_html = '<p><strong>'
                   + I18n.t('view.attributes.helps_to_decrease')
                   + '</strong><ul>'
  $.each(dec_inc.decrease, function(i2, attribute) {
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

function graphData(graph_data) {
  return graph_data
};

function getLastAnswerCounter() {
  url = '/last_answer_counter';
  $.ajax({
    type: "POST",
    url: url,
  }).done(function(data) {
    dashboardGraphs(data);
  }).fail(function() {
    alert('Error occured');
  });
};

function getAnsweredQuestions(data) {
  var last_type_questions = JSON.parse(data.last_type_questions)
  createTypeDivs(last_type_questions, 'answer_1', 'block');
};

function dashboardGraphs(data) {
  var last_answer_counter_all = JSON.parse(data.last_answer_counter_all),
      last_answer_counter = JSON.parse(data.last_answer_counter),
      all_user_answers = data.all_user_answers;

  var graph_data = [];
  graph_data.push(['data1', 'data2', 'data3', 'data4', 'data5', 'data6', 'time'])
  $.each(all_user_answers, function(i, user_answer) {
    var counter = JSON.parse(user_answer.counter);
    counter['1']? counter['1'] = counter['1'] : counter['1'] = 0
    counter['2']? counter['2'] = counter['2'] : counter['2'] = 0
    counter['3']? counter['3'] = counter['3'] : counter['3'] = 0

    var counter_all = counter['1'] + counter['2'] + counter['3']
    counter['4'] = (counter['1'] / counter_all * 100).toFixed(2)
    counter['5'] = (counter['2'] / counter_all * 100).toFixed(2)
    counter['6'] = (counter['3'] / counter_all * 100).toFixed(2)

    // format 2016-01-01
    // var graph_time = user_answer.created_at.substr(0,10);
    // format 01-01
    var graph_time = user_answer.created_at.substr(5,5);
    graph_data.push([
      counter['1'], counter['2'], counter['3'], counter['4'], counter['5'], counter['6'],
      graph_time
    ]);
  });

  // Last Result, All Results
  showCharts(last_answer_counter_all, last_answer_counter);
  getAnsweredQuestions(data);

  // To Big, To Small
  if (data.last_answer_counter_all == '{"1":0,"2":0,"3":0}' ) {
    // for new user without records
    $( "#3_be_fit_a" ).append(I18n.t('view.6_topic.no_records'));
    $( "#4_be_fit_a" ).append(I18n.t('view.6_topic.no_records'));
  }
  else {
    var counter_all_max_min = couter_all_to_json_sort(last_answer_counter_all);
    to_small = typeToSmall(counter_all_max_min);
    to_big = typeToBig(counter_all_max_min);

    // now only for recommended food  TODO: for occasional
    food_for_you = nutrition(to_small.type_x);
    $("#accordion-1").append(food_for_you.hints);
    $("#accordion-2").append(food_for_you.meat);
    $("#accordion-3").append(food_for_you.animalProducts);
    $("#accordion-4").append(food_for_you.food);
  }

  // Percentage, Timeline
  c3_percentage(graph_data);
  c3_bar(graph_data);

  // Your Hints
  pieChart('8_be_fit', last_answer_counter_all, 210, 260);
}

//  TODO check for all divs whitch contain data from last answer counter
if (typeof donutChart !== 'undefined' && $.isFunction(donutChart) && $("#8_be_fit").length > 0) {
  getLastAnswerCounter();
}

// -----------------------------------------------------------------------------
//  View Attributes
// -----------------------------------------------------------------------------
function getJsonFromAttributes() {
  var twenty_attributes = [];
  for (i = 0; i < 20; i++) {
    twenty_attributes.push(
      {
        "name" : I18n.t('view.attributes.'+ i +'_atr.name'),
        'effects': [
          {"element": I18n.t('view.attributes.'+ i +'_atr.1_element'),
          "effect": I18n.t('view.attributes.'+ i +'_atr.1_effect'),
          "type_x": I18n.t('view.attributes.'+ i +'_atr.1_type_x'),
          'movement': I18n.t('view.attributes.'+ i +'_atr.1_movement')},
          {"element": I18n.t('view.attributes.'+ i +'_atr.2_element'),
          "effect": I18n.t('view.attributes.'+ i +'_atr.2_effect'),
          "type_x": I18n.t('view.attributes.'+ i +'_atr.2_type_x'),
          'movement': I18n.t('view.attributes.'+ i +'_atr.2_movement')},
          {"element": I18n.t('view.attributes.'+ i +'_atr.3_element'),
          "effect": I18n.t('view.attributes.'+ i +'_atr.3_effect'),
          "type_x": I18n.t('view.attributes.'+ i +'_atr.3_type_x'),
          'movement': I18n.t('view.attributes.'+ i +'_atr.3_movement')},
        ]
      }
    )
  };
  return twenty_attributes
};

function decreaseIncrease(twenty_attributes, element) {
  var increase = [],
      decrease = [];

  $.each(twenty_attributes, function(i, attribute) {
    // console.log(attribute.name);
    $.each(attribute.effects, function(i2, effect) {
      // console.log(effect.element);
      // for strong element --> needs to be smaller
      if (effect.element == element && effect.type_x == 'D') {
        // console.log( attribute.name + " helps to decrease");
        decrease.push({'name':attribute.name, 'effect': effect.effect});
      };

      if (effect.element == element && effect.type_x == 'I') {
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
