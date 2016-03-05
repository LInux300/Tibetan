// var survey = new Survey.Survey({title: "Simple survey example",
//                 triggers: [{ type: "visible", name: "used", operator: "eq", value: "Yes", questions: ["solution"] }],
//                 questions: [
//                     { type: "radiogroup", name: "used", title: "Have you been running a survey on your site(s)?", isRequired: true,
//                     choices: ["Yes", "No"]},
//                     { type: "checkbox", name: "solution", title: "What do you use to run survey?",
//                         visible: false, isRequired: true, hasOther: true,
//                         choices: ["custom|Custom solution", "Survey Monkey", "Survey Gizmo"]},
//                     { type: "comment", name: "description", title: "Please tell us, what do you need from a Survey Library?" }]
// }, "surveyContainer");

// example ok multipletext matrix
// var survey = new Survey.Survey(
// {pages:[{name:"page1",questions:[{type:"matrix",columns:[{value:"B",text:"Column 1"},{value:"F",text:"Column 2"},{value:"W",text:"Column 3"}],name:"How old are you?",rows:["Row 1","Row 2"]}]}]});
// survey.onComplete.add(function (s) {
//  alert("The results are:" + JSON.stringify(s.data));
//  });
// survey.render("surveyContainer");

// multiple text
// var survey = new Survey.Survey(
// {pages:[{name:"page1",questions:[{type:"multipletext",items:[{name:"tongue",title:"Tongue"},{name:"eyes",title:"Eyes"},{name:"ears",title:"Ears"},{name:"nose and lips",title:"Nose and Lips"},{name:"skin",title:"Skin"}],name:"Examination of the five sensory organs",validators:[{type:"text",minLength:"1",text:"please fill in"}]}]}]});
// survey.onComplete.add(function (s) {
//  alert("The results are:" + JSON.stringify(s.data));
//  });
// survey.render("surveyContainer");


//  // rating
// var survey = new Survey.Survey(
// {pages:[{name:"page1",questions:[{type:"rating",hasComment:true,name:"Medical Rating",rateValues:[{value:"1",text:"1"},{value:"2",text:"2"},{value:"3",text:"3"},{value:"4",text:"4"},{value:"5",text:"5"},{value:"6",text:"6"},{value:"7",text:"7"},{value:"8",text:"8"},{value:"9",text:"9"},{value:"10",text:"10"}],validators:[{type:"numeric"}]}]}]});
// survey.onComplete.add(function (s) {
//  alert("The results are:" + JSON.stringify(s.data));
//  });
// survey.render("surveyContainer");
//
// // text
// var survey = new Survey.Survey(
// {pages:[{name:"page1",questions:[{type:"text",isRequired:true,name:"Comment",size:"50"}]}]});
// survey.onComplete.add(function (s) {
//  alert("The results are:" + JSON.stringify(s.data));
//  });
// survey.render("surveyContainer");
//
// var survey = new Survey.Survey(
// {pages:[{name:"page1",questions:[{type:"comment",name:"Comment",validators:[{type:"text",minLength:"10"}]}]}]});
// survey.onComplete.add(function (s) {
//  alert("The results are:" + JSON.stringify(s.data));
//  });
// survey.render("surveyContainer");
//
//
// var survey = new Survey.Survey(
// {pages:[{name:"Tibetan",questions:[{type:"radiogroup",choices:[{value:"",text:"0-5"},{value:"W",text:"5-25"},{value:"F",text:"25-60"},{value:"A",text:"60+"}],colCount:4,name:"How old are you?",otherText:"5 - 25 years"},{type:"checkbox",choices:[{value:"A",text:"Ectomorph"},{value:"F",text:"Mesomorph"},{value:"W",text:"Endomorph"}],choicesOrder:"random",colCount:3,name:"Which body type fits you most closely?"},{type:"checkbox",choices:[{value:"A",text:"Cool and Dry"},{value:"F",text:"Hot and Dry"},{value:"W",text:"Cold and Wet"}],choicesOrder:"random",colCount:3,name:"Which of the following climates generally does not agree with your health?"},{type:"checkbox",choices:["one",{value:"two",text:"second value"},{value:3,text:"third value"}],name:"question1"}],title:"Tibetan title"}]});
// survey.onComplete.add(function (s) {
//  alert("The results are:" + JSON.stringify(s.data));
//  });
// survey.render("surveyContainer");

