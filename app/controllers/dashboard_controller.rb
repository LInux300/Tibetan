class DashboardController < ApplicationController
  before_action :be_fit

  def index
  end

  def last_answer_counter
    user_id = current_user ? current_user.id : nil

    last_answer = SurveyAnswer.where(:user_id => user_id).last
    if last_answer == nil
      last_answer_counter = '{"1":0,"2":0,"3":0}'
      last_answer_counter_all = last_answer_counter
      last_type_questions = '{"1":"0","2":"0","3":"0"}'
    else
      last_answer_counter = last_answer.counter
      last_answer_counter_all = last_answer.counter_all
      last_type_questions = last_answer.type_questions
    end
    all_user_answers = SurveyAnswer
      .where(:user_id => user_id)
      .last(10)

    data = {
      user_id: user_id,
      last_answer_counter: last_answer_counter,
      last_answer_counter_all: last_answer_counter_all,
      last_type_questions: last_type_questions,
      all_user_answers: all_user_answers
    }

    # Rails.logger.debug(data)
    render json: data, status: :ok
  end

  protected

  def be_fit
    # @last_answer = SurveyAnswer.find(params[:user_id]= current_user.id )
    # top_answers = SurveyAnswer.last(19).reverse # last 5 records in descending order
    # YourModel.all.order("id asc").limit(5).each do |d|
    # last_answer = current_user ? SurveyAnswer.find_by_user_id(current_user.id) : ''
    # SurveyAnswer.where(:user_id => current_user.id).scoping do
    # end
    user_id = current_user ? current_user.id : nil

    last_answer = SurveyAnswer.where(:user_id => user_id).last
    if last_answer == nil
      last_answer_counter = '{"1":0,"2":0,"3":0}'
      last_answer_counter_all = last_answer_counter
    else
      last_answer_counter = last_answer.counter
      last_answer_counter_all = last_answer.counter_all
    end

    all_user_answers = SurveyAnswer
      .where(:user_id => user_id)
      .last(10)

    # last_x_records = SurveyAnswer
    #   .where(:user_id => user_id)
    #   .last(20)

    # last_24_hours = SurveyAnswer
    #   .where("created_at > ?", Time.now-24.hours)
    #   .where(:user_id => user_id)
    # #
    # last_week = SurveyAnswer
    #   .where("created_at > ?", Time.now-7.days)
    #   .where(:user_id => user_id)
    #
    # two_weeks = SurveyAnswer
    #   .where("created_at > ?", Time.now-14.days)
    #   .where(:user_id => user_id)
    #
    # beginning_of_month = SurveyAnswer
    #   .where("created_at > ?", Date.today.at_beginning_of_month)
    #   .where(:user_id => user_id)
    #
    # three_months = SurveyAnswer
    #   .where("created_at > ?", Date.today.at_beginning_of_month.last_month.last_month)
    #   .where(:user_id => user_id)
    #
    # six_months = SurveyAnswer
    #   .where("created_at > ?", Date.today.at_beginning_of_month.last_month.last_month.last_month.last_month.last_month)
    #   .where(:user_id => user_id)


    # last_24_hours.each do |answer|
    #   # Rails.logger.debug("ruda #{answer.answer}")
    #   Rails.logger.debug("ruda #{JSON.parse(answer.counter)['1']}")
    # end

    # ast_day = SurveyAnswer.where("created_at > ?", Time.now-7.days).count

    # lask_week = SurveyAnswer.last()
    # from_beginning_of_month = SurveyAnswer.last()
    # top_20 = SurveyAnswer.last(20)


    # get
    #
    gon.push({
     user_id: user_id,
     last_answer_counter: last_answer_counter,
     last_answer_counter_all: last_answer_counter_all,
     all_user_answers: all_user_answers,
    #  last_24_hours: last_24_hours,
    #  last_week: last_week,
    #  two_weeks: two_weeks,
    #  beginning_of_month: beginning_of_month,
    #  three_months: three_months,
    #  six_months: six_months,
    #  last_x_records: last_x_records
    #  last_week: last_week,
    #  from_beginning_of_month: from_beginning_of_month,
    #  top_20: top_20
    })
  end
end
