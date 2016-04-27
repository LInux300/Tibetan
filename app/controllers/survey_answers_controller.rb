class SurveyAnswersController < ApplicationController
  before_filter :authenticate_admin!, only: [:show, :edit, :update, :destroy, :index, :new]
  before_action :set_survey_answer, only: [:show, :edit, :update, :destroy]

  # GET /survey_answers
  # GET /survey_answers.json
  def index
    @survey_answers = SurveyAnswer.all
  end

  # GET /survey_answers/1
  # GET /survey_answers/1.json
  def show
  end

  # GET /survey_answers/new
  def new
    @survey_answer = SurveyAnswer.new
  end

  # GET /survey_answers/1/edit
  def edit
  end

  def send_response
    if params['multi_answers']
      params['survey_answer']['title'] = params['title'].to_s
      params['survey_answer']['topic'] = params['topic'].to_s
      params['survey_answer']['answer'] = params['multi_answers'].to_s
      params['survey_answer']['counter'] = params['counter'].to_s
      # counter_all  default value is for last_answer
      params['survey_answer']['counter_all'] = params['counter'].to_s
      params['survey_answer']['type_questions'] = params['types'].to_s
    end

    user_id = current_user ? current_user.id : nil
    last_answer = SurveyAnswer.where(:user_id => user_id).last
    if last_answer
      last = JSON.parse(last_answer.counter_all.to_s)
      current = JSON.parse(params['counter'])

      Rails.logger.debug(current)
      (current).each do |key, value|
        last[key]? last[key] = value + last[key] : last[key] = value
      end

      db_string = "{\"1\":#{last["1"]},\"2\":#{last["2"]},\"3\":#{last["3"]}}"
      params['survey_answer']['counter_all'] = db_string
    end
  end

  # POST /survey_answers
  # POST /survey_answers.json
  def create
    # survey_answer_params# {"utf8"=>"✓", "authenticity_token"=>"pesojsHKBEq7mPL5DzJyqg5kTptVyKF6HYZIYXUbtKaZ8y3OZufBvcRhlrDzsv+L9qsNwsrFXlyyOjG8a5H+OA==", "survey_answer"=>{"title"=>"titeld nfls ", "topic"=>"topic fsd ", "answer"=>"answer jljf klf", "user_id"=>"1"}, "commit"=>"Create Survey answer"}
    if params['survey_answer']
      # {"title"=>"titeld nfls ", "topic"=>"topic fsd ", "answer"=>"answer jljf klf", "user_id"=>"1"}
    else
      # store_survey_answers prepare params
      params['survey_answer'] = {
        user_id: current_user ? current_user.id : ''
      }

      send_response
    end

    @survey_answer = SurveyAnswer.new(survey_answer_params)

    respond_to do |format|
      if @survey_answer.save
        # format.html { redirect_to @survey_answer, notice: 'Survey answer was successfully created.' }
        format.json { render :show, status: :created, location: @survey_answer }
      else
        format.html { render :new }
        format.json { render json: @survey_answer.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /survey_answers/1
  # PATCH/PUT /survey_answers/1.json
  def update
    respond_to do |format|
      if @survey_answer.update(survey_answer_params)
        format.html { redirect_to @survey_answer, notice: 'Survey answer was successfully updated.' }
        format.json { render :show, status: :ok, location: @survey_answer }
      else
        format.html { render :edit }
        format.json { render json: @survey_answer.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /survey_answers/1
  # DELETE /survey_answers/1.json
  def destroy
    @survey_answer.destroy
    respond_to do |format|
      format.html { redirect_to survey_answers_url, notice: 'Survey answer was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_survey_answer
      @survey_answer = SurveyAnswer.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def survey_answer_params
      params.require(:survey_answer)
        .permit(:title, :topic, :answer, :user_id, :type_questions, :counter, :counter_all)
    end
end
