// $(function() {
//   var $yeti = $('#yeti');
//   var $transitionList = $('#transitionList');
//
//   $('#transitioner').click(function() {
//     MotionUI.animateIn($yeti, $transitionList.val());
//   });
// });

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




// {pages:[{name:"Tibetan",questions:[{type:"radiogroup",choices:[{value:"",text:"0-5"},{value:"W",text:"5-25"},{value:"F",text:"25-60"},{value:"A",text:"60+"}],colCount:4,name:"How old are you?",otherText:"5 - 25 years"},{type:"checkbox",choices:[{value:"A",text:"Ectomorph"},{value:"F",text:"Mesomorph"},{value:"W",text:"Endomorph"}],choicesOrder:"random",colCount:3,name:"Which body type fits you most closely?"},{type:"checkbox",choices:[{value:"A",text:"Cool and Dry"},{value:"F",text:"Hot and Dry"},{value:"W",text:"Cold and Wet"}],choicesOrder:"random",colCount:3,name:"Which of the following climates generally does not agree with your health?"},{type:"checkbox",choices:[{value:"A",text:"Hot and Moderately Dry"},{value:"F",text:"Cold and Wet"},{value:"W",text:"Cool and Dry"}],choicesOrder:"random",colCount:3,name:"Which of the following environments or climates agrees with your health?"},{type:"checkbox",choices:[{value:"A",text:"Autumn"},{value:"F",text:"Winter and Spring"},{value:"W",text:"Summer"}],choicesOrder:"random",colCount:3,name:"Which of the following seasons agrees with your health?"},{type:"checkbox",choices:[{value:"A",text:"Summer"},{value:"F",text:"Autumn"},{value:"W",text:"Winter and Spring"}],choicesOrder:"random",colCount:3,name:"Which of the following does not agree with your health?"},{type:"checkbox",choices:[{value:"A",text:"noon - 3pm and midnight - 2am"},{value:"F",text:"8-11am and 8pm - midnight"},{value:"W",text:"before 7am and 5-8pm"}],choicesOrder:"random",colCount:3,name:"During which part of the day do you feel best with your body, mind and energy?"}],title:"Tibetan title"}]});
//  short version for non user

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

var survey = new Survey.Survey(
  {pages:[{name:"Tibetan",questions:[
    {type:"radiogroup",choices:[
      {value:"-",text:"0-5"},
      {value:"W",text:"5-25"},
      {value:"F",text:"25-60"},
      {value:"A",text:"60+"}],
      colCount:4,
      name:"1",
      title:"How old are you?",
      isRequired:false,
      otherText:"5 - 25 years"},
    {type:"checkbox",choices:[
        {value:"A",text:"Ectomorph"},
        {value:"F",text:"Mesomorph"},
        {value:"W",text:"Endomorph"}],
      choicesOrder:"random",
      colCount:3,
      name:"Which body type fits you most closely?"},
    {type:"checkbox",choices:[
        {value:"A",text:"Cool and Dry"},
        {value:"F",text:"Hot and Dry"},
        {value:"W",text:"Cold and Wet"}],
      choicesOrder:"random",
      colCount:3,
      name:"Which of the following climates generally does not agree with your health?"},
    {type:"checkbox",choices:[
        {value:"A",text:"Hot and Moderately Dry"},
        {value:"F",text:"Cold and Wet"},
        {value:"W",text:"Cool and Dry"}],
      choicesOrder:"random",
      colCount:3,
      name:"Which of the following environments or climates agrees with your health?"},
    {type:"checkbox",choices:[
        {value:"A",text:"Autumn"},
        {value:"F",text:"Winter and Spring"},
        {value:"W",text:"Summer"}],
      choicesOrder:"random",
      colCount:3,
      name:"Which of the following seasons agrees with your health?"},
    {type:"checkbox",choices:[
        {value:"A",text:"Summer"},
        {value:"F",text:"Autumn"},
        {value:"W",text:"Winter and Spring"}],
      choicesOrder:"random",
      colCount:3,
      name:"Which of the following does not agree with your health?"},
    {type:"checkbox",choices:[
        {value:"A",text:"noon - 3pm and midnight - 2am"},
        {value:"F",text:"8-11am and 8pm - midnight"},
        {value:"W",text:"before 7am and 5-8pm"}],
      choicesOrder:"random",
      colCount:3,
      name:"During which part of the day do you feel best with your body, mind and energy?"},

    {type:"checkbox",choices:[
        { value: I18n.t("survey.008_question.01_choice_value"),
          text: I18n.t("survey.008_question.01_choice_text")},
        { value: I18n.t("survey.008_question.02_choice_value"),
          text: I18n.t("survey.008_question.02_choice_text")},
        { value: I18n.t("survey.008_question.03_choice_value"),
          text: I18n.t("survey.008_question.03_choice_text")}],
      choicesOrder:"random",
      colCount:3,
      name: I18n.t("survey.008_question.name"),
      title: I18n.t("survey.008_question.title"),
      otherText: I18n.t("survey.008_question.other_text") }

    ],title:"Tibetan title"
  }]}
);
survey.onComplete.add(function (s) {
 alert("The results are:" + JSON.stringify(s.data));
 });
survey.render("surveyContainer");


survey.onComplete.add(function (s) {
    document.getElementById("surveyContainer").innerHTML = "The survey result: " + JSON.stringify(s.data);
    s.sendResult('e544a02f-7fff-4ffb-b62d-6a9aa16efd7c');
});
survey.onSendResult.add(function(s, options) {
    if(options.success) {
        s.getResult('d72c2b05-2449-4838-99b2-c3f0ec76da7a', 'solution');
    }
});

survey.onGetResult.add(function(s, options) {
    if(options.success) {
        showChart(options.dataList);
    }
});
