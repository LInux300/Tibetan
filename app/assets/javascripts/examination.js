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


//  TODO questions 36-39
var surveys = [
  ['0_survey', [[2, 20, '']]],
  ['1_survey', [[21, 29, '']]],
  ['2_survey', [
                 [41, 49, 'Urine Checks'],
                 [50, 53, 'Tongue Checks'],
                 [54, 54, 'Eyes Checks']
  ]],
  ['3_survey', [[30, 35, '']]],
  ['4_survey', [[40, 40, '']]]
];

$.each(surveys, function(i, survey) {
  $.each(survey[1], function(index2, questions_from_to) {
    createSurvey(survey[0], index2, questions_from_to)
  });
});

function createSurvey(survey, index, questions_from_to) {
  var questions = new Array,
      survey_from = questions_from_to[0],
      survey_to = questions_from_to[1],
      div_id = survey + '_' + index;
  questions = groupQuestions(div_id, questions, survey_from, survey_to);
  var survey_render = surveyRender(questions, div_id);
  surveyOnComplete(survey_render, div_id);
}

function groupQuestions(div_id, questions, survey_from, survey_to) {
  if (div_id == '0_survey_0') {
    questions = questionsRadioGroup(questions);
  }
  questions = questionsCheckBox(questions, survey_from, survey_to);
  return questions
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
  )
  return surveys
}

function questionsCheckBox(surveys, survey_from, survey_to) {
  for (i = survey_from; i <= survey_to; i++) {
    var name = 'survey.' + i;
    surveys.push(
      {type:"checkbox",choices:[
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
      otherText: I18n.t(name + "_question.other_text") }
    )
  }
  return surveys
}

function surveyRender(my_questions, survey_div_id) {
  var survey = new Survey.Survey(
    {pages:[{name:"Tibetan",questions:my_questions, title:"" }]}
  );
  survey.render(survey_div_id);
  return survey;
}

function surveyOnComplete(survey, div_id) {
  survey.onComplete.add(function (s) {
    // alert("The results are:" + JSON.stringify(s.data));
    document.getElementById(div_id)
      .innerHTML = I18n.t('survey.result') + JSON.stringify(s.data);
    // pieChart(div_id, JSON.stringify(s.data));
    donutChart(div_id, JSON.stringify(s.data));
    addSurveyMenu(div_id);
var htmlObject = $(s); // jquery call
    // {"1":"F","2":["W","A"],"3":["A"],"4":["F","A"],"5":["A","F","W"],"8":["W"],"9":["A","W"],"10":["A"],"18":["W"]}
    // s.sendResult('e544a02f-7fff-4ffb-b62d-6a9aa16efd7c');
  });
}

function addSurveyMenu(div_id) {
    var div = document.createElement('div');

    div.className = 'row';

    div.innerHTML = '\
      <input type="button" class="openSegmentBtn" data-index="0" value="Air" />\
      <input type="button" class="openSegmentBtn" data-index="1" value="Fire" />\
      <input type="button" class="openSegmentBtn" data-index="2" value="Wather" />\
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
		createSurvey('4_survey', 8, [40, 40, '']);
	});
	$("#refreshBtn").on("click", function(e) {
		pie.redraw();
	});

  $(".openSegmentBtn").on("click", function(e) {
		var index = parseInt($(e.target).data("index"), 10);
		pie.openSegment(index);
	});
});


