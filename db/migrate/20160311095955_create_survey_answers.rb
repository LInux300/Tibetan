class CreateSurveyAnswers < ActiveRecord::Migration
  def change
    create_table :survey_answers do |t|
      t.string :title
      t.string :topic
      t.string :counter
      t.string :counter_all
      t.text :answer
      t.text :type_questions
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
