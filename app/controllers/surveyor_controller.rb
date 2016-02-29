# encoding: UTF-8
module SurveyorControllerCustomMethods
  def self.included(base)
    # base.send :before_filter, :require_user   # AuthLogic
    # base.send :before_filter, :login_required  # Restful Authentication
    # base.send :layout, 'surveyor_custom'
  end

  # Actions
  def new
    super
    # @title = "You can take these surveys"
  end
  def create
    super
  end
  def show
    super
  end
  def edit
    super
  end
  def update
  #super
  question_ids_for_dependencies = (r_params || []).map{|k,v| v["question_id"] }.compact.uniq
  saved = load_and_update_response_set_with_retries

  return redirect_with_message(surveyor_finish, :notice, t('surveyor.completed_survey')) if saved && finish_params

  respond_to do |format|
    format.html do
      if @response_set.nil?
        return redirect_with_message(surveyor.available_surveys_path, :notice, t('surveyor.unable_to_find_your_responses'))
      else
        flash[:notice] = t('surveyor.unable_to_update_survey') unless saved
        redirect_to surveyor.edit_my_survey_path(anchor: anchor_from(section_params), section: section_id_from(params))
      end
    end
    format.js do
      if @response_set
        render json: @response_set.reload.all_dependencies(question_ids_for_dependencies)
      else
        render text: "No response set #{response_set_code_params}",
        status: 404
      end
    end
  end
  end

  # Paths
  def surveyor_index
    # most of the above actions redirect to this method
    super # surveyor.available_surveys_path
  end
  def surveyor_finish
    # the update action redirects to this method if given params[:finish]
    super # surveyor.available_surveys_path
  end
end
class SurveyorController < ApplicationController
  include Surveyor::SurveyorControllerMethods
  include SurveyorControllerCustomMethods
end


private
  def r_params
    return unless params[:r]
    params.require(:r).permit!
  end

  def section_params
    return unless params[:section]
    params.require(:section).permit!
  end

  def finish_params
    return if !params[:finish]
    params.require(:finish)
  end

  def response_set_code_params
    return unless params[:response_set_code]
    params.require(:response_set_code).permit!
  end
