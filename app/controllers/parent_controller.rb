class ParentController < ApplicationController
  def index
  end

  def student_api
    respond_to do |format|
      format.js {
        render json: StudentRecord.where(student_information_id: 1).order("created_at DESC")
      }
    end
  end
end
