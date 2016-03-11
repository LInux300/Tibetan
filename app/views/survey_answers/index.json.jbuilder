json.array!(@survey_answers) do |survey_answer|
  json.extract! survey_answer, :id, :title, :topic, :answer, :user_id
  json.url survey_answer_url(survey_answer, format: :json)
end