function pieChartDefault(div_id, dataSet) {
  var pie = new d3pie(div_id, {
  	header: {
  		title: {
  			text:    "",
  			color:    "#333333",
  			fontSize: 18,
  			font:     "arial"
  		},
  		subtitle: {
  			color:    "#666666",
  			fontSize: 14,
  			font:     "arial"
  		},
  		location: "top-center",
  		titleSubtitlePadding: 8
  	},
  	footer: {
  		text: 	  "",
  		color:    "#666666",
  		fontSize: 14,
  		font:     "arial",
  		location: "left"
  	},
  	size: {
  		canvasHeight: 500,
  		canvasWidth: 500,
  		pieInnerRadius: 0,
  		pieOuterRadius: null
  	},
  	data: {
  		sortOrder: "none",
  		smallSegmentGrouping: {
  			enabled: false,
  			value: 1,
  			valueType: "percentage",
  			label: "Other",
  			color: "#cccccc"
  		},

  		// REQUIRED! This is where you enter your pie data; it needs to be an array of objects
  		// of this form: { label: "label", value: 1.5, color: "#000000" } - color is optional
  		content: []
  	},
  	labels: {
  		outer: {
  			format: "label",
  			hideWhenLessThanPercentage: null,
  			pieDistance: 30
  		},
  		inner: {
  			format: "percentage",
  			hideWhenLessThanPercentage: null
  		},
  		mainLabel: {
  			color: "#333333",
  			font: "arial",
  			fontSize: 10
  		},
  		percentage: {
  			color: "#dddddd",
  			font: "arial",
  			fontSize: 10,
  			decimalPlaces: 0
  		},
  		value: {
  			color: "#cccc44",
  			font: "arial",
  			fontSize: 10
  		},
  		lines: {
  			enabled: true,
  			style: "curved",
  			color: "segment" // "segment" or a hex color
  		}
  	},
  	effects: {
  		load: {
  			effect: "default", // none / default
  			speed: 1000
  		},
  		pullOutSegmentOnClick: {
  			effect: "bounce", // none / linear / bounce / elastic / back
  			speed: 300,
  			size: 10
  		},
  		highlightSegmentOnMouseover: true,
  		highlightLuminosity: -0.2
  	},
  	tooltips: {
  		enabled: false,
  		type: "placeholder", // caption|placeholder
  		string: "",
  		placeholderParser: null,
  		styles: {
  			fadeInSpeed: 250,
  			backgroundColor: "#000000",
  			backgroundOpacity: 0.5,
  			color: "#efefef",
  			borderRadius: 2,
  			font: "arial",
  			fontSize: 10,
  			padding: 4
  		}
  	},

  	misc: {
  		colors: {
  			background: null, // transparent
  			segments: [
  				"#2484c1", "#65a620", "#7b6888", "#a05d56", "#961a1a",
  				"#d8d23a", "#e98125", "#d0743c", "#635222", "#6ada6a",
  				"#0c6197", "#7d9058", "#207f33", "#44b9b0", "#bca44a",
  				"#e4a14b", "#a3acb2", "#8cc3e9", "#69a6f9", "#5b388f",
  				"#546e91", "#8bde95", "#d2ab58", "#273c71", "#98bf6e",
  				"#4daa4b", "#98abc5", "#cc1010", "#31383b", "#006391",
  				"#c2643f", "#b0a474", "#a5a39c", "#a9c2bc", "#22af8c",
  				"#7fcecf", "#987ac6", "#3d3b87", "#b77b1c", "#c9c2b6",
  				"#807ece", "#8db27c", "#be66a2", "#9ed3c6", "#00644b",
  				"#005064", "#77979f", "#77e079", "#9c73ab", "#1f79a7"
  			],
  			segmentStroke: "#ffffff"
  		},
  		gradient: {
  			enabled: false,
  			percentage: 95,
  			color: "#000000"
  		},
  		canvasPadding: {
  			top: 5,
  			right: 5,
  			bottom: 5,
  			left: 5
  		},
  		pieCenterOffset: {
  			x: 0,
  			y: 0
  		},
  		cssPrefix: null
  	},
  	callbacks: {
  		onload: null,
  		onMouseoverSegment: null,
  		onMouseoutSegment: null,
  		onClickSegment: null
  	}
  });
}

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

function donutChart(div_id, dataSet) {
  var pie = new d3pie(div_id, {
    "header": {
      "title": {
        "text": "Last Constitutional Typology",
        "fontSize": 22,
        "font": "verdana"
      },
      "subtitle": {
        "text": "Constitutional Typology, Tibetan typology",
        "color": "#999999",
        "fontSize": 10,
        "font": "verdana"
      },
      "titleSubtitlePadding": 12
    },
    "footer": {
      "text": "Test again",
      "color": "#999999",
      "fontSize": 11,
      "font": "open sans",
      "location": "bottom-center"
    },
    "size": {
      "canvasHeight": 400,
      "canvasWidth": 590,
      "pieInnerRadius": "44%",
      "pieOuterRadius": "100%"
    },
    "data": {
      "sortOrder": "random",
      "smallSegmentGrouping": {
        "enabled": true
      },
      "content": [
        {
          "label": "Air - Lung",
          "value": 8,
          "color": "#2383c1"
        },
        {
          "label": "Fire - Tripa",
          "value": 5,
          "color": "#64a61f"
        },
        {
          "label": "Wather - Bagan",
          "value": 2,
          "color": "#df1212"
        }
      ]
    },
    "labels": {
      "outer": {
        "pieDistance": 32
      },
      "mainLabel": {
        "color": "#000000",
        "font": "verdana"
      },
      "percentage": {
        "color": "#ffffff",
        "font": "verdana",
        "decimalPlaces": 1
      },
      "value": {
        "color": "#000000",
        "font": "verdana"
      },
      "lines": {
        "enabled": true
      },
      "truncation": {
        "enabled": true
      }
    },
    "tooltips": {
      "enabled": true,
      "type": "placeholder",
      "string": "{label}: {value}, {percentage}%",
      "styles": {
        "fadeInSpeed": 485
      }
    },
    "effects": {
      "load": {
        "speed": 1500
      },
      "pullOutSegmentOnClick": {
        "effect": "linear",
        "speed": 400,
        "size": 8
      }
    },
    "misc": {
      "pieCenterOffset": {
      "y": 20
      }
    },
    "callbacks": {}
  });
}