// var survey = new Survey.Survey(
// {pages:[{name:"page1",questions:[
//   {type:"checkbox",choices:[
//       {value:"1",text:"one"},
//       {value:"2",text:"second value"},
//       {value:3,text:"third value"}],
//     choicesOrder:"random",
//     colCount:3,
//     hasOther:true,
//     isRequired:true,
//     name:"question1 name",
//     otherErrorText:"errot text",
//     otherText:"Other (describe) ",
//     title:"question1 title"}
//   ]}]}
// );
// survey.onComplete.add(function (s) {
//  alert("The results are:" + JSON.stringify(s.data));
//  });
// survey.render("surveyContainer");

// var surveyWindow = new Survey.SurveyWindow(
// {pages:[{name:"page1",questions:[{type:"checkbox",choices:[{value:"1",text:"one"},{value:"2",text:"second value"},{value:3,text:"third value"}],choicesOrder:"random",colCount:3,hasOther:true,isRequired:true,name:"question1 name",otherErrorText:"errot text",otherText:"Other (describe) ",title:"question1 title",validators:[{type:"text",minLength:"10",text:"10"}]},{type:"matrix",columns:["Column 1","Column 2","Column 3"],name:"question1",rows:["Row 1","Row 2"]}]},{name:"page2"}]});
// surveyWindow.survey.onComplete.add(function (s) {
//  alert("The results are:" + JSON.stringify(s.data));
//  });
// //surveyWindow.title = "My Survey Window Title."; //By default Survey.title is used.
// surveyWindow.show();
$(document).ready(function() {

var green = '#009A31',
    blue = '#008CBA',
    red = '#E8110F';


//  TODO questions 36-39
var surveys = [
  ['0_survey', [[2, 20]]],
  ['1_survey', [[21, 29]]],
  ['2_survey', [
                 [41, 49],
                 [50, 53],
                 [54, 54]
  ]],
  ['3_survey', [[30, 35]]],
  ['4_survey', [[40, 40]]]
];

$.each(surveys, function(i, survey) {
  $.each(survey[1], function(index2, questions_from_to) {
    createSurvey(survey[0], index2, questions_from_to)
  });
});

function createSurvey(survey, index, questions_from_to) {
  var question_ids = new Array,
      survey_from = questions_from_to[0],
      survey_to = questions_from_to[1],
      div_id = survey + '_' + index;
  var survey_render = surveyRender(
    groupQuestions(div_id, question_ids, survey_from, survey_to),
    div_id
  );
  surveyOnComplete(survey_render, div_id);
}

function groupQuestions(div_id, questions, survey_from, survey_to) {
  if (div_id == '0_survey_0') {
    questions = questionsRadioGroup(questions);
  };
  questions = questionsCheckBox(questions, survey_from, survey_to);
  return questions;
};

function questionsRadioGroup(surveys) {
  surveys.push(
    {type:"radiogroup",choices:[
        {value: I18n.t('survey.1_question.04_choice_value'),
          text: I18n.t('survey.1_question.04_choice_text')},
        {value: I18n.t('survey.1_question.01_choice_value'),
          text: I18n.t('survey.1_question.01_choice_text')},
        {value: I18n.t('survey.1_question.02_choice_value'),
          text: I18n.t('survey.1_question.02_choice_text')},
        {value: I18n.t('survey.1_question.03_choice_value'),
          text: I18n.t('survey.1_question.03_choice_text')}
      ],
      colCount:4,
      name: I18n.t('survey.1_question.name'),
      title: I18n.t('survey.1_question.title'),
      isRequired:false,
      otherText: I18n.t('survey.1_question.otherText')}
  );
  return surveys;
};

// TODO surveys ids get array of ids instead of from to
function questionsCheckBox(surveys, survey_from, survey_to) {
  for (i = survey_from; i <= survey_to; i++) {
    var name = 'survey.' + i;
    surveys.push({
      type:"checkbox",choices:[
        { value: I18n.t(name + '_question.01_choice_value'),
          text: I18n.t(name + '_question.01_choice_text')},
        { value: I18n.t(name + "_question.02_choice_value"),
          text: I18n.t(name + "_question.02_choice_text")},
        { value: I18n.t(name + "_question.03_choice_value"),
          text: I18n.t(name + "_question.03_choice_text")}],
        choicesOrder:"random",
      colCount:3,
      name: I18n.t(name + "_question.name"),
      title: I18n.t(name + "_question.title"),
      otherText: I18n.t(name + "_question.other_text")
    });
  };
  return surveys;
};

function surveyRender(my_questions, survey_div_id) {
  var survey = new Survey.Survey(
    {pages:[{name:"Tibetan",questions:my_questions, title:"" }]}
  );
  survey.render(survey_div_id);
  return survey;
};

function goToByScroll(id) {
      // Remove "link" from the ID
    id = id.replace("link", "");
      // Scroll
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top},
        'slow');
};

