var green = '#009A31',
    red = '#E8110F',
    blue = '#008CBA';
    green_dark = '#0A803B';
    green_light = '#8CC63F';
    red_dark = '#BF1E2D';
    red_light = '#FF3333';
    blue_dark = '#1EA8CF';
    blue_light = '#227FB0';


var dendrogram_data = {
 "name": "Nutrition",
 "color": "white",
 "children": [
  {
   "name": I18n.t('nutrition.0_children.name'),
   "color": green,
   "children": [{
      "name": I18n.t('nutrition.0_children.0_children.name'),
      "color": green_light,
      "children": [{
        "name": I18n.t('nutrition.0_children.0_children.0_children.name'),
        "x_recommended": I18n.t('nutrition.0_children.0_children.0_children.x_recommended'),
        "color": green_dark,
        "children": [
          {"name": I18n.t('nutrition.0_children.0_children.0_children.0_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.0_children.0_children.1_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.0_children.0_children.2_children.name'), "size": 100},
        ]
        },{
        "name": I18n.t('nutrition.0_children.0_children.1_children.name'),
        "x_recommended": I18n.t('nutrition.0_children.0_children.1_children.x_recommended'),
        "color": green_dark,
        "children": [
          {"name": I18n.t('nutrition.0_children.0_children.1_children.0_children.name'), "size": 50},
          {"name": I18n.t('nutrition.0_children.0_children.1_children.1_children.name'), "size": 50},
          {"name": I18n.t('nutrition.0_children.0_children.1_children.2_children.name'), "size": 50},
          {"name": I18n.t('nutrition.0_children.0_children.1_children.3_children.name'), "size": 50},
         ]
        },{
        "name": I18n.t('nutrition.0_children.0_children.2_children.name'),
        "x_recommended": I18n.t('nutrition.0_children.0_children.2_children.x_recommended'),
        "color": green_dark,
        "children": [
          {"name": I18n.t('nutrition.0_children.0_children.2_children.0_children.name'), "size": 10},
          {"name": I18n.t('nutrition.0_children.0_children.2_children.1_children.name'), "size": 10},
         ]
       }]
    },{
      "name": I18n.t('nutrition.0_children.1_children.name'),
      "color": green_light,
      "children": [{
        "name": I18n.t('nutrition.0_children.1_children.0_children.name'),
        "x_recommended": I18n.t('nutrition.0_children.1_children.0_children.x_recommended'),
        "color": green_dark,
        "children": [
          {"name": I18n.t('nutrition.0_children.1_children.0_children.0_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.1_children.0_children.1_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.1_children.0_children.2_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.1_children.0_children.3_children.name'), "size": 100},
        ]
        },{
        "name": I18n.t('nutrition.0_children.1_children.1_children.name'),
        "x_recommended": I18n.t('nutrition.0_children.1_children.1_children.x_recommended'),
        "color": green_dark,
        "children": [
          {"name": I18n.t('nutrition.0_children.1_children.1_children.0_children.name'), "size": 50},
          {"name": I18n.t('nutrition.0_children.1_children.1_children.1_children.name'), "size": 50},
         ]
        },{
        "name": I18n.t('nutrition.0_children.1_children.2_children.name'),
        "x_recommended": I18n.t('nutrition.0_children.1_children.2_children.x_recommended'),
        "color": green_dark,
        "children": [
          {"name": I18n.t('nutrition.0_children.1_children.2_children.0_children.name'), "size": 10},
         ]
       }]
    },{
      "name": I18n.t('nutrition.0_children.2_children.name'),
      "color": green_light,
      "children": [{
        "name": I18n.t('nutrition.0_children.2_children.0_children.name'),
        "x_recommended": I18n.t('nutrition.0_children.2_children.0_children.x_recommended'),
        "color": green_dark,
        "children": [
          {"name": I18n.t('nutrition.0_children.2_children.0_children.0_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.2_children.0_children.1_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.2_children.0_children.2_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.2_children.0_children.3_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.2_children.0_children.4_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.2_children.0_children.5_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.2_children.0_children.6_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.2_children.0_children.7_children.name'), "size": 100},
        ]
        },{
        "name": I18n.t('nutrition.0_children.2_children.1_children.name'),
        "x_recommended": I18n.t('nutrition.0_children.2_children.1_children.x_recommended'),
        "color": green_dark,
        "children": [
          {"name": I18n.t('nutrition.0_children.2_children.1_children.0_children.name'), "size": 50},
         ]
        },{
        "name": I18n.t('nutrition.0_children.2_children.2_children.name'),
        "x_recommended": I18n.t('nutrition.0_children.2_children.2_children.x_recommended'),
        "color": green_dark,
        "children": [
          {"name": I18n.t('nutrition.0_children.2_children.2_children.0_children.name'), "size": 10},
          {"name": I18n.t('nutrition.0_children.2_children.2_children.1_children.name'), "size": 10},
          {"name": I18n.t('nutrition.0_children.2_children.2_children.2_children.name'), "size": 10},
          {"name": I18n.t('nutrition.0_children.2_children.2_children.3_children.name'), "size": 10},
         ]
       }]
    },{
      "name": I18n.t('nutrition.0_children.3_children.name'),
      "color": green_light,
      "children": [{
        "name": I18n.t('nutrition.0_children.3_children.0_children.name'),
        "x_recommended": I18n.t('nutrition.0_children.3_children.0_children.x_recommended'),
        "color": green_dark,
        "children": [
          {"name": I18n.t('nutrition.0_children.3_children.0_children.0_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.3_children.0_children.1_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.3_children.0_children.2_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.3_children.0_children.3_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.3_children.0_children.4_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.3_children.0_children.5_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.3_children.0_children.6_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.3_children.0_children.7_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.3_children.0_children.8_children.name'), "size": 100},
        ]
        },{
        "name": I18n.t('nutrition.0_children.3_children.1_children.name'),
        "x_recommended": I18n.t('nutrition.0_children.3_children.1_children.x_recommended'),
        "color": green_dark,
        "children": [
          {"name": I18n.t('nutrition.0_children.3_children.1_children.0_children.name'), "size": 50},
         ]
        },{
        "name": I18n.t('nutrition.0_children.3_children.2_children.name'),
        "x_recommended": I18n.t('nutrition.0_children.3_children.2_children.x_recommended'),
        "color": green_dark,
        "children": [
          {"name": I18n.t('nutrition.0_children.3_children.2_children.0_children.name'), "size": 10},
          {"name": I18n.t('nutrition.0_children.3_children.2_children.1_children.name'), "size": 10},
         ]
       }]
    },{
      "name": I18n.t('nutrition.0_children.4_children.name'),
      "color": green_light,
      "children": [{
        "name": I18n.t('nutrition.0_children.4_children.0_children.name'),
        "x_recommended": I18n.t('nutrition.0_children.4_children.0_children.x_recommended'),
        "color": green_dark,
        "children": [
          {"name": I18n.t('nutrition.0_children.4_children.0_children.0_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.4_children.0_children.1_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.4_children.0_children.2_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.4_children.0_children.3_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.4_children.0_children.4_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.4_children.0_children.5_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.4_children.0_children.6_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.4_children.0_children.7_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.4_children.0_children.8_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.4_children.0_children.9_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.4_children.0_children.10_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.4_children.0_children.11_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.4_children.0_children.12_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.4_children.0_children.13_children.name'), "size": 100},
        ]
        },{
        "name": I18n.t('nutrition.0_children.4_children.1_children.name'),
        "x_recommended": I18n.t('nutrition.0_children.4_children.1_children.x_recommended'),
        "color": green_dark,
        "children": [
          {"name": I18n.t('nutrition.0_children.4_children.1_children.0_children.name'), "size": 50},
          {"name": I18n.t('nutrition.0_children.4_children.1_children.1_children.name'), "size": 50},
          {"name": I18n.t('nutrition.0_children.4_children.1_children.2_children.name'), "size": 50},
          {"name": I18n.t('nutrition.0_children.4_children.1_children.3_children.name'), "size": 50},
          {"name": I18n.t('nutrition.0_children.4_children.1_children.4_children.name'), "size": 50},
          {"name": I18n.t('nutrition.0_children.4_children.1_children.5_children.name'), "size": 50},
          {"name": I18n.t('nutrition.0_children.4_children.1_children.6_children.name'), "size": 50},
          {"name": I18n.t('nutrition.0_children.4_children.1_children.7_children.name'), "size": 50},
          {"name": I18n.t('nutrition.0_children.4_children.1_children.8_children.name'), "size": 50},
          {"name": I18n.t('nutrition.0_children.4_children.1_children.9_children.name'), "size": 50},
          {"name": I18n.t('nutrition.0_children.4_children.1_children.10_children.name'), "size": 50},
          {"name": I18n.t('nutrition.0_children.4_children.1_children.11_children.name'), "size": 50},
         ]
        },{
        "name": I18n.t('nutrition.0_children.4_children.2_children.name'),
        "x_recommended": I18n.t('nutrition.0_children.4_children.2_children.x_recommended'),
        "color": green_dark,
        "children": [
          {"name": I18n.t('nutrition.0_children.4_children.2_children.0_children.name'), "size": 10},
         ]
       }]
    },{
      "name": I18n.t('nutrition.0_children.5_children.name'),
      "color": green_light,
      "children": [{
        "name": I18n.t('nutrition.0_children.5_children.0_children.name'),
        "x_recommended": I18n.t('nutrition.0_children.5_children.0_children.x_recommended'),
        "color": green_dark,
        "children": [
          {"name": I18n.t('nutrition.0_children.5_children.0_children.0_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.5_children.0_children.1_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.5_children.0_children.2_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.5_children.0_children.3_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.5_children.0_children.4_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.5_children.0_children.5_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.5_children.0_children.6_children.name'), "size": 100},
        ]
        },{
        "name": I18n.t('nutrition.0_children.1_children.1_children.name'),
        "x_recommended": I18n.t('nutrition.0_children.1_children.1_children.x_recommended'),
        "color": green_dark,
        "children": [
          {"name": I18n.t('nutrition.0_children.5_children.1_children.0_children.name'), "size": 50},
          {"name": I18n.t('nutrition.0_children.5_children.1_children.1_children.name'), "size": 50},
          {"name": I18n.t('nutrition.0_children.5_children.1_children.2_children.name'), "size": 50},
          {"name": I18n.t('nutrition.0_children.5_children.1_children.3_children.name'), "size": 50},
         ]
        },{
        "name": I18n.t('nutrition.0_children.5_children.2_children.name'),
        "x_recommended": I18n.t('nutrition.0_children.5_children.2_children.x_recommended'),
        "color": green_dark,
        "children": [
          {"name": I18n.t('nutrition.0_children.5_children.2_children.0_children.name'), "size": 10},
         ]
       }]
    },{
      "name": I18n.t('nutrition.0_children.6_children.name'),
      "color": green_light,
      "children": [{
        "name": I18n.t('nutrition.0_children.6_children.0_children.name'),
        "x_recommended": I18n.t('nutrition.0_children.6_children.0_children.x_recommended'),
        "color": green_dark,
        "children": [
          {"name": I18n.t('nutrition.0_children.6_children.0_children.0_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.6_children.0_children.1_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.6_children.0_children.2_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.6_children.0_children.3_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.6_children.0_children.4_children.name'), "size": 100},
        ]
        },{
        "name": I18n.t('nutrition.0_children.1_children.1_children.name'),
        "x_recommended": I18n.t('nutrition.0_children.1_children.1_children.x_recommended'),
        "color": green_dark,
        "children": [
          {"name": I18n.t('nutrition.0_children.6_children.1_children.0_children.name'), "size": 50},
          {"name": I18n.t('nutrition.0_children.6_children.1_children.1_children.name'), "size": 50},
          {"name": I18n.t('nutrition.0_children.6_children.1_children.2_children.name'), "size": 50},
          {"name": I18n.t('nutrition.0_children.6_children.1_children.3_children.name'), "size": 50},
          {"name": I18n.t('nutrition.0_children.6_children.1_children.4_children.name'), "size": 50},
          {"name": I18n.t('nutrition.0_children.6_children.1_children.5_children.name'), "size": 50},
          {"name": I18n.t('nutrition.0_children.6_children.1_children.6_children.name'), "size": 50},
         ]
        },{
        "name": I18n.t('nutrition.0_children.6_children.2_children.name'),
        "x_recommended": I18n.t('nutrition.0_children.6_children.2_children.x_recommended'),
        "color": green_dark,
        "children": [
          {"name": I18n.t('nutrition.0_children.6_children.2_children.0_children.name'), "size": 10},
          {"name": I18n.t('nutrition.0_children.6_children.2_children.1_children.name'), "size": 10},
          {"name": I18n.t('nutrition.0_children.6_children.2_children.2_children.name'), "size": 10},
          {"name": I18n.t('nutrition.0_children.6_children.2_children.3_children.name'), "size": 10},
          {"name": I18n.t('nutrition.0_children.6_children.2_children.4_children.name'), "size": 10},
          {"name": I18n.t('nutrition.0_children.6_children.2_children.5_children.name'), "size": 10},
         ]
       }]
    },{
      "name": I18n.t('nutrition.0_children.7_children.name'),
      "color": green_light,
      "children": [{
        "name": I18n.t('nutrition.0_children.7_children.0_children.name'),
        "x_recommended": I18n.t('nutrition.0_children.7_children.0_children.x_recommended'),
        "color": green_dark,
        "children": [
          {"name": I18n.t('nutrition.0_children.7_children.0_children.0_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.7_children.0_children.1_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.7_children.0_children.2_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.7_children.0_children.3_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.7_children.0_children.4_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.7_children.0_children.5_children.name'), "size": 100},
        ]
        },{
        "name": I18n.t('nutrition.0_children.7_children.1_children.name'),
        "x_recommended": I18n.t('nutrition.0_children.7_children.1_children.x_recommended'),
        "color": green_dark,
        "children": [
          {"name": I18n.t('nutrition.0_children.7_children.1_children.0_children.name'), "size": 50},
          {"name": I18n.t('nutrition.0_children.7_children.1_children.1_children.name'), "size": 50},
          {"name": I18n.t('nutrition.0_children.7_children.1_children.2_children.name'), "size": 50},
         ]
        },{
        "name": I18n.t('nutrition.0_children.6_children.2_children.name'),
        "x_recommended": I18n.t('nutrition.0_children.6_children.2_children.x_recommended'),
        "color": green_dark,
        "children": [
          {"name": I18n.t('nutrition.0_children.7_children.2_children.0_children.name'), "size": 10},
         ]
       }]
    },{
      "name": I18n.t('nutrition.0_children.8_children.name'),
      "color": green_light,
      "children": [{
        "name": I18n.t('nutrition.0_children.8_children.0_children.name'),
        "x_recommended": I18n.t('nutrition.0_children.8_children.0_children.x_recommended'),
        "color": green_dark,
        "children": [
          {"name": I18n.t('nutrition.0_children.8_children.0_children.0_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.8_children.0_children.1_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.8_children.0_children.2_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.8_children.0_children.3_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.8_children.0_children.4_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.8_children.0_children.5_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.8_children.0_children.6_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.8_children.0_children.7_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.8_children.0_children.8_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.8_children.0_children.9_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.8_children.0_children.10_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.8_children.0_children.11_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.8_children.0_children.12_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.8_children.0_children.13_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.8_children.0_children.14_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.8_children.0_children.15_children.name'), "size": 100},
          {"name": I18n.t('nutrition.0_children.8_children.0_children.16_children.name'), "size": 100},
        ]
        },{
        "name": I18n.t('nutrition.0_children.8_children.1_children.name'),
        "x_recommended": I18n.t('nutrition.0_children.8_children.1_children.x_recommended'),
        "color": green_dark,
        "children": [
          {"name": I18n.t('nutrition.0_children.8_children.1_children.0_children.name'), "size": 50},
          {"name": I18n.t('nutrition.0_children.8_children.1_children.1_children.name'), "size": 50},
          {"name": I18n.t('nutrition.0_children.8_children.1_children.2_children.name'), "size": 50},
          {"name": I18n.t('nutrition.0_children.8_children.1_children.3_children.name'), "size": 50},
         ]
        },{
        "name": I18n.t('nutrition.0_children.8_children.2_children.name'),
        "x_recommended": I18n.t('nutrition.0_children.8_children.2_children.x_recommended'),
        "color": green_dark,
        "children": [
          {"name": I18n.t('nutrition.0_children.8_children.2_children.0_children.name'), "size": 10},
         ]
       }]
    }

   ]
  },



  {
    "name": I18n.t('nutrition.1_children.name'),
    "color": red,
    "children": [{
       "name": I18n.t('nutrition.1_children.0_children.name'),
       "x_type": I18n.t('nutrition.1_children.0_children.x_type'),
       "color": red_light,
       "children": [{
         "name": I18n.t('nutrition.1_children.0_children.0_children.name'),
         "x_recommended": I18n.t('nutrition.1_children.0_children.0_children.x_recommended'),
         "color": red_dark,
         "children": [
           {"name": I18n.t('nutrition.1_children.0_children.0_children.0_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.0_children.0_children.1_children.name'), "size": 100},
         ]
         },{
         "name": I18n.t('nutrition.1_children.0_children.1_children.name'),
         "x_recommended": I18n.t('nutrition.1_children.0_children.1_children.x_recommended'),
         "color": red_dark,
         "children": [
           {"name": I18n.t('nutrition.1_children.0_children.1_children.0_children.name'), "size": 50},
          ]
         },{
         "name": I18n.t('nutrition.1_children.0_children.2_children.name'),
         "x_recommended": I18n.t('nutrition.1_children.0_children.2_children.x_recommended'),
         "color": red_dark,
         "children": [
           {"name": I18n.t('nutrition.1_children.0_children.2_children.0_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.0_children.2_children.1_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.0_children.2_children.2_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.0_children.2_children.3_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.0_children.2_children.4_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.0_children.2_children.5_children.name'), "size": 10},
          ]
        }]
     },{
       "name": I18n.t('nutrition.1_children.1_children.name'),
       "x_type": I18n.t('nutrition.1_children.1_children.x_type'),
       "color": red_light,
       "children": [{
         "name": I18n.t('nutrition.1_children.1_children.0_children.name'),
         "x_recommended": I18n.t('nutrition.1_children.1_children.0_children.x_recommended'),
         "color": red_dark,
         "children": [
           {"name": I18n.t('nutrition.1_children.1_children.0_children.0_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.1_children.0_children.1_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.1_children.0_children.2_children.name'), "size": 100},
         ]
         },{
         "name": I18n.t('nutrition.1_children.1_children.1_children.name'),
         "x_recommended": I18n.t('nutrition.1_children.1_children.1_children.x_recommended'),
         "color": red_dark,
         "children": [
           {"name": I18n.t('nutrition.1_children.1_children.1_children.0_children.name'), "size": 50},
           {"name": I18n.t('nutrition.1_children.1_children.1_children.1_children.name'), "size": 50},
           {"name": I18n.t('nutrition.1_children.1_children.1_children.2_children.name'), "size": 50},
          ]
         },{
         "name": I18n.t('nutrition.1_children.1_children.2_children.name'),
         "x_recommended": I18n.t('nutrition.1_children.1_children.2_children.x_recommended'),
         "color": red_dark,
         "children": [
           {"name": I18n.t('nutrition.1_children.1_children.2_children.0_children.name'), "size": 10},
          ]
        }]
     },{
       "name": I18n.t('nutrition.1_children.2_children.name'),
       "x_type": I18n.t('nutrition.1_children.2_children.x_type'),
       "color": red_light,
       "children": [{
         "name": I18n.t('nutrition.1_children.2_children.0_children.name'),
         "x_recommended": I18n.t('nutrition.1_children.2_children.0_children.x_recommended'),
         "color": red_dark,
         "children": [
           {"name": I18n.t('nutrition.1_children.2_children.0_children.0_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.2_children.0_children.1_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.2_children.0_children.2_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.2_children.0_children.3_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.2_children.0_children.4_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.2_children.0_children.5_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.2_children.0_children.6_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.2_children.0_children.7_children.name'), "size": 100},
         ]
         },{
         "name": I18n.t('nutrition.1_children.1_children.1_children.name'),
         "x_recommended": I18n.t('nutrition.1_children.1_children.1_children.x_recommended'),
         "color": red_dark,
         "children": [
           {"name": I18n.t('nutrition.1_children.2_children.1_children.0_children.name'), "size": 50},
           {"name": I18n.t('nutrition.1_children.2_children.1_children.1_children.name'), "size": 50},
          ]
         },{
         "name": I18n.t('nutrition.1_children.2_children.2_children.name'),
         "x_recommended": I18n.t('nutrition.1_children.2_children.2_children.x_recommended'),
         "color": red_dark,
         "children": [
           {"name": I18n.t('nutrition.1_children.2_children.2_children.0_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.2_children.2_children.1_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.2_children.2_children.2_children.name'), "size": 10},
          ]
        }]
     },{
       "name": I18n.t('nutrition.1_children.3_children.name'),
       "x_type": I18n.t('nutrition.1_children.3_children.x_type'),
       "color": red_light,
       "children": [{
         "name": I18n.t('nutrition.1_children.3_children.0_children.name'),
         "x_recommended": I18n.t('nutrition.1_children.3_children.0_children.x_recommended'),
         "color": red_dark,
         "children": [
           {"name": I18n.t('nutrition.1_children.3_children.0_children.0_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.3_children.0_children.1_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.3_children.0_children.2_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.3_children.0_children.3_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.3_children.0_children.4_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.3_children.0_children.5_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.3_children.0_children.6_children.name'), "size": 100},
         ]
         },{
         "name": I18n.t('nutrition.1_children.3_children.1_children.name'),
         "x_recommended": I18n.t('nutrition.1_children.3_children.1_children.x_recommended'),
         "color": red_dark,
         "children": [
           {"name": I18n.t('nutrition.1_children.3_children.1_children.0_children.name'), "size": 50},
           {"name": I18n.t('nutrition.1_children.3_children.1_children.1_children.name'), "size": 50},
           {"name": I18n.t('nutrition.1_children.3_children.1_children.2_children.name'), "size": 50},
          ]
         },{
         "name": I18n.t('nutrition.1_children.2_children.2_children.name'),
         "x_recommended": I18n.t('nutrition.1_children.2_children.2_children.x_recommended'),
         "color": red_dark,
         "children": [
           {"name": I18n.t('nutrition.1_children.3_children.2_children.0_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.3_children.2_children.1_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.3_children.2_children.2_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.3_children.2_children.3_children.name'), "size": 10},
          ]
        }]
     },{
       "name": I18n.t('nutrition.1_children.4_children.name'),
       "x_type": I18n.t('nutrition.1_children.4_children.x_type'),
       "color": red_light,
       "children": [{
         "name": I18n.t('nutrition.1_children.4_children.0_children.name'),
         "x_recommended": I18n.t('nutrition.1_children.4_children.0_children.x_recommended'),
         "color": red_dark,
         "children": [
           {"name": I18n.t('nutrition.1_children.4_children.0_children.0_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.4_children.0_children.1_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.4_children.0_children.2_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.4_children.0_children.3_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.4_children.0_children.4_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.4_children.0_children.5_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.4_children.0_children.6_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.4_children.0_children.7_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.4_children.0_children.8_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.4_children.0_children.9_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.4_children.0_children.10_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.4_children.0_children.11_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.4_children.0_children.12_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.4_children.0_children.13_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.4_children.0_children.14_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.4_children.0_children.15_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.4_children.0_children.16_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.4_children.0_children.17_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.4_children.0_children.18_children.name'), "size": 100},
         ]
         },{
         "name": I18n.t('nutrition.1_children.4_children.1_children.name'),
         "x_recommended": I18n.t('nutrition.1_children.4_children.1_children.x_recommended'),
         "color": red_dark,
         "children": [
           {"name": I18n.t('nutrition.1_children.4_children.1_children.0_children.name'), "size": 50},
           {"name": I18n.t('nutrition.1_children.4_children.1_children.1_children.name'), "size": 50},
           {"name": I18n.t('nutrition.1_children.4_children.1_children.2_children.name'), "size": 50},
           {"name": I18n.t('nutrition.1_children.4_children.1_children.3_children.name'), "size": 50},
           {"name": I18n.t('nutrition.1_children.4_children.1_children.4_children.name'), "size": 50},
           {"name": I18n.t('nutrition.1_children.4_children.1_children.5_children.name'), "size": 50},
           {"name": I18n.t('nutrition.1_children.4_children.1_children.6_children.name'), "size": 50},
           {"name": I18n.t('nutrition.1_children.4_children.1_children.7_children.name'), "size": 50},
           {"name": I18n.t('nutrition.1_children.4_children.1_children.8_children.name'), "size": 50},
          ]
         },{
         "name": I18n.t('nutrition.1_children.2_children.2_children.name'),
         "x_recommended": I18n.t('nutrition.1_children.2_children.2_children.x_recommended'),
         "color": red_dark,
         "children": [
           {"name": I18n.t('nutrition.1_children.4_children.2_children.0_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.4_children.2_children.1_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.4_children.2_children.2_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.4_children.2_children.3_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.4_children.2_children.4_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.4_children.2_children.5_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.4_children.2_children.6_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.4_children.2_children.7_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.4_children.2_children.8_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.4_children.2_children.9_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.4_children.2_children.10_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.4_children.2_children.11_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.4_children.2_children.12_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.4_children.2_children.13_children.name'), "size": 10},
          ]
        }]
     },{
       "name": I18n.t('nutrition.1_children.5_children.name'),
       "x_type": I18n.t('nutrition.1_children.5_children.x_type'),
       "color": red_light,
       "children": [{
         "name": I18n.t('nutrition.1_children.5_children.0_children.name'),
         "x_recommended": I18n.t('nutrition.1_children.5_children.0_children.x_recommended'),
         "color": red_dark,
         "children": [
           {"name": I18n.t('nutrition.1_children.5_children.0_children.0_children.name'), "size": 100},
         ]
         },{
         "name": I18n.t('nutrition.1_children.5_children.1_children.name'),
         "x_recommended": I18n.t('nutrition.1_children.5_children.1_children.x_recommended'),
         "color": red_dark,
         "children": [
           {"name": I18n.t('nutrition.1_children.5_children.1_children.0_children.name'), "size": 50},
           {"name": I18n.t('nutrition.1_children.5_children.1_children.1_children.name'), "size": 50},
          ]
         },{
         "name": I18n.t('nutrition.1_children.5_children.2_children.name'),
         "x_recommended": I18n.t('nutrition.1_children.5_children.2_children.x_recommended'),
         "color": red_dark,
         "children": [
           {"name": I18n.t('nutrition.1_children.5_children.2_children.0_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.5_children.2_children.1_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.5_children.2_children.2_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.5_children.2_children.3_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.5_children.2_children.4_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.5_children.2_children.5_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.5_children.2_children.6_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.5_children.2_children.7_children.name'), "size": 10},
          ]
        }]
     },{
       "name": I18n.t('nutrition.1_children.6_children.name'),
       "x_type": I18n.t('nutrition.1_children.6_children.x_type'),
       "color": red_light,
       "children": [{
         "name": I18n.t('nutrition.1_children.6_children.0_children.name'),
         "x_recommended": I18n.t('nutrition.1_children.6_children.0_children.x_recommended'),
         "color": red_dark,
         "children": [
           {"name": I18n.t('nutrition.1_children.6_children.0_children.0_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.6_children.0_children.1_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.6_children.0_children.2_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.6_children.0_children.3_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.6_children.0_children.4_children.name'), "size": 100},
         ]
         },{
         "name": I18n.t('nutrition.1_children.6_children.1_children.name'),
         "x_recommended": I18n.t('nutrition.1_children.6_children.1_children.x_recommended'),
         "color": red_dark,
         "children": [
           {"name": I18n.t('nutrition.1_children.6_children.1_children.0_children.name'), "size": 50},
           {"name": I18n.t('nutrition.1_children.6_children.1_children.1_children.name'), "size": 50},
           {"name": I18n.t('nutrition.1_children.6_children.1_children.2_children.name'), "size": 50},
           {"name": I18n.t('nutrition.1_children.6_children.1_children.3_children.name'), "size": 50},
           {"name": I18n.t('nutrition.1_children.6_children.1_children.4_children.name'), "size": 50},
           {"name": I18n.t('nutrition.1_children.6_children.1_children.5_children.name'), "size": 50},
           {"name": I18n.t('nutrition.1_children.6_children.1_children.6_children.name'), "size": 50},
           {"name": I18n.t('nutrition.1_children.6_children.1_children.7_children.name'), "size": 50},
           {"name": I18n.t('nutrition.1_children.6_children.1_children.8_children.name'), "size": 50},
           {"name": I18n.t('nutrition.1_children.6_children.1_children.9_children.name'), "size": 50},
          ]
         },{
         "name": I18n.t('nutrition.1_children.6_children.2_children.name'),
         "x_recommended": I18n.t('nutrition.1_children.6_children.2_children.x_recommended'),
         "color": red_dark,
         "children": [
           {"name": I18n.t('nutrition.1_children.6_children.2_children.0_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.6_children.2_children.1_children.name'), "size": 10},
          ]
        }]
     },{
       "name": I18n.t('nutrition.1_children.7_children.name'),
       "x_type": I18n.t('nutrition.1_children.7_children.x_type'),
       "color": red_light,
       "children": [{
         "name": I18n.t('nutrition.1_children.7_children.0_children.name'),
         "x_recommended": I18n.t('nutrition.1_children.7_children.0_children.x_recommended'),
         "color": red_dark,
         "children": [
           {"name": I18n.t('nutrition.1_children.7_children.0_children.0_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.7_children.0_children.1_children.name'), "size": 100},
         ]
         },{
         "name": I18n.t('nutrition.1_children.7_children.1_children.name'),
         "x_recommended": I18n.t('nutrition.1_children.7_children.1_children.x_recommended'),
         "color": red_dark,
         "children": [
           {"name": I18n.t('nutrition.1_children.7_children.1_children.0_children.name'), "size": 50},
           {"name": I18n.t('nutrition.1_children.7_children.1_children.1_children.name'), "size": 50},
           {"name": I18n.t('nutrition.1_children.7_children.1_children.2_children.name'), "size": 50},
           {"name": I18n.t('nutrition.1_children.7_children.1_children.3_children.name'), "size": 50},
          ]
         },{
         "name": I18n.t('nutrition.1_children.6_children.2_children.name'),
         "x_recommended": I18n.t('nutrition.1_children.6_children.2_children.x_recommended'),
         "color": red_dark,
         "children": [
           {"name": I18n.t('nutrition.1_children.7_children.2_children.0_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.7_children.2_children.1_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.7_children.2_children.2_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.7_children.2_children.3_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.7_children.2_children.4_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.7_children.2_children.5_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.7_children.2_children.6_children.name'), "size": 10},
           {"name": I18n.t('nutrition.1_children.7_children.2_children.7_children.name'), "size": 10},
          ]
        }]
     },{
       "name": I18n.t('nutrition.1_children.8_children.name'),
       "x_type": I18n.t('nutrition.1_children.8_children.x_type'),
       "color": red_light,
       "children": [{
         "name": I18n.t('nutrition.1_children.8_children.0_children.name'),
         "x_recommended": I18n.t('nutrition.1_children.8_children.0_children.x_recommended'),
         "color": red_dark,
         "children": [
           {"name": I18n.t('nutrition.1_children.8_children.0_children.0_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.8_children.0_children.1_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.8_children.0_children.2_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.8_children.0_children.3_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.8_children.0_children.4_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.8_children.0_children.5_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.8_children.0_children.6_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.8_children.0_children.7_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.8_children.0_children.8_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.8_children.0_children.9_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.8_children.0_children.10_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.8_children.0_children.11_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.8_children.0_children.12_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.8_children.0_children.13_children.name'), "size": 100},
           {"name": I18n.t('nutrition.1_children.8_children.0_children.14_children.name'), "size": 100},
         ]
         },{
         "name": I18n.t('nutrition.1_children.7_children.1_children.name'),
         "x_recommended": I18n.t('nutrition.1_children.7_children.1_children.x_recommended'),
         "color": red_dark,
         "children": [
           {"name": I18n.t('nutrition.1_children.8_children.1_children.0_children.name'), "size": 50},
           {"name": I18n.t('nutrition.1_children.8_children.1_children.1_children.name'), "size": 50},
          ]
         },{
         "name": I18n.t('nutrition.1_children.6_children.2_children.name'),
         "x_recommended": I18n.t('nutrition.1_children.6_children.2_children.x_recommended'),
         "color": red_dark,
         "children": [
           {"name": I18n.t('nutrition.1_children.8_children.2_children.0_children.name'), "size": 10},
          ]
        }]
     }

   ]
  },


  {
    "name": I18n.t('nutrition.2_children.name'),
    "color": blue,
    "children": [{
       "name": I18n.t('nutrition.2_children.0_children.name'),
       "x_type": I18n.t('nutrition.2_children.0_children.x_type'),
       "color": blue_light,
       "children": [{
         "name": I18n.t('nutrition.2_children.0_children.0_children.name'),
         "x_recommended": I18n.t('nutrition.2_children.0_children.0_children.x_recommended'),
         "color": blue_dark,
         "children": [
           {"name": I18n.t('nutrition.2_children.0_children.0_children.0_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.0_children.0_children.1_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.0_children.0_children.2_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.0_children.0_children.3_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.0_children.0_children.4_children.name'), "size": 100},
         ]
         },{
         "name": I18n.t('nutrition.2_children.0_children.1_children.name'),
         "x_recommended": I18n.t('nutrition.2_children.0_children.1_children.x_recommended'),
         "color": blue_dark,
         "children": [
           {"name": I18n.t('nutrition.2_children.0_children.1_children.0_children.name'), "size": 50},
          ]
         },{
         "name": I18n.t('nutrition.2_children.0_children.2_children.name'),
         "x_recommended": I18n.t('nutrition.2_children.0_children.2_children.x_recommended'),
         "color": blue_dark,
         "children": [
           {"name": I18n.t('nutrition.2_children.0_children.2_children.0_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.0_children.2_children.1_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.0_children.2_children.2_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.0_children.2_children.3_children.name'), "size": 10},
          ]
        }]
     },{
       "name": I18n.t('nutrition.2_children.1_children.name'),
       "x_type": I18n.t('nutrition.2_children.1_children.x_type'),
       "color": blue_light,
       "children": [{
         "name": I18n.t('nutrition.2_children.1_children.0_children.name'),
         "x_recommended": I18n.t('nutrition.2_children.1_children.0_children.x_recommended'),
         "color": blue_dark,
         "children": [
           {"name": I18n.t('nutrition.2_children.1_children.0_children.0_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.1_children.0_children.1_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.1_children.0_children.2_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.1_children.0_children.3_children.name'), "size": 100},
         ]
         },{
         "name": I18n.t('nutrition.2_children.1_children.1_children.name'),
         "x_recommended": I18n.t('nutrition.2_children.1_children.1_children.x_recommended'),
         "color": blue_dark,
         "children": [
           {"name": I18n.t('nutrition.2_children.1_children.1_children.0_children.name'), "size": 50},
           {"name": I18n.t('nutrition.2_children.1_children.1_children.1_children.name'), "size": 50},
          ]
         },{
         "name": I18n.t('nutrition.2_children.1_children.2_children.name'),
         "x_recommended": I18n.t('nutrition.2_children.1_children.2_children.x_recommended'),
         "color": blue_dark,
         "children": [
           {"name": I18n.t('nutrition.2_children.1_children.2_children.0_children.name'), "size": 10},
          ]
        }]
     },{
       "name": I18n.t('nutrition.2_children.2_children.name'),
       "x_type": I18n.t('nutrition.2_children.2_children.x_type'),
       "color": blue_light,
       "children": [{
         "name": I18n.t('nutrition.2_children.2_children.0_children.name'),
         "x_recommended": I18n.t('nutrition.2_children.2_children.0_children.x_recommended'),
         "color": blue_dark,
         "children": [
           {"name": I18n.t('nutrition.2_children.2_children.0_children.0_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.2_children.0_children.1_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.2_children.0_children.2_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.2_children.0_children.3_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.2_children.0_children.4_children.name'), "size": 100},
         ]
         },{
         "name": I18n.t('nutrition.2_children.2_children.1_children.name'),
         "x_recommended": I18n.t('nutrition.2_children.2_children.1_children.x_recommended'),
         "color": blue_dark,
         "children": [
           {"name": I18n.t('nutrition.2_children.2_children.1_children.0_children.name'), "size": 50},
           {"name": I18n.t('nutrition.2_children.2_children.1_children.1_children.name'), "size": 50},
           {"name": I18n.t('nutrition.2_children.2_children.1_children.2_children.name'), "size": 50},
           {"name": I18n.t('nutrition.2_children.2_children.1_children.3_children.name'), "size": 50},
          ]
         },{
         "name": I18n.t('nutrition.2_children.2_children.2_children.name'),
         "x_recommended": I18n.t('nutrition.2_children.2_children.2_children.x_recommended'),
         "color": blue_dark,
         "children": [
           {"name": I18n.t('nutrition.2_children.2_children.2_children.0_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.2_children.2_children.1_children.name'), "size": 10},
          ]
        }]
     },{
       "name": I18n.t('nutrition.2_children.3_children.name'),
       "x_type": I18n.t('nutrition.2_children.3_children.x_type'),
       "color": blue_light,
       "children": [{
         "name": I18n.t('nutrition.2_children.3_children.0_children.name'),
         "x_recommended": I18n.t('nutrition.2_children.3_children.0_children.x_recommended'),
         "color": blue_dark,
         "children": [
           {"name": I18n.t('nutrition.2_children.3_children.0_children.0_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.3_children.0_children.1_children.name'), "size": 100},
         ]
         },{
         "name": I18n.t('nutrition.2_children.2_children.1_children.name'),
         "x_recommended": I18n.t('nutrition.2_children.2_children.1_children.x_recommended'),
         "color": blue_dark,
         "children": [
           {"name": I18n.t('nutrition.2_children.3_children.1_children.0_children.name'), "size": 50},
           {"name": I18n.t('nutrition.2_children.3_children.1_children.1_children.name'), "size": 50},
           {"name": I18n.t('nutrition.2_children.3_children.1_children.2_children.name'), "size": 50},
          ]
         },{
         "name": I18n.t('nutrition.2_children.2_children.2_children.name'),
         "x_recommended": I18n.t('nutrition.2_children.2_children.2_children.x_recommended'),
         "color": blue_dark,
         "children": [
           {"name": I18n.t('nutrition.2_children.3_children.2_children.0_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.3_children.2_children.1_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.3_children.2_children.2_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.3_children.2_children.3_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.3_children.2_children.4_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.3_children.2_children.5_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.3_children.2_children.6_children.name'), "size": 10},
          ]
        }]
     },{
       "name": I18n.t('nutrition.2_children.4_children.name'),
       "x_type": I18n.t('nutrition.2_children.4_children.x_type'),
       "color": blue_light,
       "children": [{
         "name": I18n.t('nutrition.2_children.4_children.0_children.name'),
         "x_recommended": I18n.t('nutrition.2_children.4_children.0_children.x_recommended'),
         "color": blue_dark,
         "children": [
           {"name": I18n.t('nutrition.2_children.4_children.0_children.0_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.4_children.0_children.1_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.4_children.0_children.2_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.4_children.0_children.3_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.4_children.0_children.4_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.4_children.0_children.5_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.4_children.0_children.6_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.4_children.0_children.7_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.4_children.0_children.8_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.4_children.0_children.9_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.4_children.0_children.10_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.4_children.0_children.11_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.4_children.0_children.12_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.4_children.0_children.13_children.name'), "size": 100},
         ]
         },{
         "name": I18n.t('nutrition.2_children.2_children.1_children.name'),
         "x_recommended": I18n.t('nutrition.2_children.4_children.0_children.x_recommended'),
         "color": blue_dark,
         "children": [
           {"name": I18n.t('nutrition.2_children.4_children.1_children.0_children.name'), "size": 50},
           {"name": I18n.t('nutrition.2_children.4_children.1_children.1_children.name'), "size": 50},
           {"name": I18n.t('nutrition.2_children.4_children.1_children.2_children.name'), "size": 50},
           {"name": I18n.t('nutrition.2_children.4_children.1_children.3_children.name'), "size": 50},
           {"name": I18n.t('nutrition.2_children.4_children.1_children.4_children.name'), "size": 50},
           {"name": I18n.t('nutrition.2_children.4_children.1_children.5_children.name'), "size": 50},
           {"name": I18n.t('nutrition.2_children.4_children.1_children.6_children.name'), "size": 50},
           {"name": I18n.t('nutrition.2_children.4_children.1_children.7_children.name'), "size": 50},
           {"name": I18n.t('nutrition.2_children.4_children.1_children.8_children.name'), "size": 50},
           {"name": I18n.t('nutrition.2_children.4_children.1_children.9_children.name'), "size": 50},
           {"name": I18n.t('nutrition.2_children.4_children.1_children.10_children.name'), "size": 50},
           {"name": I18n.t('nutrition.2_children.4_children.1_children.11_children.name'), "size": 50},
           {"name": I18n.t('nutrition.2_children.4_children.1_children.12_children.name'), "size": 50},
           {"name": I18n.t('nutrition.2_children.4_children.1_children.13_children.name'), "size": 50},
           {"name": I18n.t('nutrition.2_children.4_children.1_children.14_children.name'), "size": 50},
          ]
         },{
         "name": I18n.t('nutrition.2_children.2_children.2_children.name'),
         "x_recommended": I18n.t('nutrition.2_children.4_children.0_children.x_recommended'),
         "color": blue_dark,
         "children": [
           {"name": I18n.t('nutrition.2_children.4_children.2_children.0_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.4_children.2_children.1_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.4_children.2_children.2_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.4_children.2_children.3_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.4_children.2_children.4_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.4_children.2_children.5_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.4_children.2_children.6_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.4_children.2_children.7_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.4_children.2_children.8_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.4_children.2_children.9_children.name'), "size": 10},
          ]
        }]
     },{
       "name": I18n.t('nutrition.2_children.5_children.name'),
       "x_type": I18n.t('nutrition.2_children.5_children.x_type'),
       "color": blue_light,
       "children": [{
         "name": I18n.t('nutrition.2_children.5_children.0_children.name'),
         "x_recommended": I18n.t('nutrition.2_children.5_children.0_children.x_recommended'),
         "color": blue_dark,
         "children": [
           {"name": I18n.t('nutrition.2_children.5_children.0_children.0_children.name'), "size": 100},
         ]
         },{
         "name": I18n.t('nutrition.2_children.5_children.1_children.name'),
         "x_recommended": I18n.t('nutrition.2_children.5_children.1_children.x_recommended'),
         "color": blue_dark,
         "children": [
           {"name": I18n.t('nutrition.2_children.5_children.1_children.0_children.name'), "size": 50},
           {"name": I18n.t('nutrition.2_children.5_children.1_children.1_children.name'), "size": 50},
           {"name": I18n.t('nutrition.2_children.5_children.1_children.2_children.name'), "size": 50},
          ]
         },{
         "name": I18n.t('nutrition.2_children.5_children.2_children.name'),
         "x_recommended": I18n.t('nutrition.2_children.5_children.2_children.x_recommended'),
         "color": blue_dark,
         "children": [
           {"name": I18n.t('nutrition.2_children.5_children.2_children.0_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.5_children.2_children.1_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.5_children.2_children.2_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.5_children.2_children.3_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.5_children.2_children.4_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.5_children.2_children.5_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.5_children.2_children.6_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.5_children.2_children.7_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.5_children.2_children.8_children.name'), "size": 10},
          ]
        }]
     },{
       "name": I18n.t('nutrition.2_children.6_children.name'),
       "x_type": I18n.t('nutrition.2_children.6_children.x_type'),
       "color": blue_light,
       "children": [{
         "name": I18n.t('nutrition.2_children.6_children.0_children.name'),
         "x_recommended": I18n.t('nutrition.2_children.6_children.0_children.x_recommended'),
         "color": blue_dark,
         "children": [
           {"name": I18n.t('nutrition.2_children.6_children.0_children.0_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.6_children.0_children.1_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.6_children.0_children.2_children.name'), "size": 100},
         ]
         },{
         "name": I18n.t('nutrition.2_children.6_children.1_children.name'),
         "x_recommended": I18n.t('nutrition.2_children.6_children.1_children.x_recommended'),
         "color": blue_dark,
         "children": [
           {"name": I18n.t('nutrition.2_children.6_children.1_children.0_children.name'), "size": 50},
           {"name": I18n.t('nutrition.2_children.6_children.1_children.1_children.name'), "size": 50},
           {"name": I18n.t('nutrition.2_children.6_children.1_children.2_children.name'), "size": 50},
           {"name": I18n.t('nutrition.2_children.6_children.1_children.3_children.name'), "size": 50},
           {"name": I18n.t('nutrition.2_children.6_children.1_children.4_children.name'), "size": 50},
           {"name": I18n.t('nutrition.2_children.6_children.1_children.5_children.name'), "size": 50},
           {"name": I18n.t('nutrition.2_children.6_children.1_children.6_children.name'), "size": 50},
          ]
         },{
         "name": I18n.t('nutrition.2_children.5_children.2_children.name'),
         "x_recommended": I18n.t('nutrition.2_children.5_children.2_children.x_recommended'),
         "color": blue_dark,
         "children": [
           {"name": I18n.t('nutrition.2_children.6_children.2_children.0_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.6_children.2_children.1_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.6_children.2_children.2_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.6_children.2_children.3_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.6_children.2_children.4_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.6_children.2_children.5_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.6_children.2_children.6_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.6_children.2_children.7_children.name'), "size": 10},
          ]
        }]
     },{
       "name": I18n.t('nutrition.2_children.7_children.name'),
       "x_type": I18n.t('nutrition.2_children.7_children.x_type'),
       "color": blue_light,
       "children": [{
         "name": I18n.t('nutrition.2_children.7_children.0_children.name'),
         "x_recommended": I18n.t('nutrition.2_children.7_children.0_children.x_recommended'),
         "color": blue_dark,
         "children": [
           {"name": I18n.t('nutrition.2_children.7_children.0_children.0_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.7_children.1_children.1_children.name'), "size": 100},
         ]
         },{
         "name": I18n.t('nutrition.2_children.7_children.1_children.name'),
         "x_recommended": I18n.t('nutrition.2_children.7_children.1_children.x_recommended'),
         "color": blue_dark,
         "children": [
           {"name": I18n.t('nutrition.2_children.7_children.1_children.0_children.name'), "size": 50},
           {"name": I18n.t('nutrition.2_children.7_children.1_children.1_children.name'), "size": 50},
           {"name": I18n.t('nutrition.2_children.7_children.1_children.2_children.name'), "size": 50},
           {"name": I18n.t('nutrition.2_children.7_children.1_children.3_children.name'), "size": 50},
          ]
         },{
         "name": I18n.t('nutrition.2_children.7_children.2_children.name'),
         "x_recommended": I18n.t('nutrition.2_children.7_children.2_children.x_recommended'),
         "color": blue_dark,
         "children": [
           {"name": I18n.t('nutrition.2_children.7_children.2_children.0_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.7_children.2_children.1_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.7_children.2_children.2_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.7_children.2_children.3_children.name'), "size": 10},
           {"name": I18n.t('nutrition.2_children.7_children.2_children.4_children.name'), "size": 10},
          ]
        }]
     },{
       "name": I18n.t('nutrition.2_children.8_children.name'),
       "x_type": I18n.t('nutrition.2_children.8_children.x_type'),
       "color": blue_light,
       "children": [{
         "name": I18n.t('nutrition.2_children.8_children.0_children.name'),
         "x_recommended": I18n.t('nutrition.2_children.8_children.0_children.x_recommended'),
         "color": blue_dark,
         "children": [
           {"name": I18n.t('nutrition.2_children.8_children.0_children.0_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.8_children.0_children.1_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.8_children.0_children.2_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.8_children.0_children.3_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.8_children.0_children.4_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.8_children.0_children.5_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.8_children.0_children.6_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.8_children.0_children.7_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.8_children.0_children.8_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.8_children.0_children.9_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.8_children.0_children.10_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.8_children.0_children.11_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.8_children.0_children.12_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.8_children.0_children.13_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.8_children.0_children.14_children.name'), "size": 100},
           {"name": I18n.t('nutrition.2_children.8_children.0_children.15_children.name'), "size": 100},
         ]
         },{
         "name": I18n.t('nutrition.2_children.7_children.1_children.name'),
         "x_recommended": I18n.t('nutrition.2_children.7_children.1_children.x_recommended'),
         "color": blue_dark,
         "children": [
           {"name": I18n.t('nutrition.2_children.8_children.1_children.0_children.name'), "size": 50},
          ]
         },{
         "name": I18n.t('nutrition.2_children.8_children.2_children.name'),
         "x_recommended": I18n.t('nutrition.2_children.8_children.2_children.x_recommended'),
         "color": blue_dark,
         "children": [
           {"name": I18n.t('nutrition.2_children.8_children.2_children.0_children.name'), "size": 10},
          ]
        }]
     }

   ]
  }

 ]
}