function surveyOnComplete(survey, div_id) {
  survey.onComplete.add(function (s) {

    multi_answers = $.parseJSON(JSON.stringify(s.data));

    if ( $.isEmptyObject(multi_answers) == true ) {
      return alert(I18n.t('survey.please_answer_questions'));
    } else {
      document.getElementById(div_id).innerHTML = '';

      goToByScroll(div_id);

      console.log("multi ans"+multi_answers);
      counter = countAnswers(multi_answers);
      // create_type_divs = createTypeDivs(div_id, counter);

      // pieChart(div_id, JSON.stringify(s.data));
      donutChart(div_id, counter);
      addSurveyMenu(div_id);

      // s.sendResult('e544a02f-7fff-4ffb-b62d-6a9aa16efd7c');
    };
  });
};

function countAnswers(multi_answers) {
  var counter = {};

  // mix_answer is "F" or ["F"]
  $.each(multi_answers, function(answer_id, mix_answer) {
    if ($.isArray(mix_answer)) {
      $.each(mix_answer, function(i2, answer_type) {
        counter[answer_type] = counter[answer_type] ? ++counter[answer_type] : 1;
        // create_type_divs = createTypeDivs(answer, i);
        create_type_divs = createTypeDivs(answer_id, answer_type);
      });
    } else if ($.type(mix_answer) === "string") {
      counter[mix_answer] = counter[mix_answer] ? ++counter[mix_answer] : 1;
      create_type_divs = createTypeDivs(answer_id, mix_answer);
    };
  });

  return counter;
};


function createTypeDivs(answer_id, answer_type) {
  console.log("answer_type"+answer_type);
  console.log("answer id"+answer_id);
  var div = document.createElement('div');

};

function addSurveyMenu(div_id) {
    var div = document.createElement('div');

    div.className = 'sv_nav';
    div.innerHTML = '\
      <input type="button" class="" data-index="0" onclick="showAnswers(this)" value="'+
        I18n.t("survey.0_answers_0.0_data_content_label") +'" />\
      <input type="button" class="" data-index="1" value="'+
        I18n.t("survey.0_answers_0.1_data_content_label") +'" />\
      <input type="button" class="" data-index="2" value="'+
        I18n.t("survey.0_answers_0.2_data_content_label") +'" />\
      <input type="button" value="-" onclick="removeRow(this)">\
    ';
     document.getElementById(div_id).appendChild(div);
}
// function addSurveyMenu(div_id) {
//   var s = '\
//     <input type="button" class="openSegmentBtn" data-index="0" value="Air" />\
//     <input type="button" class="openSegmentBtn" data-index="1" value="Fire" />\
//     <input type="button" class="openSegmentBtn" data-index="2" value="Water" />\
//     <input type="button" value="-" onclick="removeRow(this)">\
//   ';
//   var htmlObj = $(s);
//   htmlObj.appendChild(div_id).html();
// }

function removeSurveyMenu(input) {
    document.getElementById(div_id).removeChild( input.parentNode );
}

function surveyOnSendResult(survey) {
  survey.onSendResult.add(function(s, options) {
    if(options.success) {
      s.getResult('d72c2b05-2449-4838-99b2-c3f0ec76da7a', 'solution');
    }
  });
}

function surveyOnGetResult(survey) {
  survey.onGetResult.add(function(s, options) {
    if(options.success) {
      showChart(options.dataList);
    }
  });
}

$(function() {
	// pieChart();
	// assign event handlers for the demo
	$("#destroyBtn").on("click", function(e) {
		if (pie !== null) {
			pie.destroy();
			pie = null;
		}
	});
	$("#recreateBtn").on("click", function(e) {
		// createSurvey('4_survey', 8, [40, 40, '']);
	});
	$("#refreshBtn").on("click", function(e) {
		// pie.redraw();
	});

  $(".openSegmentBtn").on("click", function(e) {
		var index = parseInt($(e.target).data("index"), 10);
		pie.openSegment(index);
	});
});

function pieChart(div_id, dataSet) {
  var pie = new d3pie(div_id, {
  	header: {
  		title: {
  			text: "Another Pie"
  		}
  	},
  	data: {
  		content: [
  			{ label: "One", value: 264131 },
  			{ label: "Two", value: 218812 },
  			{ label: "Three", value: 157618}
  		]
  	},
  	callbacks: {
  		onClickSegment: function(a) {
  			alert("Segment clicked! See the console for all data passed to the click handler.");
  			console.log(a);
  		},
      onMouseoverSegment: function(info) {
  			console.log("mouseover:", info);
  		},
  		onMouseoutSegment: function(info) {
  			console.log("mouseout:", info);
  		}
  	}
  });
}

function donutChart(div_id, counter) {
  var pie = new d3pie(div_id, {
    "header": {
      "title": {
        "text": I18n.t('survey.'+div_id+'.topic'),
        "fontSize": 22,
        "font": "verdana"
      },
      "subtitle": {
        "text": I18n.t('survey.'+div_id+'.subtitle'),
        "color": "#999999",
        "fontSize": 12,
        "font": "verdana"
      },
      "titleSubtitlePadding": 6
    },
    "footer": {
      "text":  I18n.t('survey.'+div_id+'.footer'),
      "color": "#999999",
      "fontSize": 12,
      "font": "open sans",
      "location": "bottom-left"
    },
    "size": {
      "canvasHeight": 450,
      "canvasWidth": 875,
      "pieInnerRadius": "30%",
      "pieOuterRadius": "80%"
    },
    "data": {
      "sortOrder": "label-desc",
      "smallSegmentGrouping": {
        "enabled": true
      },
      "content": [
        {
          "label": I18n.t('survey.0_answers_0.0_data_content_label'),
          "value": counter['A'],
          "color": green
        },
        {
          "label": I18n.t('survey.0_answers_0.1_data_content_label'),
          "value": counter['F'],
          "color": red
        },
        {
          "label": I18n.t('survey.0_answers_0.2_data_content_label'),
          "value": counter['W'],
          "color": blue
        }
      ]
    },
    "labels": {
      "outer": {
        "pieDistance": 15
      },
      "inner": {
        "format": "none",
        "hideWhenLessThanPercentage": 3
      },
      "mainLabel": {
        "fontSize": 12,
        "color": "#000000",
        "font": "verdana"
      },
      "percentage": {
        "fontSize": 12,
        "color": "#ffffff",
        "font": "verdana",
        "decimalPlaces": 1
      },
      "value": {
        "fontSize": 12,
        "color": "#000000",
        "font": "verdana"
      },
      "lines": {
        "enabled": true,
        "style": "straight"
      },
      "truncation": {
        "enabled": true,
        "truncateLength": 20
      }
    },
    "tooltips": {
      "enabled": true,
      "type": "placeholder",
      "string": "{label}: {value}, {percentage}%",
      "styles": {
        "fadeInSpeed": 500,
        "backgroundOpacity": 0.4,
        "borderRadius": 5,
        "fontSize": 14,
        "padding": 6
      }
    },
    "effects": {
      "load": {
        "speed": 1500
      },
      "pullOutSegmentOnClick": {
        "effect": "linear",
        "speed": 500,
        "size": 8
      }
    },
    "misc": {
      "pieCenterOffset": {
      }
    },
    "callbacks": {
      'onload': null,
      'onMouseoverSegment': null,
      'onMouseoutSegment': null,
      'onClickSegment': null
    }
  });
}


});
